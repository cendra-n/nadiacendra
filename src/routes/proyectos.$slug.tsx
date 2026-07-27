import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { PROJECTS } from "@/constants/portfolio";

export const Route = createFileRoute("/proyectos/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Proyecto no encontrado — Nadia Cendra" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.name} — Nadia Cendra` },
        { name: "description", content: project.tagline },
        { property: "og:title", content: `${project.name} — Nadia Cendra` },
        { property: "og:description", content: project.tagline },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell eyebrow="404">
      <h1 className="font-display text-3xl font-bold tracking-tight">
        Ese proyecto no existe.
      </h1>
      <p className="mt-4 text-foreground/70">
        Puede que el enlace esté roto o que el proyecto todavía no esté publicado.
      </p>
      <Link
        to="/proyectos"
        className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary"
      >
        ← Ver todos los proyectos
      </Link>
    </PageShell>
  ),
  component: ProyectoDetalle,
});

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">{label}</h2>
      <div className="mt-3 text-[15px] leading-relaxed text-foreground/85">{children}</div>
    </div>
  );
}

function ProyectoDetalle() {
  const { project } = Route.useLoaderData();

  return (
    <PageShell eyebrow={project.context}>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl"
      >
        {project.name}
      </motion.h1>
      <p className="mt-4 max-w-xl text-lg text-foreground/70">{project.tagline}</p>

      {/* Placeholder captura */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-10 grid aspect-[16/9] w-full place-items-center border-2 border-dashed border-foreground/15 bg-foreground/[0.02] text-center"
      >
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/40">
            Captura del proyecto
          </p>
          <p className="mt-2 font-display text-sm text-foreground/50">
            (placeholder — próximamente)
          </p>
        </div>
      </motion.div>

      <div className="mt-14 space-y-10">
        <Section label="Problema">
          <p>{project.problem}</p>
        </Section>
        <Section label="Solución">
          <p>{project.solution}</p>
        </Section>
        <Section label="Aprendizajes">
          <p>{project.learned}</p>
        </Section>
        <Section label="Tecnologías">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li
                key={s}
                className="border border-foreground/20 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                {s}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <div className="mt-14 flex flex-wrap gap-3">
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground"
          >
            Ver en GitHub <span aria-hidden>↗</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 border border-foreground/20 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
            Repositorio no público
          </span>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-foreground px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
          >
            Ver demo <span aria-hidden>↗</span>
          </a>
        )}
      </div>
    </PageShell>
  );
}
