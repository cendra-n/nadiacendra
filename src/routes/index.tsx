import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nadia Cendra — Backend Developer" },
      {
        name: "description",
        content:
          "Portfolio de Nadia Cendra. Técnica Analista de Sistemas y Backend Developer en formación. Java, Spring Boot, Python. Grand Bourg, Buenos Aires.",
      },
      { property: "og:title", content: "Nadia Cendra — Backend Developer" },
      {
        property: "og:description",
        content:
          "Backend Developer en formación. Java, Spring Boot y Python. Construyendo el camino, un ladrillo a la vez.",
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

const TECH_SKILLS = ["Java", "Spring Boot", "Python", "Django", "PostgreSQL", "APIs REST", "Git", "GitHub"];
const HUMAN_SKILLS = [
  "Responsabilidad",
  "Comunicación",
  "Trabajo en equipo",
  "Adaptabilidad",
  "Organización",
  "Aprendizaje continuo",
];

// 8 ladrillos cuidadosamente distribuidos en el hero.
// Posiciones en % del contenedor. Palabras exactas pedidas por la usuaria.
const BRICKS: { x: number; y: number; w: number; h: number; word: string; delay: number }[] = [
  { x: 4, y: 12, w: 62, h: 22, word: "Java", delay: 0 },
  { x: 78, y: 8, w: 74, h: 24, word: "Python", delay: 1.4 },
  { x: 12, y: 68, w: 82, h: 22, word: "Spring Boot", delay: 2.7 },
  { x: 70, y: 76, w: 70, h: 22, word: "Django", delay: 0.9 },
  { x: 88, y: 42, w: 66, h: 22, word: "APIs REST", delay: 3.6 },
  { x: 2, y: 44, w: 54, h: 22, word: "IA", delay: 2.1 },
  { x: 40, y: 4, w: 78, h: 22, word: "Adaptabilidad", delay: 4.2 },
  { x: 82, y: 60, w: 92, h: 22, word: "Trabajo en equipo", delay: 1.7 },
  { x: 6, y: 88, w: 86, h: 22, word: "Comunicación", delay: 3.1 },
  { x: 50, y: 90, w: 96, h: 22, word: "Resolución de problemas", delay: 0.4 },
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
      "Acompañar a estudiantes mediante un asistente conversacional que respondiera dudas frecuentes y orientara sobre contenidos.",
    role:
      "Colaboré en el backend y en el equipo con perfiles de distinta seniority: endpoints, integración con el modelo y revisión de código en grupo.",
    stack: ["Python", "Django", "IA"],
    learned:
      "Trabajar en un equipo real con roles definidos, entender un dominio ajeno y comunicar avances con claridad.",
  },
  {
    name: "AURA",
    context: "Smart Projects — Foo Talent Group",
    problem: "Aportar a un sistema pensado como práctica profesional del programa, con foco en backend Java.",
    role: "Sumé código en Spring Boot y practiqué el flujo real con Git, ramas y pull requests dentro de un equipo.",
    stack: ["Java", "Spring Boot"],
    learned: "Cómo se organiza un equipo backend en la vida real: convenciones, revisiones y ritmo compartido.",
  },
  {
    name: "Sistema de Gestión de Inventario",
    context: "Proyecto personal",
    problem: "Practicar por mi cuenta un CRUD completo desde cero: entidades, relaciones y operaciones de stock.",
    role: "Diseño, desarrollo y pruebas hechos por mí. Es un proyecto de aprendizaje, no una solución productiva.",
    stack: ["Java", "Spring Boot", "PostgreSQL"],
    learned: "Sostener un proyecto de principio a fin sin nadie que me pase el enunciado. Equivocarme y seguir.",
    status: "En progreso",
  },
  {
    name: "Sistema de Gestión para Concesionaria",
    context: "Proyecto académico",
    problem: "Modelar una concesionaria (vehículos, clientes, operaciones) como trabajo integrador de la carrera.",
    role: "Análisis del dominio, modelado de datos e implementación. Pensado para aprender, no para producción.",
    stack: ["Java", "MySQL"],
    learned: "Traducir un enunciado en un modelo de datos coherente y defender decisiones frente a docentes.",
  },
];

const EXPERIENCE = [
  {
    period: "2026 — hoy",
    role: "Backend Developer en formación",
    place: "Prácticas y proyectos colaborativos",
    detail:
      "Cerca de 6 meses de práctica en simulaciones y entornos IT colaborativos con Java, Spring Boot y Python. Primeros pasos profesionales, tomados en serio.",
  },
  {
    period: "2023 — 2025",
    role: "Emprendimiento independiente",
    place: "Venta directa y diseño digital",
    detail:
      "Gestión comercial propia, trato directo con clientes y diseño de piezas digitales (banners, invitaciones). Aprendí a escuchar, negociar tiempos y comunicar con claridad.",
  },
  {
    period: "2016 — 2023",
    role: "Operaria de fábrica",
    place: "Industria — Buenos Aires",
    detail:
      "Siete años cumpliendo horarios, sosteniendo atención en tareas largas y resolviendo bajo presión con el equipo al lado. Ahí aprendí lo que hoy sostiene mi trabajo.",
  },
];

