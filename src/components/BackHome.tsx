import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/LanguageProvider";

export function BackHome({ label }: { label?: string }) {
  const { t } = useI18n();
  const text = label ?? t.nav.back;
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed bottom-5 left-5 z-50 md:bottom-7 md:left-7"
    >
      <Link
        to="/"
        aria-label={text}
        className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/85 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/80 shadow-[0_2px_12px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
      >
        <ArrowLeft
          size={14}
          className="transition-transform group-hover:-translate-x-1"
        />
        <span className="hidden sm:inline">{text}</span>
      </Link>
    </motion.div>
  );
}
