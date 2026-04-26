import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { CheckCircle2, Calendar } from "lucide-react";

export const Route = createFileRoute("/milestones")({
  head: () => ({
    meta: [
      { title: "Milestones — AgroMind" },
      { name: "description", content: "Project timeline and key milestones for AgroMind: proposal, progress presentations, final presentation and viva." },
      { property: "og:title", content: "Milestones — AgroMind" },
      { property: "og:description", content: "Track AgroMind's research milestones from proposal to viva." },
    ],
  }),
  component: MilestonesPage,
});

const milestones = [
  { title: "Project Proposal", date: "March 2025", weight: "6%", desc: "Initial research proposal outlining the problem, scope, methodology and expected outcomes — accepted by the supervisory panel." },
  { title: "Progress Presentation 1", date: "July 2025", weight: "15%", desc: "Demonstrated 50% completion: data collection, baseline models for pest prediction and weed detection." },
  { title: "Progress Presentation 2", date: "November 2025", weight: "18%", desc: "Demonstrated 90% completion: integrated modules, mobile app prototype and field validation results." },
  { title: "Final Presentation", date: "February 2026", weight: "20%", desc: "Comprehensive demonstration of the full AgroMind platform, validation studies and farmer feedback." },
  { title: "Viva", date: "March 2026", weight: "15%", desc: "Individual examinations evaluating each member's research contribution and technical depth." },
];

function MilestonesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Project Timeline"
        title="Milestones"
        description="Key checkpoints across the AgroMind research lifecycle."
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            <div className="absolute left-5 md:left-7 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
            {milestones.map((m, i) => (
              <div key={m.title} className="relative pl-16 md:pl-20 pb-10 last:pb-0 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-7 hover-lift">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-xl font-bold">{m.title}</h3>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/40 text-accent-foreground">
                      {m.weight}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                    <Calendar className="w-4 h-4" /> {m.date}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
