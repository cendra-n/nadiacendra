import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nadia Cendra — Backend Developer" },
      {
        name: "description",
        content:
          "Portfolio de Nadia Cendra, Técnica Analista de Sistemas y Backend Developer en formación. Java, Spring Boot y Python, con base en experiencia laboral real fuera de IT.",
      },
      { property: "og:title", content: "Nadia Cendra — Backend Developer" },
      {
        property: "og:description",
        content:
          "Backend Developer en formación. Java, Spring Boot y Python. Grand Bourg, Buenos Aires.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const LINKS = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  email: "mailto:nadia.cendra@example.com",
  cv: "/cv-nadia-cendra.pdf",
};

const TECH_SKILLS = [
  "Java",
  "Spring Boot",
  "Python",
  "Django",
  "PostgreSQL",
  "REST APIs",
  "Git",
  "GitHub",
];

const HUMAN_SKILLS = [
  "Responsabilidad",
  "Comunicación",
  "Trabajo en equipo",
  "Adaptación",
  "Organización",
  "Aprendizaje continuo",
];

interface Project {
  name: string;
  context: string;
  problem: string;
  role: string;
  stack: string[];
  learned: string;
  repo?: string;
  status?: string;
}

const PROJECTS: Project[] = [
  {
    name: "Mentor Virtual",
    context: "Proyecto colaborativo — Innova Lab",
    problem:
      "Facilitar el acompañamiento a estudiantes mediante un asistente conversacional que respondiera dudas frecuentes y orientara sobre contenidos.",
    role:
      "Participé del backend y del trabajo en equipo con perfiles de distinta seniority. Colaboré en endpoints, integración con el modelo y revisión de código en grupo.",
    stack: ["Python", "Django", "IA"],
    learned:
      "Trabajar en un equipo real con roles definidos, entender un dominio ajeno y comunicar avances de forma clara.",
  },
  {
    name: "AURA",
    context: "Smart Projects — Foo Talent Group",
    problem:
      "Aportar a un sistema pensado como práctica profesional dentro del programa Smart Projects, con foco en backend Java.",
    role:
      "Sumé código en el backend en Spring Boot y practiqué el flujo completo de trabajo con Git, ramas y pull requests dentro de un equipo.",
    stack: ["Java", "Spring Boot"],
    learned:
      "Cómo se organiza un equipo backend en la vida real, más allá del ejercicio individual: convenciones, revisiones y ritmo compartido.",
  },
  {
    name: "Sistema de Gestión de Inventario",
    context: "Proyecto personal",
    problem:
      "Practicar por mi cuenta un CRUD completo pensando el problema desde cero: entidades, relaciones y operaciones básicas de stock.",
    role:
      "Diseño, desarrollo y pruebas hechos por mí. Es un proyecto de aprendizaje, no una solución productiva.",
    stack: ["Java", "Spring Boot", "PostgreSQL"],
    learned:
      "Sostener un proyecto de principio a fin sin nadie que me pase el enunciado. Equivocarme, refactorizar y seguir.",
    status: "En progreso",
  },
  {
    name: "Sistema de Gestión para Concesionaria",
    context: "Proyecto académico",
    problem:
      "Modelar una concesionaria (vehículos, clientes, operaciones) como trabajo integrador de la carrera.",
    role:
      "Análisis del dominio, modelado de datos e implementación. Trabajo pensado para aprobar y aprender, no para producción.",
    stack: ["Java", "MySQL"],
    learned:
      "Traducir un enunciado escrito en un modelo de datos coherente y defender decisiones frente a docentes.",
  },
];

function BrickMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 24"
      className={className}
      fill="none"
    >
      <rect x="0" y="0" width="26" height="10" fill="currentColor" />
      <rect x="28" y="0" width="14" height="10" fill="currentColor" opacity="0.5" />
      <rect x="44" y="0" width="16" height="10" fill="currentColor" opacity="0.25" />
      <rect x="0" y="12" width="14" height="10" fill="currentColor" opacity="0.5" />
      <rect x="16" y="12" width="26" height="10" fill="currentColor" opacity="0.25" />
      <rect x="44" y="12" width="16" height="10" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-black/50">
      <span>{index}</span>
      <span className="h-px w-6 bg-black/20" />
      <span>{children}</span>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen w-full bg-white font-sans text-black antialiased">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <BrickMark className="h-4 w-10 text-black" />
            <div className="leading-tight">
              <p className="font-display text-sm font-semibold tracking-tight text-black">
                Nadia Cendra
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/55">
                Backend Developer
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-black/70 md:flex">
            <a href="#sobre-mi" className="transition-colors hover:text-primary">
              Sobre mí
            </a>
            <a href="#stack" className="transition-colors hover:text-primary">
              Stack
            </a>
            <a href="#proyectos" className="transition-colors hover:text-primary">
              Proyectos
            </a>
            <a href="#contacto" className="transition-colors hover:text-primary">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 md:px-10">
        {/* Hero */}
        <section className="relative pt-20 pb-24 md:pt-28 md:pb-32">
          <BrickMark className="absolute right-0 top-16 hidden h-6 w-16 text-primary md:block" />

          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-black/55">
            Grand Bourg · Buenos Aires · Argentina
          </p>

          <h1 className="mt-6 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-black md:text-[4.25rem]">
            Lógica backend,
            <br />
            <span className="text-black/55">valor humano.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/75 md:text-lg">
            Soy <strong className="font-semibold text-black">Nadia Cendra</strong>,
            Técnica Analista de Sistemas y Backend Developer en formación. Doy mis
            primeros pasos profesionales en desarrollo, con base en varios años de
            experiencia laboral fuera de IT que me dejaron algo que sí tengo claro:
            cómo integrarme a un equipo, cumplir compromisos y aprender rápido.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={LINKS.cv}
              className="inline-flex items-center gap-2 bg-black px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-primary"
            >
              Descargar CV
              <span aria-hidden>↓</span>
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 border border-black/15 px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-black transition-colors hover:border-primary hover:text-primary"
            >
              Ver proyectos
              <span aria-hidden>↓</span>
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em]">
            {[
              ["GitHub", LINKS.github],
              ["LinkedIn", LINKS.linkedin],
              ["Email", LINKS.email],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-1.5 text-black/70 transition-colors hover:text-primary"
                >
                  {label}
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-black/10" />

        {/* Sobre mí */}
        <section id="sobre-mi" className="py-20 md:py-24">
          <SectionLabel index="01">Sobre mí</SectionLabel>

          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-black md:text-3xl">
                Todavía estoy construyendo mi camino en IT.
              </h2>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                Honesta sobre dónde estoy
              </p>
            </div>

            <div className="space-y-5 text-[15px] leading-relaxed text-black/75 md:text-base">
              <p>
                Mi experiencia técnica es inicial: seis meses de práctica en
                simulaciones y entornos IT colaborativos con Java, Spring Boot y
                Python. No vengo a aparentar seniority. Vengo a sumar, aprender
                y sostener el trabajo con criterio.
              </p>
              <p>
                Antes de programar pasé siete años en fábrica. Ahí aprendí a
                cumplir horarios, sostener la atención en tareas largas y
                resolver bajo presión con el equipo al lado. Después vino una
                etapa de emprendimiento independiente —venta directa y diseño
                digital de banners e invitaciones— donde aprendí a escuchar a
                un cliente, negociar tiempos y comunicarme con claridad.
              </p>
              <p>
                Esa combinación es la que traigo hoy: alguien con quien da
                gusto trabajar, que se integra rápido a un equipo y toma el
                aprendizaje técnico en serio.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-black/10" />

        {/* Stack */}
        <section id="stack" className="py-20 md:py-24">
          <SectionLabel index="02">Stack &amp; habilidades</SectionLabel>

          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-black">
                Técnicas
              </h3>
              <p className="mt-2 text-sm text-black/60">
                Herramientas con las que ya trabajé en prácticas, cursos o
                proyectos personales. Todavía en aprendizaje.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {TECH_SKILLS.map((s) => (
                  <li
                    key={s}
                    className="border border-black/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-black/80"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-black">
                Humanas
              </h3>
              <p className="mt-2 text-sm text-black/60">
                Habilidades formadas en años de trabajo real, dentro y fuera
                de IT.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {HUMAN_SKILLS.map((s) => (
                  <li
                    key={s}
                    className="bg-black px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-black/10" />

        {/* Proyectos */}
        <section id="proyectos" className="py-20 md:py-24">
          <SectionLabel index="03">Proyectos</SectionLabel>

          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-black md:text-3xl">
              Pocos proyectos, contados con honestidad.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-black/70">
              Prefiero mostrar cómo pienso y trabajo antes que inflar
              resultados. Algunos son colaborativos, otros personales o
              académicos. Aclaro siempre cuál fue mi participación real.
            </p>
          </div>

          <ol className="divide-y divide-black/10 border-y border-black/10">
            {PROJECTS.map((p, i) => (
              <li key={p.name} className="group grid gap-6 py-10 md:grid-cols-[auto_1fr] md:gap-10">
                <div className="flex items-start gap-4 md:w-56">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-black/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-tight tracking-tight text-black transition-colors group-hover:text-primary">
                      {p.name}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-black/55">
                      {p.context}
                    </p>
                    {p.status && (
                      <p className="mt-2 inline-block bg-primary px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white">
                        {p.status}
                      </p>
                    )}
                  </div>
                </div>

                <dl className="space-y-4 text-[14.5px] leading-relaxed text-black/75">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/45">
                      Problema
                    </dt>
                    <dd className="mt-1">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/45">
                      Mi participación
                    </dt>
                    <dd className="mt-1">{p.role}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/45">
                      Qué aprendí
                    </dt>
                    <dd className="mt-1">{p.learned}</dd>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <ul className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="border border-black/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-black/70"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                    {p.repo ? (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary transition-transform hover:translate-x-0.5"
                      >
                        Ver repositorio <span aria-hidden>↗</span>
                      </a>
                    ) : (
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/40">
                        Repositorio no público
                      </span>
                    )}
                  </div>
                </dl>
              </li>
            ))}
          </ol>
        </section>

        <hr className="border-black/10" />

        {/* Contacto */}
        <section id="contacto" className="py-20 md:py-28">
          <SectionLabel index="04">Contacto</SectionLabel>

          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-black md:text-4xl">
                ¿Buscás alguien confiable para sumar a tu equipo?
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-black/70">
                Estoy abierta a oportunidades junior en backend, prácticas
                profesionales y equipos que valoren compromiso, honestidad y
                ganas reales de aprender.
              </p>
            </div>

            <ul className="space-y-3 font-mono text-[12px] uppercase tracking-[0.18em]">
              {[
                ["Email", LINKS.email],
                ["GitHub", LINKS.github],
                ["LinkedIn", LINKS.linkedin],
                ["CV (PDF)", LINKS.cv],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center justify-between border-b border-black/10 pb-3 text-black transition-colors hover:text-primary"
                  >
                    <span>{label}</span>
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="flex flex-col items-start justify-between gap-3 border-t border-black/10 py-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <BrickMark className="h-3 w-8 text-black/60" />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">
              Nadia Cendra · 2026 · Backend en formación
            </p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
            Diseñado y desarrollado con criterio, no con humo.
          </p>
        </footer>
      </div>
    </main>
  );
}
