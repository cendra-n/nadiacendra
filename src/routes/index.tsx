import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BrickColumns } from "@/components/BrickColumns";
import { ScrollBricks } from "@/components/ScrollBricks";
import { LINKS } from "@/constants/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nadia Cendra — Backend Developer" },
      {
        name: "description",
        content:
          "Portfolio de Nadia Cendra. Backend Developer en formación y Técnica Analista de Sistemas. Java, Spring Boot y Python.",
      },
      { property: "og:title", content: "Nadia Cendra — Backend Developer" },
      {
        property: "og:description",
        content: "Lógica backend, valor humano. Construyendo una carrera un ladrillo a la vez.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Landing,
});

const NAV_LINKS = [
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/stack", label: "Stack" },
  { to: "/proyectos", label: "Proyectos" },
] as const;

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground antialiased">
      <ScrollBricks />
      <BrickColumns />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-30 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10"
      >
        <p className="font-display text-sm font-semibold leading-tight tracking-tight">
          Lógica backend.
          <br />
          <span className="text-primary">Valor humano.</span>
        </p>
        <nav className="flex items-center gap-2 md:gap-3">
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-primary bg-primary px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            LinkedIn
          </a>
          <Link
            to="/contacto"
            className="rounded-full border border-primary bg-primary px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            Contacto
          </Link>
          <ThemeToggle />
        </nav>
      </motion.header>

      {/* Hero central */}
      <section className="relative z-20 mx-auto max-w-3xl px-6 pb-16 pt-14 text-center md:px-10 md:pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-display text-5xl font-bold tracking-tight md:text-7xl"
        >
          Nadia Cendra
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-5 font-display text-lg font-semibold tracking-tight md:text-xl"
        >
          Backend Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-1 font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/60"
        >
          Técnica Analista de Sistemas
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mt-10 max-w-xl text-[15px] leading-relaxed text-foreground/80 md:text-base"
        >
          Doy mis primeros pasos profesionales en desarrollo, con cerca de{" "}
          <strong className="font-semibold text-foreground">5 meses de práctica</strong> en simulaciones y
          entornos IT colaborativos, sostenidos por{" "}
          <strong className="font-semibold text-foreground">7 años de trabajo en fábrica</strong> y una
          etapa emprendedora en venta directa y diseño digital. Todavía estoy creciendo técnicamente. Ese
          es, justamente, el punto de partida.
        </motion.p>
      </section>

      {/* Navegación principal — botones grandes */}
      <section className="relative z-20 mx-auto max-w-4xl px-6 pb-24 md:px-10">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-foreground/20" />
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/50">
            Explorá
          </span>
          <span className="h-px flex-1 bg-foreground/20" />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {NAV_LINKS.map((n, i) => (
            <motion.div
              key={n.to}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55 + i * 0.08, ease: "easeOut" }}
            >
              <Link
                to={n.to}
                className="group relative flex items-center justify-between overflow-hidden border-2 border-foreground/90 bg-transparent px-6 py-6 font-display text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary-foreground md:text-2xl"
              >
                <span className="relative z-10">{n.label}</span>
                <span
                  aria-hidden
                  className="relative z-10 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-300 ease-out group-hover:translate-x-0" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-primary"
        >
          Deslizá el mouse sobre los ladrillos rojos y conoce un poco más sobre mis habilidades
        </motion.p>
      </section>
    </div>
  );
}
