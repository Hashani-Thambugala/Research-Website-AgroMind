import { T as jsxRuntimeExports } from "./worker-entry-C2PHGdVa.js";
import { P as PageShell, a as PageHeader } from "./PageShell-B_D83Rgg.js";
import { c as createLucideIcon, M as Mail } from "./Footer-CGNgaJPJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-TJ1S60ot.js";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const team = [{
  name: "Thambugala T.G.H.D",
  role: "Team Lead · Pest Prediction with pest Manage ",
  email: "it22906762@my.sliit.lk",
  desc: "Specialises in time-series ML and pest outbreak forecasting using Random Forest & XGBoost ensembles."
}, {
  name: "Rodrigo K.A.A.L",
  role: "Weed Detection",
  email: "it22364074@my.sliit.lk",
  desc: "Computer vision researcher building lightweight MobileNetV2 models optimised for offline mobile inference."
}, {
  name: "Wijesinghe M.D.C.M",
  role: "Crop Establishment Planning",
  email: "it22330932@my.sliit.lk",
  desc: "Geospatial analytics enthusiast integrating satellite NDVI and soil data into ML-driven planning advisories."
}, {
  name: "Dilakshan K",
  role: "Post-Harvest Advisory",
  email: "it22339942@my.sliit.lk",
  desc: "Works on price forecasting and storage optimisation using LSTM + XGBoost hybrid pipelines."
}];
const supervisors = [{
  name: "Lokesha Weerasinghe ",
  role: "Supervisor"
}, {
  name: "Shalini Rupasinghe ",
  role: "Co-Supervisor"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Our Team", title: "The minds behind AgroMind", description: "A team of four undergraduate researchers from the Sri Lanka Institute of Information Technology, working under expert supervision." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: team.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-card border border-border rounded-2xl p-6 text-center hover-lift animate-fade-up", style: {
      animationDelay: `${i * 80}ms`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-9 h-9 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: t.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider mt-1 mb-3", children: t.role }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-4", children: t.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${t.email}`, className: "inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:underline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5" }),
        " ",
        t.email
      ] })
    ] }, t.name)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-gradient-section border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-7 h-7 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Supervisors" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: supervisors.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 flex items-center gap-4 hover-lift animate-fade-up", style: {
        animationDelay: `${i * 80}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-6 h-6 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.role })
        ] })
      ] }, s.name)) })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
