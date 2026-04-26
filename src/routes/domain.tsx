import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import {
  BookOpen, AlertCircle, HelpCircle, Target, Workflow, Cpu, Bug, Leaf, Map, Warehouse,
} from "lucide-react";

export const Route = createFileRoute("/domain")({
  head: () => ({
    meta: [
      { title: "Project Domain — AgroMind" },
      { name: "description", content: "Literature survey, research gap, problem, objectives, methodology and technologies behind the AgroMind paddy AI platform." },
      { property: "og:title", content: "Project Domain — AgroMind" },
      { property: "og:description", content: "The research foundation, methodology and technology stack of AgroMind." },
    ],
  }),
  component: DomainPage,
});

const sections = [
  {
    icon: BookOpen,
    title: "Literature Survey",
    body: "Recent agriculture-AI tools — including Plantix, CropIn and FarmBeats — have shown the value of computer vision and IoT in farming. However, most existing systems address a single problem (e.g. disease identification or irrigation), are designed for cash crops in temperate regions, and rarely consider the socio-economic context of smallholder paddy farmers in South Asia. They also depend on stable internet connectivity, which limits adoption in rural Sri Lanka.",
  },
  {
    icon: AlertCircle,
    title: "Research Gap",
    body: "No existing platform supports the full paddy cultivation lifecycle in an integrated manner. Current tools handle isolated stages — pest detection or yield estimation — without coordinating decisions across planning, growth, harvest and sale. There is also a gap in lightweight, offline-capable models tuned to Sri Lankan paddy varieties and climate zones.",
  },
  {
    icon: HelpCircle,
    title: "Research Problem",
    body: "Sri Lankan paddy farmers face low yields, recurring pest outbreaks, poor pre-season planning and significant post-harvest losses (estimated at 15–25%). These issues are amplified by climate variability and limited access to expert agronomic advice — leading to reduced income and food security risks.",
  },
];

const objectives = [
  "Improve pest prediction with pest detection using ensemble ML models trained on local outbreak and weather data",
  "Detect weeds accurately on-device, even offline",
  "Optimize crop planning using ML + geospatial intelligence",
  "Reduce post-harvest losses through storage & market timing advisory",
];

const methodology = [
  { icon: Bug, title: "Pest Prediction with pest manage", model: "Random Forest + XGBoost + YOLO", desc: "Combines historical outbreak data, weather forecasts and crop stage to predict pest pressure 12 days ahead." },
  { icon: Leaf, title: "Weed Detection", model: "MobileNetV2 (TFLite)", desc: "Compact CNN trained on annotated paddy field images; runs offline on smartphones for instant herbicide recommendations." },
  { icon: Map, title: "Crop Planning", model: "ML + Geospatial", desc: "Uses satellite NDVI, soil profiles, rainfall patterns and farmer goals to recommend variety, sowing date and zone allocation." },
  { icon: Warehouse, title: "Post-Harvest Advisory", model: "XGBoost + LSTM", desc: "Forecasts price movement, optimal storage duration and best-time-to-sell to maximise net profit." },
];

const tech = ["Python", "Flask", "TensorFlow Lite", "React Native", "Random Forest", "XGBoost", "LSTM", "MobileNetV2", "PostgreSQL", "Geospatial APIs"];

function DomainPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Research Domain"
        title="The science behind AgroMind"
        description="A deep dive into the literature, problem space, objectives, methodology and technologies that shape this research project."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {sections.map((s, i) => (
            <div key={s.title} className="bg-card border border-border rounded-2xl p-8 hover-lift animate-fade-up md:[&:nth-child(3)]:col-span-2" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-gradient-section border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <Target className="w-7 h-7 text-primary" />
            <h2 className="text-3xl font-bold">Research Objectives</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {objectives.map((o, i) => (
              <div key={o} className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover-lift animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="w-8 h-8 rounded-lg bg-gradient-hero text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <p className="text-foreground font-medium">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <Workflow className="w-7 h-7 text-primary" />
            <h2 className="text-3xl font-bold">Methodology — Four Modules</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {methodology.map((m, i) => (
              <div key={m.title} className="p-7 rounded-2xl border border-border bg-gradient-card hover-lift animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <m.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{m.title}</h3>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-0.5">{m.model}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-20 bg-gradient-section border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <Cpu className="w-7 h-7 text-primary" />
            <h2 className="text-3xl font-bold">Technologies Used</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {tech.map((t, i) => (
              <span key={t} className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium hover:border-primary hover:text-primary transition-smooth animate-fade-up" style={{ animationDelay: `${i * 40}ms` }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
