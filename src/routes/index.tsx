import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lógica Backend, Valor Humano" },
      { name: "description", content: "Portfolio de una Técnica Analista de Sistemas y Desarrolladora Backend Java." },
      { property: "og:title", content: "Lógica Backend, Valor Humano" },
      { property: "og:description", content: "Portfolio de una Técnica Analista de Sistemas y Desarrolladora Backend Java." },
    ],
  }),
  component: Index,
});

interface Brick {
  title: string;
  category: string;
  description: string;
}

const bricks: Brick[] = [
  {
    title: "Java",
    category: "Técnica",
    description: "Mi motor principal. Backend, POO y rigor.",
  },
  {
    title: "Escucha activa",
    category: "Humana",
    description: "Forjada en venta cara a cara.",
  },
  {
    title: "Python",
    category: "Técnica",
    description: "Autodidacta. Scripts y automatizaciones.",
  },
  {
    title: "Comunicación asertiva",
    category: "Humana",
    description: "Explicar sin tecnicismos, del emprendimiento.",
  },
  {
    title: "Trabajo en equipo",
    category: "Humana",
    description: "7 años de fábrica: el resultado se comparte.",
  },
  {
    title: "SQL",
    category: "Técnica",
    description: "Consultas, joins y modelado relacional.",
  },
  {
    title: "Disciplina",
    category: "Humana",
    description: "Turnos rotativos enseñan constancia real.",
  },
  {
    title: "Git",
    category: "Técnica",
    description: "Control de versiones en proyectos colaborativos.",
  },
  {
    title: "Resolución bajo presión",
    category: "Humana",
    description: "Línea de producción: parar cuesta plata.",
  },
  {
    title: "Diseño digital",
    category: "Híbrida",
    description: "Etapa freelance: pensar visual y funcional.",
  },
];

function Index() {
  return (
    <section className="min-h-screen bg-background px-6 py-20 text-foreground md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-3xl">
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            LÓGICA BACKEND,
            <br />
            VALOR HUMANO.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Soy Técnica Analista de Sistemas y Desarrolladora Backend Java. Durante los últimos 6 meses he participado en simulaciones y entornos IT colaborativos donde aprendí a traducir problemas reales en soluciones estructuradas. Mi camino no arrancó en una oficina: durante 7 años trabajé en fábrica, donde construí disciplina, constancia y la capacidad de resolver bajo presión. Luego emprendí en venta directa y diseño digital, lo que me enseñó a escuchar, comunicarme con claridad y trabajar con personas reales. Esa combinación —lógica de backend + experiencia humana— es lo que ofrezco.
          </p>
        </div>

        <div className="relative overflow-hidden bg-white px-6 py-16 text-black md:px-12 md:py-20">
          {/* Marco geométrico — esquina superior izquierda */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 h-24 w-40 bg-black"
            style={{ clipPath: "polygon(0 0, 100% 0, 60% 100%, 0 100%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 h-16 w-56 bg-primary"
            style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-24 h-40 w-3 origin-top-left rotate-[20deg] bg-primary"
          />

          {/* Marco geométrico — esquina inferior derecha */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 bottom-0 h-24 w-40 bg-black"
            style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 bottom-0 h-16 w-56 bg-primary"
            style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-24 bottom-0 h-40 w-3 origin-bottom-right -rotate-[20deg] bg-primary"
          />

          <div className="relative z-10">
            <div className="mb-8 flex items-baseline justify-between border-b border-black/20 pb-4">
              <h2 className="font-display text-xs font-bold tracking-[0.25em] text-black uppercase">
                / Muro de habilidades
              </h2>
              <span className="text-xs tracking-widest text-black/50 uppercase">
                Hover ↗
              </span>
            </div>

            <div
              className="grid gap-2"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}
            >
              {bricks.map((brick) => (
                <div
                  key={brick.title}
                  tabIndex={0}
                  className="group relative flex h-20 cursor-default items-center justify-center bg-black px-3 text-center transition-colors duration-150 hover:bg-primary focus:bg-primary focus:outline-none"
                >
                  <span className="font-display text-sm font-semibold tracking-tight text-white">
                    {brick.title}
                  </span>

                  <div
                    role="tooltip"
                    className="pointer-events-none absolute left-1/2 top-full z-30 mt-2 w-56 -translate-x-1/2 border-2 border-black bg-white px-3 py-2 text-left opacity-0 shadow-[4px_4px_0_0_var(--color-primary)] transition-opacity duration-150 group-hover:opacity-100 group-focus:opacity-100"
                  >
                    <span className="block text-[10px] font-bold tracking-widest text-primary uppercase">
                      {brick.category}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-black">
                      {brick.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

