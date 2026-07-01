import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lógica Backend, Valor Humano" },
      {
        name: "description",
        content:
          "Portfolio de una Técnica Analista de Sistemas y Desarrolladora Backend Java.",
      },
      { property: "og:title", content: "Lógica Backend, Valor Humano" },
      {
        property: "og:description",
        content:
          "Portfolio de una Técnica Analista de Sistemas y Desarrolladora Backend Java.",
      },
    ],
  }),
  component: Index,
});

const KEYWORDS = [
  "Java",
  "Python",
  "Escucha activa",
  "Trabajo en equipo",
  "Comunicación asertiva",
  "Gestión",
];

interface Brick {
  id: number;
  left: number; // %
  width: number; // px
  height: number; // px
  duration: number; // s
  delay: number; // s
  keyword: string;
}

function useBricks(count: number): Brick[] {
  return useMemo(() => {
    // Deterministic-ish generation to avoid SSR mismatch flicker.
    const rand = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    return Array.from({ length: count }, (_, i) => {
      const r1 = rand(i + 1);
      const r2 = rand(i + 2.3);
      const r3 = rand(i + 5.7);
      const r4 = rand(i + 9.1);
      return {
        id: i,
        left: r1 * 100,
        width: 28 + r2 * 44,
        height: 10 + r3 * 14,
        duration: 18 + r4 * 22,
        delay: -r1 * 30,
        keyword: KEYWORDS[i % KEYWORDS.length],
      };
    });
  }, [count]);
}

function FloatingBricks() {
  const bricks = useBricks(42);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      aria-hidden={hovered === null}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {bricks.map((b) => {
        const isHover = hovered === b.id;
        return (
          <div
            key={b.id}
            onMouseEnter={() => setHovered(b.id)}
            onMouseLeave={() => setHovered((h) => (h === b.id ? null : h))}
            className="pointer-events-auto absolute flex items-center justify-center whitespace-nowrap font-display text-[10px] font-semibold uppercase tracking-widest transition-[background-color,color,transform,width] duration-200"
            style={{
              left: `${b.left}%`,
              bottom: `-${b.height + 20}px`,
              width: isHover ? "auto" : `${b.width}px`,
              minWidth: isHover ? `${b.width}px` : undefined,
              height: `${b.height}px`,
              paddingLeft: isHover ? "10px" : 0,
              paddingRight: isHover ? "10px" : 0,
              backgroundColor: isHover
                ? "var(--color-primary)"
                : "rgba(0,0,0,0.06)",
              color: isHover ? "#fff" : "transparent",
              animation: `brick-rise ${b.duration}s linear ${b.delay}s infinite`,
              transform: "translateY(0)",
            }}
          >
            {b.keyword}
          </div>
        );
      })}
      <style>{`
        @keyframes brick-rise {
          0%   { transform: translateY(0); opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { transform: translateY(-110vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function Index() {
  // Ensure body is white in case of any stray global styles.
  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#ffffff";
    return () => {
      document.body.style.backgroundColor = prev;
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-white text-black">
      <FloatingBricks />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
        {/* Hero / Storytelling */}
        <section>
          <p className="mb-6 font-display text-xs font-semibold tracking-[0.3em] uppercase text-primary">
            / Portfolio
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Lógica backend,
            <br />
            valor humano.
          </h1>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-black/80 md:text-lg">
            <p>
              Soy Técnica Analista de Sistemas y Desarrolladora Backend Java.
              Durante los últimos 6 meses trabajé en simulaciones y entornos IT
              colaborativos, aprendiendo a traducir problemas reales en
              soluciones estructuradas.
            </p>
            <p>
              Mi camino no empezó en una oficina. Fueron 7 años de fábrica los
              que me enseñaron disciplina, constancia y a resolver bajo presión.
              Después vinieron la venta directa y el diseño digital: ahí
              aprendí a escuchar, comunicarme con claridad y trabajar con
              personas reales.
            </p>
            <p>
              Esa mezcla —lógica de backend más experiencia humana— es lo que
              traigo a cada proyecto.
            </p>
          </div>
        </section>

        {/* Proyectos */}
        <section className="mt-28">
          <p className="mb-6 font-display text-xs font-semibold tracking-[0.3em] uppercase text-primary">
            / Proyectos
          </p>
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            En qué estoy trabajando
          </h2>

          <ul className="mt-10 divide-y divide-black/10 border-y border-black/10">
            {[
              {
                name: "API de gestión interna",
                stack: "Java · Spring Boot · PostgreSQL",
                note: "Simulación de flujo empresarial con endpoints REST y validaciones de negocio.",
              },
              {
                name: "Automatizaciones con Python",
                stack: "Python · Pandas",
                note: "Scripts para limpieza y consolidación de datos repetitivos.",
              },
              {
                name: "Prototipos de diseño digital",
                stack: "Figma · HTML · CSS",
                note: "Etapa freelance: interfaces claras para clientes no técnicos.",
              },
            ].map((p) => (
              <li
                key={p.name}
                className="flex flex-col gap-1 py-6 md:flex-row md:items-baseline md:justify-between md:gap-8"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-black/70">{p.note}</p>
                </div>
                <span className="font-mono text-xs tracking-wide text-black/50">
                  {p.stack}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-28 border-t border-black/10 pt-8 pb-4">
          <p className="font-mono text-xs tracking-wide text-black/50">
            Pasá el mouse por los bloques que flotan ↗
          </p>
        </footer>
      </div>
    </main>
  );
}
