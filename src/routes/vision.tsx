import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Future Vision — Jesse David Nsengiyumva" },
      { name: "description", content: "A vision to empower 1,000,000+ youth across Africa through technology-driven education, AI systems, and digital infrastructure." },
      { property: "og:title", content: "Future Vision — Jesse David Nsengiyumva" },
      { property: "og:description", content: "Empowering 1,000,000+ youth through technology, AI, and leadership." },
    ],
  }),
  component: VisionPage,
});

function VisionPage() {
  const { t } = useI18n();

  const visions = [
    { icon: "🏗️", title: t("vision.v1Title"), desc: t("vision.v1Desc") },
    { icon: "🧠", title: t("vision.v2Title"), desc: t("vision.v2Desc") },
    { icon: "🏦", title: t("vision.v3Title"), desc: t("vision.v3Desc") },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-3">{t("vision.label")}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            {t("vision.title1")} <span className="gold-gradient-text">{t("vision.title2")}</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl leading-relaxed">
            {t("vision.subtitle")}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {visions.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="stat-card rounded-2xl p-8 h-full flex flex-col">
                <span className="text-4xl">{v.icon}</span>
                <h3 className="font-heading text-lg font-semibold mt-4">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-20">
          <div className="stat-card rounded-2xl p-10 md:p-14 text-center card-glow">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-4">{t("vision.impactGoal")}</p>
              <div className="font-heading text-5xl md:text-7xl font-bold gold-gradient-text">
                1,000,000+
              </div>
              <p className="text-xl md:text-2xl font-heading font-semibold mt-4">
                {t("vision.youthEmpowered")}
              </p>
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
                {t("vision.impactDesc")}
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-16">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">{t("vision.missionOutcomes")}</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "📉", label: t("vision.outcome1") },
              { icon: "🎓", label: t("vision.outcome2") },
              { icon: "🌍", label: t("vision.outcome3") },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <div className="stat-card rounded-xl p-6 text-center">
                  <span className="text-3xl">{item.icon}</span>
                  <p className="font-heading font-semibold text-sm mt-3">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
