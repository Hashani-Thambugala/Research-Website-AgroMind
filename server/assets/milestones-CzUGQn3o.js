import { T as jsxRuntimeExports } from "./worker-entry-C2PHGdVa.js";
import { P as PageShell, a as PageHeader } from "./PageShell-B_D83Rgg.js";
import { c as createLucideIcon } from "./Footer-CGNgaJPJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-TJ1S60ot.js";
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode);
const milestones = [{
  title: "Project Proposal",
  date: "March 2025",
  weight: "6%",
  desc: "Initial research proposal outlining the problem, scope, methodology and expected outcomes — accepted by the supervisory panel."
}, {
  title: "Progress Presentation 1",
  date: "July 2025",
  weight: "15%",
  desc: "Demonstrated 50% completion: data collection, baseline models for pest prediction and weed detection."
}, {
  title: "Progress Presentation 2",
  date: "November 2025",
  weight: "18%",
  desc: "Demonstrated 90% completion: integrated modules, mobile app prototype and field validation results."
}, {
  title: "Final Presentation",
  date: "February 2026",
  weight: "20%",
  desc: "Comprehensive demonstration of the full AgroMind platform, validation studies and farmer feedback."
}, {
  title: "Viva",
  date: "March 2026",
  weight: "15%",
  desc: "Individual examinations evaluating each member's research contribution and technical depth."
}];
function MilestonesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Project Timeline", title: "Milestones", description: "Key checkpoints across the AgroMind research lifecycle." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-5 md:left-7 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" }),
      milestones.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-16 md:pl-20 pb-10 last:pb-0 animate-fade-up", style: {
        animationDelay: `${i * 80}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 md:w-6 md:h-6 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 md:p-7 hover-lift", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: m.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold px-3 py-1 rounded-full bg-accent/40 text-accent-foreground", children: m.weight })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-primary font-medium mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
            " ",
            m.date
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: m.desc })
        ] })
      ] }, m.title))
    ] }) }) })
  ] });
}
export {
  MilestonesPage as component
};
