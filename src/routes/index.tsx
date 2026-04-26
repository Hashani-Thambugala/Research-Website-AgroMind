import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CountUp } from "@/components/CountUp";
import heroImg from "@/assets/hero-paddy.jpg";
import featurePest from "@/assets/feature-pest.jpg";
import featureMobile from "@/assets/feature-mobile.jpg";
import {
  Sprout, ArrowRight, Bug, Leaf, Map, Warehouse,
  Database, BrainCircuit, Lightbulb, Smartphone, TrendingUp, ShieldCheck, Coins, Clock,
  CloudRain, Cpu, BarChart3, MessageSquare, Languages, WifiOff, Activity, LineChart,
  Target, ArrowDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgroMind — AI-Driven Platform for Paddy Farmers" },
      { name: "description", content: "AgroMind is an AI-powered smart agriculture platform helping Sri Lankan paddy farmers improve productivity, reduce losses, and optimize decisions across the full cultivation lifecycle." },
      { property: "og:title", content: "AgroMind — AI-Driven Platform for Paddy Farmers" },
      { property: "og:description", content: "Smart AI guidance for paddy cultivation: pest prediction, weed detection, crop planning and post-harvest advisory." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const benefits = [
  { icon: Clock, value: "7-day", label: " Early pest foracsting " },
  { icon: Coins, value: "28%", label: "Reduction in herbicide costs" },
  { icon: TrendingUp, value: "18%", label: "Increase in net profit" },
  { icon: ShieldCheck, value: "LKR 52,400", label: "Economic benefit per hectare" },
];

const modules = [
  { icon: Bug, title: "Pest Prediction with pest manage", desc: "Forecast pest outbreaks 7 days forcast in advance using Random Forest + XGBoost on weather and field data with YOLO detection.", to: "/domain" },
  { icon: Leaf, title: "Weed Detection", desc: "Identify weeds instantly with a lightweight MobileNetV2 vision model that runs on-device.", to: "/domain" },
  { icon: Map, title: "Crop Planning", desc: "Recommend optimal varieties, sowing dates and zones using ML and geospatial intelligence.", to: "/domain" },
  { icon: Warehouse, title: "Post-Harvest Advisory", desc: "Cut storage losses and time market sales with XGBoost + LSTM price and demand forecasts.", to: "/domain" },
];

const featureSections = [
  {
    image: featurePest,
    eyebrow: "Module 01 · Pest Prediction with pest manage",
    title: "Catch outbreaks before they spread",
    desc: "AgroMind fuses local weather feeds, soil moisture and historical infestation records to predict pest pressure up to 12 days before symptoms appear in the field.",
    models: ["Random Forest", "XGBoost","YOLO"],
    benefits: ["pest detection","7 day forcasting", "Targeted spray windows", "Lower pesticide overuse"],
  },
  {
    image: featureMobile,
    eyebrow: "Module 02 · Mobile Advisory",
    title: "Decisions in the farmer's pocket",
    desc: "A lightweight React Native app delivers real-time recommendations in Sinhala, Tamil and English — fully offline-capable so it works in remote paddy regions.",
    models: ["MobileNetV2", "LSTM"],
    benefits: ["On-device inference", "Multilingual voice support", "Works offline"],
  },
];

const steps = [
  { icon: CloudRain, title: "Data Collection", desc: "Weather feeds, soil sensors, satellite imagery and farmer-uploaded photos." },
  { icon: Cpu, title: "AI Analysis", desc: "Models process inputs in real time to detect risks and predict outcomes." },
  { icon: Lightbulb, title: "Decision Support", desc: "Rule engines blend predictions into actionable, context-aware advice." },
  { icon: MessageSquare, title: "Farmer Recommendations", desc: "Clear next-step guidance is delivered to the farmer's mobile device." },
];

const layers = [
  { icon: Database, name: "Data Layer", desc: "Weather, satellite imagery, soil & farmer inputs" },
  { icon: BrainCircuit, name: "Machine Learning Layer", desc: "RF, XGBoost, LSTM, MobileNetV2 models" },
  { icon: Lightbulb, name: "Decision Layer", desc: "Rule engines & multi-module advisory orchestration" },
  { icon: Smartphone, name: "Presentation Layer", desc: "React Native mobile app for farmers (offline-first)" },
];

const impact = [
  { icon: Target, end: 99.4, decimals: 1, suffix: "%", label: "Pest model accuracy" },
  { icon: Leaf, end: 98.3, decimals: 1, suffix: "%", label: "Weed detection accuracy" },
  { icon: TrendingUp, end: 18, decimals: 0, suffix: "%", label: "Average profit increase" },
  { icon: Activity, end: 12, decimals: 0, suffix: " days", label: "Pest forecast lead time" },
];

const capabilities = [
  { icon: Languages, title: "Multilingual AI assistant", desc: "Sinhala, Tamil and English voice + chat support." },
  { icon: WifiOff, title: "Offline mobile support", desc: "On-device inference keeps the app usable without internet." },
  { icon: BarChart3, title: "Real-time predictions", desc: "Continuous risk scoring as new data arrives from sensors." },
  { icon: LineChart, title: "Market price forecasting", desc: "LSTM models forecast prices to time post-harvest sales." },
];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* 1. HERO */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          <img
            src={heroImg}
            alt="Sri Lankan paddy fields at sunrise"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-primary-glow/60" />
          <div className="relative max-w-7xl mx-auto px-6 py-32 text-primary-foreground">
            <div className="max-w-3xl animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-semibold tracking-wider uppercase mb-6">
                <Sprout className="w-3.5 h-3.5" /> SLIIT Research Project
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.05]">
                Agro<span className="text-accent">Mind</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-4 text-white/95">
                AI-powered smart agriculture platform for Sri Lankan paddy farmers.
              </p>
              <p className="text-base md:text-lg text-white/85 mb-10 max-w-2xl leading-relaxed">
                Guidance across the full cultivation lifecycle — from sowing decisions to post-harvest sales —
                powered by machine learning, computer vision and real-time field data.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/domain"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-semibold rounded-lg shadow-elegant hover:shadow-glow hover:scale-[1.03] transition-smooth"
                >
                  Explore Project <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-smooth"
                >
                  View Features <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. AT A GLANCE */}
        <section className="py-20 bg-gradient-section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-10 items-start mb-12">
              <div className="lg:col-span-1 animate-fade-up">
                <span className="text-xs font-semibold tracking-wider uppercase text-primary">At a Glance</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">A complete AI co-pilot for paddy cultivation</h2>
              </div>
              <p className="lg:col-span-2 text-muted-foreground leading-relaxed text-lg animate-fade-up">
                AgroMind unifies four AI modules — pest prediction, weed detection, crop planning and post-harvest
                advisory — into one mobile experience. Built for Sri Lankan smallholder farmers, it turns weather,
                soil, image and market data into clear, actionable recommendations that improve yield, cut input
                costs and protect post-harvest margins.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, i) => (
                <div
                  key={b.label}
                  className="bg-gradient-card border border-border rounded-2xl p-7 hover-lift animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-1">{b.value}</div>
                  <div className="text-sm text-muted-foreground">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. OUR SERVICES / CORE MODULES */}
        <section id="features" className="py-24 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12 animate-fade-up">
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Four core modules, one platform</h2>
              <p className="text-muted-foreground">Each module targets a critical decision point in the paddy lifecycle, working together to deliver end-to-end farm intelligence.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((m, i) => (
                <div
                  key={m.title}
                  className="group flex flex-col p-7 rounded-2xl border border-border bg-card hover-lift animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-5 shadow-soft group-hover:shadow-glow transition-smooth">
                    <m.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{m.desc}</p>
                  <Link
                    to={m.to}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. FEATURE DETAILS — alternating */}
        <section className="py-24 bg-gradient-section border-y border-border">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            {featureSections.map((f, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={f.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="animate-fade-up">
                    <div className="overflow-hidden rounded-3xl shadow-elegant">
                      <img
                        src={f.image}
                        alt={f.title}
                        loading="lazy"
                        width={1024}
                        height={768}
                        className="w-full h-full object-cover hover:scale-105 transition-smooth duration-700"
                      />
                    </div>
                  </div>
                  <div className="animate-fade-up">
                    <span className="text-xs font-semibold tracking-wider uppercase text-primary">{f.eyebrow}</span>
                    <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{f.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{f.desc}</p>

                    <div className="mb-6">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">AI Models</div>
                      <div className="flex flex-wrap gap-2">
                        {f.models.map((m) => (
                          <span key={m} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {f.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-glow shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. HOW IT WORKS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">From raw data to farmer action</h2>
              <p className="text-muted-foreground">Every prediction follows a four-step pipeline designed for transparency and trust.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className="relative p-7 rounded-2xl bg-card border border-border hover-lift animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-gradient-hero text-primary-foreground font-bold text-sm flex items-center justify-center shadow-soft">
                    {i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. SYSTEM ARCHITECTURE */}
        <section className="py-24 bg-gradient-section border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">System Architecture</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">A four-layer intelligent stack</h2>
              <p className="text-muted-foreground">Data flows upward — sensors and inputs at the base, decisions and farmer-facing experiences at the top.</p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {layers.map((l, i) => (
                <div
                  key={l.name}
                  className="relative bg-card border border-border rounded-2xl p-6 md:p-7 flex items-center gap-5 hover-lift animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <l.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-primary">LAYER {layers.length - i}</span>
                    <h3 className="font-bold text-lg">{l.name}</h3>
                    <p className="text-sm text-muted-foreground">{l.desc}</p>
                  </div>
                  {i < layers.length - 1 && (
                    <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-px h-3 bg-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. IMPACT / RESULTS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">Impact &amp; Results</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Validated in the field</h2>
              <p className="text-muted-foreground">Performance benchmarks from controlled trials across paddy regions.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {impact.map((m, i) => (
                <div
                  key={m.label}
                  className="text-center p-8 rounded-2xl bg-gradient-card border border-border hover-lift animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <m.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    <CountUp end={m.end} decimals={m.decimals} suffix={m.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. EXTENDED CAPABILITIES */}
        <section className="py-24 bg-gradient-section border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12 animate-fade-up">
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">Extended Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Built for real Sri Lankan farms</h2>
              <p className="text-muted-foreground">Designed around the constraints farmers actually face — connectivity, language and market access.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((c, i) => (
                <div
                  key={c.title}
                  className="p-7 rounded-2xl border border-border bg-card hover-lift animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <c.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-base mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. CTA */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-16 text-center shadow-elegant">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                Empowering Farmers with AI
              </h2>
              <p className="text-primary-foreground/90 max-w-xl mx-auto mb-8 text-lg">
                Partner with the AgroMind research team to bring intelligent decision support to every paddy field.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-elegant hover:scale-[1.03] transition-smooth"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
