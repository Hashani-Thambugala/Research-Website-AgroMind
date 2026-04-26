import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AgroMind" },
      { name: "description", content: "Get in touch with the AgroMind research team at SLIIT." },
      { property: "og:title", content: "Contact — AgroMind" },
      { property: "og:description", content: "Reach out to the AgroMind team." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Have questions about AgroMind? Send us a message — we'd love to hear from researchers, farmers and partners."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4 animate-fade-up">
            {[
              { icon: Mail, label: "Email", value: "agromind.research@sliit.lk" },
              { icon: Phone, label: "Phone", value: "+94 11 754 4801" },
              { icon: MapPin, label: "Address", value: "SLIIT Malabe Campus, New Kandy Rd, Malabe, Sri Lanka" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4 p-5 bg-card border border-border rounded-xl hover-lift">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">{c.label}</div>
                  <div className="text-sm text-foreground mt-0.5">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 bg-gradient-card border border-border rounded-2xl p-8 shadow-soft animate-fade-up">
            {sent && (
              <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg text-sm text-primary font-medium">
                ✓ Thanks — your message has been received. We'll respond shortly.
              </div>
            )}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text" value={form.name} maxLength={100}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email" value={form.email} maxLength={255}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows={5} value={form.message} maxLength={1000}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none transition-smooth"
                  placeholder="Tell us about your interest in AgroMind…"
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-hero text-primary-foreground font-semibold rounded-lg shadow-soft hover:shadow-glow hover:scale-[1.02] transition-smooth"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
