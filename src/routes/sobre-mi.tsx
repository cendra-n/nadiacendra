import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { TIMELINE } from "@/constants/portfolio";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Nadia Cendra" },
      {
        name: "description",
        content:
          "La historia de Nadia Cendra: de siete años en fábrica al desarrollo backend, pasando por el emprendimiento independiente.",
      },
      { property: "og:title", content: "Sobre mí — Nadia Cendra" },
      {
        property: "og:description",
        content: "Storytelling honesto de una desarrolladora que está construyendo su camino.",
      },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: SobreMi,
});

const STORY = [
  "Todavía estoy construyendo mi camino en IT.",
  "Mi experiencia técnica es inicial: cerca de seis meses de práctica en simulaciones y entornos IT colaborativos con Java, Spring Boot y Python.",
  "No vengo a aparentar seniority. Vengo a sumar, aprender y sostener el trabajo con criterio.",
  "Antes de programar pasé siete años en fábrica. Ahí aprendí disciplina, responsabilidad, trabajo bajo presión y compromiso.",
  "Después emprendí en venta directa y diseño gráfico. Allí desarrollé comunicación, escucha activa y organización.",
  "Hoy combino esas experiencias con el desarrollo backend. Mi objetivo es seguir creciendo dentro de un equipo donde pueda aportar mientras continúo aprendiendo.",
];

function SobreMi() {
  return (
    <PageShell eyebrow="01 · Sobre mí">
      <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
        Un camino que se construye <span className="text-primary">un ladrillo a la vez.</span>
      </h1>

      <div className="mt-12 space-y-5 text-[15px] leading-relaxed text-foreground/85 md:text-base">
        {STORY.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            className={i === 0 ? "font-display text-xl font-semibold text-foreground" : ""}
          >
            {p}
          </motion.p>
        ))}
      </div>

      {/* Timeline */}
      <div className="mt-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
          Línea de tiempo
        </p>
        <ol className="relative mt-8 border-l-2 border-primary/70 pl-8">
          {TIMELINE.map((e, i) => (
            <motion.li
              key={e.period}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.5 + i * 0.12 }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[41px] top-1 h-4 w-4 border-2 border-primary bg-background" />
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                {e.period}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                {e.title}
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/75">
                {e.detail}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </PageShell>
  );
}
