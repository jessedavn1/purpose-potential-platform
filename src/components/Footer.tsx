import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h3 className="font-heading text-lg font-bold">
              <span className="gold-gradient-text">Jesse David</span>{" "}
              <span className="text-foreground">Nsengiyumva</span>
            </h3>
            <p className="text-muted-foreground text-sm mt-2 max-w-xs">
              Building Africa's next generation of purpose-driven leaders through technology, AI, and education.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Navigate</span>
              <Link to="/story" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Story</Link>
              <Link to="/impact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impact</Link>
              <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Work</Link>
              <Link to="/vision" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Vision</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
        </div>
        <div className="section-divider mt-8 mb-6" />
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Jesse David Nsengiyumva. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
