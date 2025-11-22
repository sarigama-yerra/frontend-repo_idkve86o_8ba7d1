import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Pricing", href: "#pricing" },
    { label: "Auth", href: "#auth" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-300 via-sky-200 to-emerald-200" />
          <span className="font-semibold text-slate-800">PastelPay</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-slate-900 transition-colors">
              {n.label}
            </a>
          ))}
          <a href="#auth" className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors">Sign in</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg border border-slate-300" onClick={() => setOpen(!open)}>
          <Menu className="w-5 h-5" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/80 backdrop-blur-sm">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-slate-700" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href="#auth" className="px-4 py-2 rounded-xl bg-slate-900 text-white w-fit" onClick={() => setOpen(false)}>Sign in</a>
          </div>
        </div>
      )}
    </header>
  );
}
