import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="bg-gradient-section border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 animate-fade-up">
        {eyebrow && (
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
        {description && <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>}
      </div>
    </section>
  );
}
