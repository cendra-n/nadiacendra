import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n/LanguageProvider";

export function LanguageToggle() {
  const { lang, toggle, t } = useI18n();
  return (
    <button
      onClick={toggle}
      aria-label={t.nav.langLabel}
      title={t.nav.langLabel}
      className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-foreground/15 bg-background font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground transition-colors hover:border-primary hover:text-primary"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={lang}
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 12, opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {lang === "es" ? "ES" : "EN"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
