import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection, AnimatedCounter } from "@/components/AnimatedSection";
import { useI18n } from "@/i18n/context";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact & Statistics — Jesse David Nsengiyumva" },
      { name: "description", content: "700+ students trained, 100+ workshops delivered, impact across 3 continents." },
      { property: "og:title", content: "Impact — Jesse David Nsengiyumva" },
      { property: "og:description", content: "Real numbers. Real impact. 700+ students trained across 3 continents." },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-3">{t("impact.label")}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            {t("impact.title1")} <span className="gold-gradient-text">{t("impact.title2")}</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection className="mt-16">
          <h2 className="font-heading text-xl font-semibold flex items-center gap-2 mb-6">
            <span className="text-2xl">👨‍🏫</span> {t("impact.eduImpact")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <AnimatedCounter value="700+" label={t("impact.stat1")} />
            <AnimatedCounter value="50+" label={t("impact.stat2")} />
            <AnimatedCounter value="10+" label={t("impact.stat3")} />
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-16">
          <h2 className="font-heading text-xl font-semibold flex items-center gap-2 mb-6">
            <span className="text-2xl">🧠</span> {t("impact.teachLeader")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <AnimatedCounter value="100+" label={t("impact.stat4")} />
            <AnimatedCounter value="200+" label={t("impact.stat5")} />
            <AnimatedCounter value="U.S. Embassy" label={t("impact.stat6")} suffix="" />
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-16">
          <h2 className="font-heading text-xl font-semibold flex items-center gap-2 mb-6">
            <span className="text-2xl">🌍</span> {t("impact.globalReach")}
          </h2>
          <div className="stat-card rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="font-heading text-5xl md:text-6xl font-bold gold-gradient-text">3</div>
              <div>
                <p className="text-lg font-semibold">{t("impact.continents")}</p>
                <p className="text-muted-foreground mt-1">{t("impact.continentsList")}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-16">
          <h2 className="font-heading text-xl font-semibold flex items-center gap-2 mb-6">
            <span className="text-2xl">🧩</span> {t("impact.innovation")}
          </h2>
          <div className="space-y-4">
            {[t("impact.innov1"), t("impact.innov2"), t("impact.innov3")].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="stat-card rounded-xl p-6 flex items-start gap-4">
                  <span className="text-primary mt-0.5">✦</span>
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
