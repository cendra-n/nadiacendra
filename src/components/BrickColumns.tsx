import { Brick } from "./Brick";

/**
 * Dos columnas de ladrillos flotantes, uno a cada lado de la pantalla.
 * Cada ladrillo tiene su propia velocidad y desfase — nunca sincronizados.
 */
export function BrickColumns() {
  const left = Array.from({ length: 7 }, (_, i) => ({
    duration: 7 + ((i * 1.7) % 5),
    delay: (i * 0.83) % 4,
    amplitude: 14 + ((i * 3) % 10),
  }));
  const right = Array.from({ length: 7 }, (_, i) => ({
    duration: 8 + ((i * 2.1) % 5),
    delay: (i * 1.13) % 4,
    amplitude: 16 + ((i * 2) % 10),
  }));

  return (
    <>
      <aside
        aria-hidden="true"
        className="pointer-events-none fixed inset-y-0 left-0 z-10 hidden w-24 items-center md:flex"
      >
        <div className="pointer-events-auto flex h-full w-full flex-col items-center justify-around py-16">
          {left.map((b, i) => (
            <Brick
              key={`L-${i}`}
              driftDuration={b.duration}
              delay={b.delay}
              driftAmplitude={b.amplitude}
              wordAnchor="left"
            />
          ))}
        </div>
      </aside>
      <aside
        aria-hidden="true"
        className="pointer-events-none fixed inset-y-0 right-0 z-10 hidden w-24 items-center md:flex"
      >
        <div className="pointer-events-auto flex h-full w-full flex-col items-center justify-around py-16">
          {right.map((b, i) => (
            <Brick
              key={`R-${i}`}
              driftDuration={b.duration}
              delay={b.delay}
              driftAmplitude={b.amplitude}
              wordAnchor="right"
            />
          ))}
        </div>
      </aside>
    </>
  );
}
