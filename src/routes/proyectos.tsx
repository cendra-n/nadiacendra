import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { PROJECTS } from "@/constants/portfolio";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — Nadia Cendra" },
      {
        name: "description",
        content:
          "Proyectos backend de Nadia Cendra: Mentor Virtual, AURA y un sistema de gestión de inventario.",
      },
      { property: "og:title", content: "Proyectos — Nadia Cendra" },
      {
        property: "og:description",
        content: "Pocos proyectos, contados con honestidad.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Proyectos,
});

function Proyectos() {
  return (
    <PageShell eyebrow="03 · Proyectos">
      <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
        Pocos proyectos, <span className="text-primary">contados con honestidad.</span>
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-foreground/70">
        Prefiero mostrar cómo pienso y trabajo antes que inflar resultados.
      </p>

      <div className="mt-14 space-y-6">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            className="group relative overflow-hidden border-l-4 border-primary bg-foreground/[0.02] px-6 py-8 transition-colors hover:bg-primary/[0.05] md:px-10 md:py-10"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 bg-foreground/10" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">
                {p.context}
              </span>
            </div>

            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-3xl">
              {p.name}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-foreground/75">
              {p.tagline}
            </p>

            <Link
              to="/proyectos/$slug"
              params={{ slug: p.slug }}
              className="mt-6 inline-flex items-center gap-2 border-b-2 border-primary pb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-primary transition-transform hover:translate-x-1"
            >
              Ver detalles <span aria-hidden>→</span>
            </Link>
          </motion.article>
        ))}
      </div>
    </PageShell>
  );
}
