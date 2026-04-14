import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useI18n } from "@/i18n/context";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Core Work & Systems — Jesse David Nsengiyumva" },
      { name: "description", content: "Technology & Education, Leadership Development, and Innovation Systems." },
      { property: "og:title", content: "Core Work — Jesse David Nsengiyumva" },
      { property: "og:description", content: "Three pillars: Technology, Leadership, and Innovation Systems." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const { t } = useI18n();

  const pillars = [
    {
      icon: "💻",
      title: t("work.p1Title"),
      subtitle: t("work.p1Sub"),
      details: [t("work.p1d1"), t("work.p1d2"), t("work.p1d3"), t("work.p1d4")],
    },
    {
      icon: "🧭",
      title: t("work.p2Title"),
      subtitle: t("work.p2Sub"),
      details: [t("work.p2d1"), t("work.p2d2"), t("work.p2d3"), t("work.p2d4")],
    },
    {
      icon: "🚀",
      title: t("work.p3Title"),
      subtitle: t("work.p3Sub"),
      details: [t("work.p3d1"), t("work.p3d2"), t("work.p3d3"), t("work.p3d4")],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-3">{t("work.label")}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            {t("work.title1")} <span className="gold-gradient-text">{t("work.title2")}</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
            {t("work.subtitle")}
          </p>
        </AnimatedSection>

        <div className="space-y-8 mt-16">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.1}>
              <div className="stat-card rounded-2xl p-8 md:p-10">
                <div className="flex items-start gap-5">
                  <span className="text-4xl">{pillar.icon}</span>
                  <div className="flex-1">
                    <h2 className="font-heading text-2xl font-bold">{pillar.title}</h2>
                    <p className="text-primary text-sm mt-1">{pillar.subtitle}</p>
                    <ul className="mt-6 space-y-3">
                      {pillar.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="text-primary mt-1 shrink-0">▸</span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