function BrickMark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 60 24" className={className} fill="none">
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
    <div className="mb-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-black/55">
      <span className="text-primary">{index}</span>
      <span className="h-px w-8 bg-primary/60" />
      <span>{children}</span>
    </div>
  );
}

function FloatingBricks() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {BRICKS.map((b, i) => {
        const active = hover === i;
        return (
          <div
            key={i}
            className="pointer-events-auto absolute"
            style={{
              left: `${b.x}%`,
              top: `${b.y}%`,
              width: `${b.w}px`,
              height: `${b.h}px`,
              animation: `brick-drift 18s ease-in-out ${b.delay}s infinite alternate`,
            }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover((h) => (h === i ? null : h))}
          >
            <div
              className={
                "relative h-full w-full border transition-all duration-500 " +
                (active
                  ? "bg-primary border-primary shadow-[0_6px_20px_-8px] shadow-primary/60"
                  : "bg-black/[0.04] border-black/10")
              }
            >
              <span
                className={
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] transition-opacity duration-300 " +
                  (active ? "text-white opacity-100" : "opacity-0")
                }
              >
                {b.word}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen w-full bg-white font-sans text-black antialiased">
      {/* Header: solo identidad + contacto */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <BrickMark className="h-4 w-10 text-primary" />
            <span className="font-display text-sm font-semibold tracking-tight text-black">
              Nadia Cendra
            </span>
          </a>
          <nav className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.2em]">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="text-black/70 transition-colors hover:text-primary"
            >
              GitHub
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-black/70 transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
            <a
              href="#contacto"
              className="border border-primary bg-primary px-3 py-1.5 text-white transition-colors hover:bg-black hover:border-black"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <div id="top" className="mx-auto max-w-5xl px-6 md:px-10">
        {/* Hero */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-20">
          {/* Barra editorial roja lateral */}
          <div className="absolute left-0 top-24 hidden h-24 w-1 bg-primary md:block" />
          <FloatingBricks />

          <div className="relative">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              Grand Bourg · Buenos Aires · Argentina
            </p>

            {/* Nombre como marca principal */}
            <h1 className="mt-6 font-display text-[3.25rem] font-bold leading-[0.95] tracking-[-0.02em] text-black md:text-[6.5rem]">
              NADIA
              <br />
              CENDRA
            </h1>

            <div className="mt-8 grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-10">
              <div className="border-l-2 border-primary pl-4">
                <p className="font-display text-lg font-semibold tracking-tight text-black md:text-xl">
                  Backend Developer
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-black/60">
                  Técnica Analista de Sistemas
                </p>
              </div>
              <p className="font-display text-base italic tracking-tight text-black/70 md:text-lg md:text-right">
                Lógica backend. <span className="text-primary">Valor humano.</span>
              </p>
            </div>

            <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-black/75 md:text-base">
              Doy mis primeros pasos profesionales en desarrollo, con cerca de{" "}
              <strong className="font-semibold text-black">6 meses de práctica</strong> en simulaciones y
              entornos IT colaborativos, sostenidos por{" "}
              <strong className="font-semibold text-black">7 años de trabajo en fábrica</strong> y una etapa
              emprendedora en venta directa y diseño digital. Todavía estoy creciendo técnicamente. Ese es,
              justamente, el punto de partida.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={LINKS.cv}
                className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-black"
              >
                Descargar CV <span aria-hidden>↓</span>
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 border border-black px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-white"
              >
                Ver proyectos <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* Navegación interna */}
        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 border-y-2 border-black py-4 font-mono text-[11px] uppercase tracking-[0.22em]">
          <span className="text-primary">Índice</span>
          <a href="#sobre-mi" className="text-black/75 transition-colors hover:text-primary">
            01 · Sobre mí
          </a>
          <a href="#stack" className="text-black/75 transition-colors hover:text-primary">
            02 · Stack
          </a>
          <a href="#experiencia" className="text-black/75 transition-colors hover:text-primary">
            03 · Experiencia
          </a>
          <a href="#proyectos" className="text-black/75 transition-colors hover:text-primary">
            04 · Proyectos
          </a>
          <a href="#contacto" className="ml-auto text-black/75 transition-colors hover:text-primary">
            → Contacto
          </a>
        </nav>

        {/* Sobre mí */}
        <section id="sobre-mi" className="py-20 md:py-28">
          <SectionLabel index="01">Sobre mí</SectionLabel>
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-black md:text-3xl">
                Todavía estoy construyendo mi camino en IT.
              </h2>
              <p className="mt-4 inline-block border-l-2 border-primary pl-3 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                Honesta sobre dónde estoy
              </p>
            </div>
            <div className="space-y-5 text-[15px] leading-relaxed text-black/75 md:text-base">
              <p>
                Mi experiencia técnica es inicial: cerca de seis meses de práctica en simulaciones y entornos IT
                colaborativos con Java, Spring Boot y Python. No vengo a aparentar seniority. Vengo a sumar,
                aprender y sostener el trabajo con criterio.
              </p>
              <p>
                Antes de programar pasé siete años en fábrica. Ahí aprendí a cumplir horarios, sostener la
                atención en tareas largas y resolver bajo presión con el equipo al lado. Después vino una etapa
                emprendedora —venta directa y diseño digital de banners e invitaciones— donde aprendí a
                escuchar a un cliente, negociar tiempos y comunicarme con claridad.
              </p>
              <p>
                Esa combinación es la que traigo hoy: alguien con quien da gusto trabajar, que se integra rápido
                a un equipo y toma el aprendizaje técnico en serio.
              </p>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="border-t border-black/10 py-20 md:py-28">
          <SectionLabel index="02">Stack &amp; habilidades</SectionLabel>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-black">Técnicas</h3>
              <p className="mt-2 text-sm text-black/60">
                Herramientas con las que ya trabajé en prácticas, cursos o proyectos personales. Todavía en
                aprendizaje.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {TECH_SKILLS.map((s) => (
                  <li
                    key={s}
                    className="border border-black/20 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-black/80 transition-colors hover:border-primary hover:text-primary"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-black">Humanas</h3>
              <p className="mt-2 text-sm text-black/60">
                Habilidades formadas en años de trabajo real, dentro y fuera de IT.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {HUMAN_SKILLS.map((s) => (
                  <li
                    key={s}
                    className="bg-primary px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-black"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Experiencia */}
        <section id="experiencia" className="border-t border-black/10 py-20 md:py-28">
          <SectionLabel index="03">Experiencia</SectionLabel>
          <ol className="relative border-l-2 border-primary/70 pl-8">
            {EXPERIENCE.map((e) => (
              <li key={e.period} className="relative mb-12 last:mb-0">
                <span className="absolute -left-[41px] top-1 h-4 w-4 border-2 border-primary bg-white" />
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">{e.period}</p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-black">
                  {e.role}
                </h3>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-black/55">
                  {e.place}
                </p>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-black/75">{e.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="border-t border-black/10 py-20 md:py-28">
          <SectionLabel index="04">Proyectos</SectionLabel>
          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-black md:text-3xl">
              Pocos proyectos, contados con honestidad.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-black/70">
              Prefiero mostrar cómo pienso y trabajo antes que inflar resultados. Aclaro siempre cuál fue mi
              participación real.
            </p>
          </div>

          <ol className="divide-y divide-black/10 border-y-2 border-black">
            {PROJECTS.map((p, i) => (
              <li
                key={p.name}
                className="group grid gap-6 py-10 transition-colors hover:bg-primary/[0.03] md:grid-cols-[auto_1fr] md:gap-10"
              >
                <div className="flex items-start gap-4 md:w-56">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-primary">
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
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/80">
                      Problema
                    </dt>
                    <dd className="mt-1">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/80">
                      Mi participación
                    </dt>
                    <dd className="mt-1">{p.role}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/80">
                      Qué aprendí
                    </dt>
                    <dd className="mt-1">{p.learned}</dd>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <ul className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="border border-black/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-black/70"
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
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary transition-transform hover:translate-x-0.5"
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

        {/* Contacto */}
        <section id="contacto" className="border-t border-black/10 py-20 md:py-28">
          <SectionLabel index="05">Contacto</SectionLabel>
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-black md:text-4xl">
                ¿Buscás alguien confiable para <span className="text-primary">sumar a tu equipo?</span>
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-black/70">
                Estoy abierta a oportunidades junior en backend, prácticas profesionales y equipos que valoren
                compromiso, honestidad y ganas reales de aprender.
              </p>
            </div>
            <ul className="space-y-3 font-mono text-[12px] uppercase tracking-[0.2em]">
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
                    className="group flex items-center justify-between border-b-2 border-black/10 pb-3 text-black transition-colors hover:border-primary hover:text-primary"
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

        <footer className="flex flex-col items-start justify-between gap-3 border-t-2 border-primary py-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <BrickMark className="h-3 w-8 text-primary" />
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-black/60">
              Nadia Cendra · 2026 · Un ladrillo a la vez
            </p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-black/40">
            Diseñado con criterio, no con humo.
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes brick-drift {
          0%   { transform: translate3d(0, 0, 0); }
          50%  { transform: translate3d(0, -10px, 0); }
          100% { transform: translate3d(0, 4px, 0); }
        }
      `}</style>
    </main>
  );
}
