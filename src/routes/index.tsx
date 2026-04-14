import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jesse David Nsengiyumva — Tech, Leadership & Education Innovation" },
      { name: "description", content: "Building Africa's next generation of purpose-driven leaders through technology, AI, and education innovation." },
      { property: "og:title", content: "Jesse David Nsengiyumva — Portfolio" },
      { property: "og:description", content: "Tech, Leadership & Education Innovation Portfolio" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="African landscape with digital overlay"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Tech · Leadership · Education
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              Jesse David
              <br />
              <span className="gold-gradient-text">Nsengiyumva</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building Africa's next generation of purpose-driven leaders by combining technology, AI, and leadership development to unlock human potential at scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/story"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Read My Story
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3 rounded-lg font-heading font-semibold text-sm hover:bg-secondary transition-colors"
            >
              View Impact
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Quick stats */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "700+", label: "Students Trained" },
                { value: "100+", label: "Workshops Delivered" },
                { value: "3", label: "Continents Reached" },
                { value: "50+", label: "Youth Mentored" },
              ].map((stat) => (
                <div key={stat.label} className="stat-card rounded-xl p-6 text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold gold-gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars preview */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-3">Core Pillars</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">What I Build</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: "💻",
                title: "Technology & Education",
                desc: "Empowering youth with AI, coding, and digital skills through hands-on, project-based learning.",
              },
              {
                icon: "🧭",
                title: "Leadership Development",
                desc: "Shaping purpose-driven leaders using principles inspired by transformational thinkers.",
              },
              {
                icon: "🚀",
                title: "Innovation Systems",
                desc: "Building practical solutions that solve real-world local and global challenges.",
              },
            ].map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.1}>
                <div className="stat-card rounded-xl p-8 h-full hover:card-glow transition-shadow">
                  <span className="text-3xl">{pillar.icon}</span>
                  <h3 className="font-heading text-lg font-semibold mt-4">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{pillar.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Ready to <span className="gold-gradient-text">Connect</span>?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Whether it's a scholarship, fellowship, tech role, or partnership — I'm building toward a future where every young person can access opportunity.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/vision"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Explore My Vision
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3 rounded-lg font-heading font-semibold text-sm hover:bg-secondary transition-colors"
              >
                See My Work
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
