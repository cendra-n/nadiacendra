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
    description:
      "Lenguaje que aprendí en la Tecnicatura y practiqué en simulaciones de proyectos backend. Me gusta su rigor.",
  },
  {
    title: "Escucha activa",
    category: "Humana",
    description:
      "Desarrollada en años de atención al cliente y venta directa. Escuchar primero, resolver después.",
  },
  {
    title: "Python",
    category: "Técnica",
    description:
      "Autodidacta por curiosidad. Lo uso para scripts, automatizaciones y pensar en estructuras de datos.",
  },
  {
    title: "Comunicación asertiva",
    category: "Humana",
    description:
      "Del emprendimiento: aprendí a explicar ideas técnicas sin tecnicismos innecesarios.",
  },
  {
    title: "Trabajo en equipo",
    category: "Humana",
    description:
      "Fábrica y proyectos colaborativos me enseñaron que el resultado mejora cuando se comparte.",
  },
];

function Index() {
  return (
    <section className="min-h-screen bg-background px-6 py-20 text-foreground md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            LÓGICA BACKEND,
            <br />
            VALOR HUMANO.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Soy Técnica Analista de Sistemas y Desarrolladora Backend Java. Durante los últimos 6 meses he participado en simulaciones y entornos IT colaborativos donde aprendí a traducir problemas reales en soluciones estructuradas. Mi camino no arrancó en una oficina: durante 7 años trabajé en fábrica, donde construí disciplina, constancia y la capacidad de resolver bajo presión. Luego emprendí en venta directa y diseño digital, lo que me enseñó a escuchar, comunicarme con claridad y trabajar con personas reales. Esa combinación —lógica de backend + experiencia humana— es lo que ofrezco.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bricks.map((brick) => (
            <div
              key={brick.title}
              className="group relative flex min-h-[160px] flex-col justify-between overflow-hidden bg-secondary p-5 text-secondary-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground focus-within:bg-primary focus-within:text-primary-foreground"
              tabIndex={0}
            >
              <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase transition-colors group-hover:text-primary-foreground/70 group-focus-within:text-primary-foreground/70">
                {brick.category}
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold">{brick.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  {brick.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
