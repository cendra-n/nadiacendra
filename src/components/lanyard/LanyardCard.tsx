import { lazy, Suspense, useEffect, useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";

const Lanyard = lazy(() => import("./Lanyard"));

// Card face colors per theme, aligned with the brand palette in styles.css.
const THEMES = {
  light: { bg: "#740323", text: "#FBEDEF", accent: "#C1E3D5", wave: "#FCB4C0" },
  dark: { bg: "#FCB4C0", text: "#4A0A1C", accent: "#740323", wave: "#C1E3D5" },
} as const;

function buildFrontTexture(dark: boolean, lines: readonly string[]): string {
  const c = THEMES[dark ? "dark" : "light"];
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1536;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = c.bg;
  ctx.fillRect(0, 0, 1024, 1536);

  // Decorative dot grids (top-right / bottom-left)
  ctx.fillStyle = c.accent;
  for (let r = 0; r < 5; r++) {
    for (let col = 0; col < 5; col++) {
      ctx.beginPath();
      ctx.arc(860 + col * 26, 120 + r * 26, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(70 + col * 26, 1180 + r * 26, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Soft wave at the bottom
  ctx.fillStyle = c.wave;
  ctx.beginPath();
  ctx.moveTo(0, 1300);
  ctx.quadraticCurveTo(512, 1140, 1024, 1300);
  ctx.lineTo(1024, 1536);
  ctx.lineTo(0, 1536);
  ctx.closePath();
  ctx.fill();

  // Main message
  ctx.fillStyle = c.text;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = '700 118px "Space Grotesk", sans-serif';
  lines.forEach((line, i) => {
    ctx.fillText(line, 512, 620 + i * 140);
  });

  return canvas.toDataURL("image/png");
}

/**
 * Client-only wrapper: the 3D canvas (WebGL + physics) never renders on the server.
 * The card face is generated on the fly so it follows the active color theme.
 */
export function LanyardCard() {
  const { t } = useI18n();
  const lines = t.contact.lanyardLines;
  const [mounted, setMounted] = useState(false);
  const [frontImage, setFrontImage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const build = () =>
      setFrontImage(buildFrontTexture(document.documentElement.classList.contains("dark"), lines));
    build();
    const observer = new MutationObserver(build);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [lines]);

  if (!mounted || !frontImage) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-0 right-2 top-20 z-10 hidden w-[210px] lg:block xl:w-[230px]"
    >
      <div className="pointer-events-auto h-full w-full">
        <Suspense fallback={null}>
          <Lanyard
            position={[2.1, 0, 21]}
            gravity={[0, -40, 0]}
            fov={22}
            imageFit="cover"
            lanyardWidth={1.2}
            frontImage={frontImage}
          />
        </Suspense>
      </div>
    </div>
  );
}
