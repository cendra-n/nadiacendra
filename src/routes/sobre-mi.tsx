import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { useI18n } from "@/i18n/LanguageProvider";

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

function SobreMi() {
  const { t } = useI18n();
  return (
    <PageShell eyebrow={t.about.eyebrow}>
      <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
        {t.about.title1}<span className="text-primary">{t.about.title2}</span>
      </h1>

      <div className="mt-12 space-y-5 text-[15px] leading-relaxed text-foreground/85 md:text-base">
        {t.about.story.map((p, i) => (
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
          {t.about.timelineLabel}
        </p>
        <ol className="relative mt-8 border-l-2 border-primary/70 pl-8">
          {t.about.timeline.map((e, i) => (
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
