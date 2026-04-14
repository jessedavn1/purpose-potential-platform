import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "@/components/AnimatedSection";

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
  const milestones = [
    {
      period: "Early Years",
      title: "The Question That Started Everything",
      content: "I grew up in a public education system where learning was largely theoretical. We studied computer science without access to computers, and science subjects like physics and chemistry without real laboratories. From an early age, I began to question how students like me—without resources at home—would ever truly gain practical skills.",
    },
    {
      period: "High School",
      title: "First Opportunity to Speak Up",
      content: "During my final year of high school, I was selected to represent my school in a program focused on finding digital solutions in education. I used that opportunity to highlight the very issue that had always been in my heart—the lack of practical access to technology in schools.",
    },
    {
      period: "Self-Education",
      title: "Taking Responsibility",
      content: "After high school, I made a decision to take responsibility for my own growth and began teaching myself coding, technology, and other essential skills. Alongside this, I studied books on education, science, and financial literacy to prepare myself to contribute meaningfully.",
    },
    {
      period: "U.S. Embassy Burundi",
      title: "A Turning Point",
      content: "My journey took a major turn when I joined the U.S. Embassy Burundi as a volunteer, where I taught IT, software development, and personal development. There, I witnessed how access to practical learning transforms confidence and ambition in young people.",
    },
    {
      period: "Today",
      title: "Scaling Impact",
      content: "Since then, I have trained over 700+ students in AI and IT, mentored 50+ students in personal development, and supported academic learners through UPchieve. Today, my mission is to transform this experience into a system that ensures young people—regardless of background—can access practical education.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-3">Signature Story</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            From Curiosity to <span className="gold-gradient-text">Mission</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            A journey of transforming personal challenge into collective opportunity.
          </p>
        </AnimatedSection>

        <div className="section-divider my-12" />

        <div className="relative">
          {/* Timeline line */}
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
