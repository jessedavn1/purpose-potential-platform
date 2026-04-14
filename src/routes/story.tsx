import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useI18n } from "@/i18n/context";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "My Story — Jesse David Nsengiyumva" },
      { name: "description", content: "From a resource-limited classroom in Burundi to training 700+ students in AI and technology. This is my journey." },
      { property: "og:title", content: "My Story — Jesse David Nsengiyumva" },
      { property: "og:description", content: "From a resource-limited classroom to global tech educator." },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  const { t } = useI18n();

  const milestones = [
    { period: t("story.earlyYears"), title: t("story.earlyTitle"), content: t("story.earlyContent") },
    { period: t("story.highSchool"), title: t("story.highTitle"), content: t("story.highContent") },
    { period: t("story.selfEd"), title: t("story.selfTitle"), content: t("story.selfContent") },
    { period: t("story.embassy"), title: t("story.embassyTitle"), content: t("story.embassyContent") },
    { period: t("story.today"), title: t("story.todayTitle"), content: t("story.todayContent") },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-3">{t("story.label")}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            {t("story.title1")} <span className="gold-gradient-text">{t("story.title2")}</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            {t("story.subtitle")}
          </p>
        </AnimatedSection>

        <div className="section-divider my-12" />

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.period} delay={i * 0.08}>
                <div className="relative pl-8 md:pl-20">
                  <div className="absolute left-0 md:left-8 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">{m.period}</span>
                  <h3 className="font-heading text-xl font-semibold mt-1">{m.title}</h3>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{m.content}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
