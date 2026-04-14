import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Core Work & Systems — Jesse David Nsengiyumva" },
      { name: "description", content: "Technology & Education, Leadership Development, and Innovation Systems — the three pillars of Jesse David's work." },
      { property: "og:title", content: "Core Work — Jesse David Nsengiyumva" },
      { property: "og:description", content: "Three pillars: Technology, Leadership, and Innovation Systems." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const pillars = [
    {
      icon: "💻",
      title: "Technology & Education",
      subtitle: "Empowering youth with AI, coding, and digital skills",
      details: [
        "Teaching AI fundamentals and practical applications to students across multiple institutions",
        "Building personalized coding curricula that adapt to individual student interests and career goals",
        "Delivering project-based learning that bridges the gap between theory and real-world application",
        "Volunteering at the U.S. Embassy Burundi teaching IT and software development",
      ],
    },
    {
      icon: "🧭",
      title: "Leadership Development",
      subtitle: "Shaping purpose-driven leaders",
      details: [
        "Mentoring 50+ youth in personal development, purpose discovery, and leadership principles",
        "Drawing from transformational thinkers like Myles Munroe to build character-first leadership",
        "Creating frameworks that help young people identify their unique contribution to society",
        "Supporting academic learners through UPchieve's global tutoring platform",
      ],
    },
    {
      icon: "🚀",
      title: "Innovation Systems",
      subtitle: "Building practical solutions for real-world challenges",
      details: [
        "Designed the American–Burundi Mall innovation project connecting local businesses to global markets",
        "Developing project-based learning systems that produce tangible digital solutions",
        "Creating curriculum models that can scale across institutions and borders",
        "Contributing to Public Diplomacy programs at the U.S. Embassy Burundi",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-3">Core Work & Systems</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            Three <span className="gold-gradient-text">Pillars</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
            My work operates on three interconnected pillars that create a comprehensive system for unlocking human potential.
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
