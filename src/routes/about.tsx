import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Mail, User, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — AgroMind" },
      { name: "description", content: "Meet the AgroMind research team and supervisors driving AI-powered paddy farming innovation." },
      { property: "og:title", content: "About Us — AgroMind" },
      { property: "og:description", content: "The team behind AgroMind." },
    ],
  }),
  component: AboutPage,
});

const team = [
  {
    name: "Thambugala T.G.H.D",
    role: "Team Lead · Pest Prediction with pest Manage ",
    email: "it22906762@my.sliit.lk",
    desc: "Specialises in time-series ML and pest outbreak forecasting using Random Forest & XGBoost ensembles.",
  },
  {
    name: "Rodrigo K.A.A.L",
    role: "Weed Detection",
    email: "it22364074@my.sliit.lk",
    desc: "Computer vision researcher building lightweight MobileNetV2 models optimised for offline mobile inference.",
  },
  {
    name: "Wijesinghe M.D.C.M",
    role: "Crop Establishment Planning",
    email: "it22330932@my.sliit.lk",
    desc: "Geospatial analytics enthusiast integrating satellite NDVI and soil data into ML-driven planning advisories.",
  },
  {
    name: "Dilakshan K",
    role: "Post-Harvest Advisory",
    email: "it22339942@my.sliit.lk",
    desc: "Works on price forecasting and storage optimisation using LSTM + XGBoost hybrid pipelines.",
  },
];

const supervisors = [
  { name: "Lokesha Weerasinghe ", role: "Supervisor" },
  { name: "Shalini Rupasinghe ", role: "Co-Supervisor" },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Our Team"
        title="The minds behind AgroMind"
        description="A team of four undergraduate researchers from the Sri Lanka Institute of Information Technology, working under expert supervision."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <div key={t.name} className="bg-gradient-card border border-border rounded-2xl p-6 text-center hover-lift animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow">
                  <User className="w-9 h-9 text-primary-foreground" />
                </div>
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-1 mb-3">{t.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
                <a href={`mailto:${t.email}`} className="inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:underline">
                  <Mail className="w-3.5 h-3.5" /> {t.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-section border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <GraduationCap className="w-7 h-7 text-primary" />
            <h2 className="text-2xl font-bold">Supervisors</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {supervisors.map((s, i) => (
              <div key={s.name} className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 hover-lift animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{s.name}</h3>
                  <p className="text-xs text-muted-foreground">{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
