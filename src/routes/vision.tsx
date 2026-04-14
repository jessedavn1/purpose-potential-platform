import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

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
  const visions = [
    {
      icon: "🏗️",
      title: "Global Digital Trade Platform",
      desc: "A company that connects local African sellers to international customers, strengthening exports, boosting economies, and promoting tourism and entrepreneurship.",
    },
    {
      icon: "🧠",
      title: "AI Systems for Purpose & Opportunity",
      desc: "AI-powered systems that help individuals discover their purpose, learn practical skills, generate business ideas, and build sustainable careers.",
    },
    {
      icon: "🏦",
      title: "Trust-Based Digital Systems",
      desc: "Secure and reliable systems for institutions, including banks and organizations transitioning to digital infrastructure, with a focus on cybersecurity and trust.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-3">Future Vision</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            Building the <span className="gold-gradient-text">Future</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl leading-relaxed">
            My long-term vision is to build technology-driven systems that transform education, leadership, and economic opportunity across Africa and beyond.
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

        {/* Impact Goal */}
        <AnimatedSection className="mt-20">
          <div className="stat-card rounded-2xl p-10 md:p-14 text-center card-glow">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-4">Impact Goal</p>
              <div className="font-heading text-5xl md:text-7xl font-bold gold-gradient-text">
                1,000,000+
              </div>
              <p className="text-xl md:text-2xl font-heading font-semibold mt-4">
                Youth Empowered Across Africa
              </p>
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
                Expanding globally to reduce unemployment, transform education systems, and build leaders who create and scale solutions for society.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Mission outcomes */}
        <AnimatedSection className="mt-16">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">Mission Outcomes</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "📉", label: "Reduce Unemployment" },
              { icon: "🎓", label: "Transform Education Systems" },
              { icon: "🌍", label: "Build Leaders Who Scale Solutions" },
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
