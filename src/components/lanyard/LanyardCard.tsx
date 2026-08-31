import { lazy, Suspense, useEffect, useState } from "react";

const Lanyard = lazy(() => import("./Lanyard"));

/**
 * Client-only wrapper: the 3D canvas (WebGL + physics) never renders on the server.
 */
export function LanyardCard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-0 right-0 top-20 z-10 hidden w-[300px] lg:block xl:w-[340px]"
    >
      <div className="pointer-events-auto h-full w-full">
        <Suspense fallback={null}>
          <Lanyard position={[1.2, 0, 18]} gravity={[0, -40, 0]} fov={22} imageFit="contain" lanyardWidth={1.2} />
        </Suspense>
      </div>
    </div>
  );
}
