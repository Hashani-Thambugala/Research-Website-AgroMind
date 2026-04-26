import { T as jsxRuntimeExports } from "./worker-entry-C2PHGdVa.js";
import { N as Navbar, F as Footer } from "./Footer-CGNgaJPJ.js";
function PageShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-16", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function PageHeader({ eyebrow, title, description }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-section border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-16 md:py-20 animate-fade-up", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight mb-4", children: title }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-3xl", children: description })
  ] }) });
}
export {
  PageShell as P,
  PageHeader as a
};
