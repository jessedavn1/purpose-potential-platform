import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection, AnimatedCounter } from "@/components/AnimatedSection";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact & Statistics — Jesse David Nsengiyumva" },
      { name: "description", content: "700+ students trained, 100+ workshops delivered, impact across 3 continents. See the numbers behind the mission." },
      { property: "og:title", content: "Impact — Jesse David Nsengiyumva" },
      { property: "og:description", content: "Real numbers. Real impact. 700+ students trained across 3 continents." },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-3">Statistics & Impact</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            Numbers That <span className="gold-gradient-text">Matter</span>
          </h1>
        </AnimatedSection>

        {/* Education Impact */}
        <AnimatedSection className="mt-16">
          <h2 className="font-heading text-xl font-semibold flex items-center gap-2 mb-6">
            <span className="text-2xl">👨‍🏫</span> Education Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <AnimatedCounter value="700+" label="Students trained in AI, IT & software development" />
            <AnimatedCounter value="50+" label="Youth mentored in leadership & personal development" />
            <AnimatedCounter value="10+" label="Students supported via UPchieve academic coaching" />
          </div>
        </AnimatedSection>

        {/* Teaching & Leadership */}
        <AnimatedSection className="mt-16">
          <h2 className="font-heading text-xl font-semibold flex items-center gap-2 mb-6">
            <span className="text-2xl">🧠</span> Teaching & Leadership Delivery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <AnimatedCounter value="100+" label="Workshops in technology, leadership & digital literacy" />
            <AnimatedCounter value="200+" label="Training sessions across programs & institutions" />
            <AnimatedCounter value="U.S. Embassy" label="Contributor in Public Diplomacy programs" suffix="" />
          </div>
        </AnimatedSection>

        {/* Global Reach */}
        <AnimatedSection className="mt-16">
          <h2 className="font-heading text-xl font-semibold flex items-center gap-2 mb-6">
            <span className="text-2xl">🌍</span> Global Reach
          </h2>
          <div className="stat-card rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="font-heading text-5xl md:text-6xl font-bold gold-gradient-text">3</div>
              <div>
                <p className="text-lg font-semibold">Continents of Impact</p>
                <p className="text-muted-foreground mt-1">Africa · North America · Asia</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Innovation */}
        <AnimatedSection className="mt-16">
          <h2 className="font-heading text-xl font-semibold flex items-center gap-2 mb-6">
            <span className="text-2xl">🧩</span> Innovation Highlights
          </h2>
          <div className="space-y-4">
            {[
              "Designed a personalized coding curriculum based on student interests",
              "Developed project-based learning systems for real-world problem solving",
              "Created the American–Burundi Mall innovation project, helping students design digital solutions connecting local businesses to global markets",
            ].map((item, i) => (
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
