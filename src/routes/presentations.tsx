import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Presentation, Download } from "lucide-react";

export const Route = createFileRoute("/presentations")({
  head: () => ({
    meta: [
      { title: "Presentations — AgroMind" },
      { name: "description", content: "Slide decks from AgroMind project milestones: proposal, progress and final presentations." },
      { property: "og:title", content: "Presentations — AgroMind" },
      { property: "og:description", content: "All AgroMind milestone slide decks." },
    ],
  }),
  component: PresentationsPage,
});

const decks = [
  { title: "Proposal Slides", date: "March 2025", desc: "Initial pitch — problem, gap, proposed solution and expected impact." },
  { title: "Progress 1 Slides", date: "July 2025", desc: "Mid-research review — datasets collected, baseline models and early results." },
  { title: "Progress 2 Slides", date: "November 2025", desc: "Late-stage update — integrated platform, validation results and field testing." },
  { title: "Final Presentation Slides", date: "February 2026", desc: "Complete project demonstration with metrics, impact and conclusions." },
];

function PresentationsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Slide Decks"
        title="Presentations"
        description="All milestone presentations delivered during the project lifecycle."
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {decks.map((d, i) => (
            <div key={d.title} className="bg-card border border-border rounded-2xl overflow-hidden hover-lift animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="h-32 bg-gradient-hero flex items-center justify-center relative">
                <Presentation className="w-14 h-14 text-primary-foreground/90" />
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-[10px] font-bold tracking-wider uppercase text-white">
                  {d.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{d.desc}</p>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth">
                  <Download className="w-4 h-4" /> Download Slides
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
