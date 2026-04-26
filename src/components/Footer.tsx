import { Link } from "@tanstack/react-router";
import { Sprout, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Sprout className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">AgroMind</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            An AI-driven platform guiding Sri Lankan paddy farmers across the full cultivation lifecycle —
            from planning to post-harvest advisory.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/domain" className="hover:text-primary transition-smooth">Project Domain</Link></li>
            <li><Link to="/milestones" className="hover:text-primary transition-smooth">Milestones</Link></li>
            <li><Link to="/documents" className="hover:text-primary transition-smooth">Documents</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-smooth">Team</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /><span>agromind.research@sliit.lk</span></li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /><span>+94 11 754 4801</span></li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /><span>SLIIT, Malabe, Sri Lanka</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AgroMind Research Project · SLIIT Faculty of Computing
      </div>
    </footer>
  );
}
