import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  born: number;
  life: number;
  size: number;
}

interface Props {
  /** Largo del rastro (cantidad de partículas vivas). */
  trailLength?: number;
  /** Suavizado del seguimiento (0-1). */
  inertia?: number;
  /** Tiempo quieto antes de desvanecerse (ms). */
  fadeDelayMs?: number;
  /** Duración del desvanecido (ms). */
  fadeDurationMs?: number;
}

/**
 * Rastro de "cursor fantasma": mancha suave que sigue al mouse con inercia
 * y se desvanece cuando el cursor se detiene.
 * Usa el token --primary del tema (borgoña en claro, rosa en oscuro).
 * Canvas fijo, pointer-events none: no interfiere con nada.
 */
export function GhostCursor({
  trailLength = 50,
  inertia = 0.5,
  fadeDelayMs = 1000,
  fadeDurationMs = 1500,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let primary = "rgb(116 3 35)";

    const readColor = () => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim();
      if (v) primary = v.startsWith("oklch") || v.startsWith("rgb") ? v : primary;
    };
    readColor();
    const observer = new MutationObserver(readColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const target = { x: -100, y: -100 };
    const ghost = { x: -100, y: -100 };
    let lastMove = performance.now();
    let initialized = false;
    const particles: Particle[] = [];

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      lastMove = performance.now();
      if (!initialized) {
        ghost.x = target.x;
        ghost.y = target.y;
        initialized = true;
      }
    };
    window.addEventListener("pointermove", onMove);

    const tick = () => {
      const now = performance.now();
      // Inercia: el fantasma persigue al cursor
      const k = 1 - Math.pow(1 - Math.min(Math.max(inertia, 0.01), 1), 2);
      ghost.x += (target.x - ghost.x) * k * 0.35;
      ghost.y += (target.y - ghost.y) * k * 0.35;

      const idle = now - lastMove;
      const active = idle < fadeDelayMs;

      if (active && initialized) {
        particles.push({
          x: ghost.x + (Math.random() - 0.5) * 6,
          y: ghost.y + (Math.random() - 0.5) * 6,
          born: now,
          life: 700 + Math.random() * 500,
          size: 10 + Math.random() * 16,
        });
        while (particles.length > trailLength) particles.shift();
      }

      ctx.clearRect(0, 0, w, h);

      // Opacidad global: 1 activo, baja durante fadeDurationMs tras fadeDelayMs
      let globalAlpha = 1;
      if (!active) {
        globalAlpha = Math.max(0, 1 - (idle - fadeDelayMs) / fadeDurationMs);
      }

      if (globalAlpha > 0) {
        ctx.globalCompositeOperation = "lighter";
        for (const p of particles) {
          const age = (now - p.born) / p.life;
          if (age >= 1) continue;
          const a = (1 - age) * 0.35 * globalAlpha;
          const r = p.size * (1 - age * 0.6);
          const base = primary.slice(0, -1); // quita el ")" final
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
          g.addColorStop(0, `${base} / ${a})`);
          g.addColorStop(1, `${base} / 0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Limpieza de partículas muertas
      for (let i = particles.length - 1; i >= 0; i--) {
        if (now - particles[i].born > particles[i].life) particles.splice(i, 1);
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [trailLength, inertia, fadeDelayMs, fadeDurationMs]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 h-full w-full"
    />
  );
}
