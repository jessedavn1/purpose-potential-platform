import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jesse David Nsengiyumva" },
      { name: "description", content: "Get in touch with Jesse David Nsengiyumva. Book a meeting, download CV, or connect on social media." },
      { property: "og:title", content: "Contact — Jesse David Nsengiyumva" },
      { property: "og:description", content: "Get in touch with Jesse David Nsengiyumva." },
    ],
  }),
  component: ContactPage,
});

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jesse-david-nsengiyumva",
    username: "jesse-david-nsengiyumva",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/jessedavn1",
    username: "jessedavn1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/learnwithjdn",
    username: "learnwithjdn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com/jessedavn1",
    username: "jessedavn1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://facebook.com/jessedavn1",
    username: "jessedavn1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "Threads",
    url: "https://threads.net/@jessedavn1",
    username: "jessedavn1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.33-3.022.88-.733 2.088-1.146 3.495-1.196 1.07-.038 2.063.088 2.957.374-.07-.6-.244-1.089-.521-1.456-.424-.562-1.1-.862-2.01-.893-1.263-.04-2.255.414-2.673.745l-1.19-1.665c.628-.477 1.994-1.194 3.96-1.126 1.473.051 2.625.607 3.425 1.653.71.928 1.078 2.2 1.094 3.783l.005.297c.896.399 1.645.955 2.224 1.658.768.933 1.163 2.07 1.163 3.336 0 .08-.002.16-.005.24-.108 2.794-1.26 4.952-3.427 6.418C17.725 23.3 15.212 23.98 12.186 24zm.101-9.226c-.967.034-1.727.267-2.27.693-.473.373-.695.854-.663 1.43.032.578.318 1.075.852 1.421.582.378 1.347.554 2.145.51 1.078-.058 1.896-.453 2.502-1.208.455-.566.749-1.327.88-2.27-.84-.259-1.784-.405-2.81-.405-.208 0-.42.006-.636.019v-.19z"/>
      </svg>
    ),
  },
  {
    name: "Reddit",
    url: "https://reddit.com/user/jessedavn1",
    username: "jessedavn1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
  },
  {
    name: "freeCodeCamp",
    url: "https://www.freecodecamp.org/jessedavn1",
    username: "jessedavn1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.885 3.906a.621.621 0 00-.354.12c-.08.08-.161.24-.161.439 0 .16.08.32.161.4.84 1.239 1.519 2.839 1.959 4.518.44 1.68.64 3.479.64 5.118 0 1.64-.2 3.439-.64 5.118-.44 1.68-1.119 3.28-1.959 4.518a.59.59 0 00-.161.4c0 .2.08.36.161.439a.69.69 0 00.354.12c.28 0 .56-.2.68-.36.92-1.399 1.6-3.159 2.08-4.918.48-1.76.68-3.639.68-5.318s-.2-3.559-.68-5.318c-.48-1.76-1.16-3.519-2.08-4.918-.12-.16-.4-.36-.68-.36zM4.115 3.906c-.28 0-.56.2-.68.36-.92 1.399-1.6 3.159-2.08 4.918C.875 10.943.675 12.823.675 14.503s.2 3.559.68 5.318c.48 1.76 1.16 3.519 2.08 4.918.12.16.4.36.68.36a.621.621 0 00.354-.12c.08-.08.161-.24.161-.439 0-.16-.08-.32-.161-.4-.84-1.239-1.519-2.839-1.959-4.518-.44-1.68-.64-3.479-.64-5.118 0-1.64.2-3.439.64-5.118.44-1.68 1.119-3.28 1.959-4.518a.59.59 0 00.161-.4c0-.2-.08-.36-.161-.439a.69.69 0 00-.354-.12zM8.679 14.825c.08.56.28 1.119.56 1.519.28.4.68.76 1.199.96.44.2.96.28 1.599.28.56 0 1.039-.08 1.399-.2.44-.16.76-.36 1-.64.28-.28.44-.56.56-.88.12-.32.2-.639.2-.999h-1.64c0 .16-.04.36-.12.56s-.2.36-.36.52c-.16.12-.4.24-.68.32-.24.08-.56.12-.88.12-.479 0-.879-.08-1.119-.28-.28-.16-.479-.4-.599-.72-.12-.32-.2-.68-.24-1.039-.04-.44-.04-.84-.04-1.239v-.56c0-.4.04-.76.08-1.12.04-.399.12-.72.24-1.039.12-.28.32-.52.56-.68.28-.2.64-.28 1.079-.28.24 0 .479.04.68.08.24.08.44.16.6.32.16.12.28.28.36.48.08.16.12.4.12.6h1.639c-.04-.48-.16-.879-.36-1.24-.2-.32-.48-.599-.8-.8-.32-.2-.68-.32-1.04-.4a4.446 4.446 0 00-1.159-.16c-.56 0-1.08.12-1.48.32a2.714 2.714 0 00-1.04.84 3.565 3.565 0 00-.6 1.36c-.12.52-.16 1.08-.16 1.68v.559c0 .56.04 1.12.16 1.64z"/>
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:jessedavn@gmail.com",
    username: "jessedavn@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-3">Get In Touch</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold">
            Let's <span className="gold-gradient-text">Connect</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
            Whether you're interested in collaboration, mentorship, speaking engagements, or opportunities — I'd love to hear from you.
          </p>
        </AnimatedSection>

        {/* Action Buttons */}
        <AnimatedSection delay={0.1} className="mt-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4"/>
              </svg>
              Talk With Me — Book a Meeting
            </a>
            <a
              href="/Jesse_David_Nsengiyumva_CV.pdf"
              download
              className="inline-flex items-center justify-center gap-3 border border-border text-foreground px-8 py-4 rounded-xl font-heading font-semibold text-sm hover:bg-secondary transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download My CV
            </a>
          </div>
        </AnimatedSection>

        {/* Social Links */}
        <AnimatedSection delay={0.2} className="mt-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">
            Find Me <span className="gold-gradient-text">Online</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="stat-card rounded-xl p-5 flex items-center gap-4 hover:card-glow transition-shadow group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {social.icon}
                </div>
                <div className="min-w-0">
                  <div className="font-heading text-sm font-semibold text-foreground">{social.name}</div>
                  <div className="text-xs text-muted-foreground truncate">@{social.username}</div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors">
                  <path d="M7 17L17 7"/>
                  <path d="M7 7h10v10"/>
                </svg>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Recognition & Recommendation */}
        <AnimatedSection delay={0.3} className="mt-20">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-3">Endorsements</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">
            Recognition & <span className="gold-gradient-text">Recommendations</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="stat-card rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/>
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg">U.S. Embassy Burundi</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Recognized as a key contributor in Public Diplomacy programs, delivering IT training and software development workshops that empowered hundreds of students across multiple cohorts.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-primary font-medium">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Formal Recognition
              </div>
            </div>

            <div className="stat-card rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg">UPchieve Mentorship</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Recommended for exceptional dedication to academic coaching, supporting 10+ students in mathematics, science, and technology — contributing to measurable improvement in student outcomes.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-primary font-medium">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Formal Recommendation
              </div>
            </div>

            <div className="stat-card rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg">700+ Students Impacted</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Trained over 700 students across AI, IT, software development, and digital literacy programs — with impact spanning Africa, North America, and Asia.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-primary font-medium">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Verified Impact
              </div>
            </div>

            <div className="stat-card rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg">Global Program Contributor</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Actively contributing to international education programs and digital literacy initiatives, bridging the gap between local talent and global opportunity.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-primary font-medium">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Ongoing Contribution
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
