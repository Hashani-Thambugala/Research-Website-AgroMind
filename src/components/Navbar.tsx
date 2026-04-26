import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Sprout } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/domain", label: "Domain" },
  { to: "/milestones", label: "Milestones" },
  { to: "/documents", label: "Documents" },
  { to: "/presentations", label: "Presentations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center shadow-soft group-hover:shadow-glow transition-smooth">
            <Sprout className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            Agro<span className="text-primary">Mind</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-smooth rounded-md hover:bg-secondary"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary rounded-md bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 rounded-md hover:bg-secondary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium rounded-md hover:bg-secondary"
                activeProps={{ className: "px-3 py-2.5 text-sm font-semibold rounded-md bg-secondary text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
