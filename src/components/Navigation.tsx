import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/context";

const navKeys = [
  { to: "/", key: "home" },
  { to: "/story", key: "story" },
  { to: "/impact", key: "impact" },
  { to: "/work", key: "work" },
  { to: "/vision", key: "vision" },
  { to: "/contact", key: "contact" },
] as const;

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-heading text-lg font-bold tracking-tight">
          <span className="gold-gradient-text">JD</span>
          <span className="text-foreground ml-1">Nsengiyumva</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navKeys.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground p-2"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`h-0.5 bg-foreground transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`h-0.5 bg-foreground transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-foreground transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navKeys.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors ${
                    location.pathname === link.to
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
