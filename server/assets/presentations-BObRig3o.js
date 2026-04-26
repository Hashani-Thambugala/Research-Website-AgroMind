import { T as jsxRuntimeExports } from "./worker-entry-C2PHGdVa.js";
import { P as PageShell, a as PageHeader } from "./PageShell-B_D83Rgg.js";
import { P as Presentation, D as Download } from "./presentation-Bsd9ZpKr.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Footer-CGNgaJPJ.js";
import "./router-TJ1S60ot.js";
const decks = [{
  title: "Proposal Slides",
  date: "March 2025",
  desc: "Initial pitch — problem, gap, proposed solution and expected impact."
}, {
  title: "Progress 1 Slides",
  date: "July 2025",
  desc: "Mid-research review — datasets collected, baseline models and early results."
}, {
  title: "Progress 2 Slides",
  date: "November 2025",
  desc: "Late-stage update — integrated platform, validation results and field testing."
}, {
  title: "Final Presentation Slides",
  date: "February 2026",
  desc: "Complete project demonstration with metrics, impact and conclusions."
}];
function PresentationsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Slide Decks", title: "Presentations", description: "All milestone presentations delivered during the project lifecycle." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6", children: decks.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl overflow-hidden hover-lift animate-fade-up", style: {
      animationDelay: `${i * 80}ms`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-32 bg-gradient-hero flex items-center justify-center relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Presentation, { className: "w-14 h-14 text-primary-foreground/90" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 px-2.5 py-1 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-[10px] font-bold tracking-wider uppercase text-white", children: d.date })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: d.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: d.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
          " Download Slides"
        ] })
      ] })
    ] }, d.title)) }) })
  ] });
}
export {
  PresentationsPage as component
};
