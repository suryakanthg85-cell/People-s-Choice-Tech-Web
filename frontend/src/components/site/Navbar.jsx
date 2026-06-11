import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { SERVICES, INDUSTRIES } from "../../lib/data";

const NAV = [
  { label: "Services", to: "/services", mega: "services" },
  { label: "Industries", to: "/industries", mega: "industries" },
  { label: "Technologies", to: "/technologies" },
  { label: "Products", to: "/products" },
  { label: "Staffing", to: "/staffing" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Careers", to: "/careers" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMega(null);
  }, [loc.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/70" : "bg-transparent"
      }`}
      data-testid="site-header"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group" data-testid="logo-link">
          <img
            src="https://customer-assets.emergentagent.com/job_pct-enterprise/artifacts/lp5jwh1s_Track_The_Breach_blue_Logo_1__2_-removebg-preview.png"
            alt="People's Choice Tech"
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setMega(null)}>
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setMega(item.mega || null)}
            >
              <NavLink
                to={item.to}
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-[14px] font-bold rounded-lg transition-all flex items-center gap-1 group/link whitespace-nowrap ${
                    isActive ? "text-slate-900" : "text-slate-700 hover:text-slate-950"
                  }`
                }
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover/link:w-full" />
                </span>
                {item.mega && <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover/link:rotate-180" />}
              </NavLink>
            </div>
          ))}

          {/* Mega panel */}
          {mega && (
            <div
              className="absolute left-0 right-0 top-full pt-3"
              onMouseEnter={() => setMega(mega)}
              onMouseLeave={() => setMega(null)}
            >
              <div className="max-w-7xl mx-auto px-5 lg:px-8">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/60 p-7">
                  <div className="grid grid-cols-3 gap-x-8 gap-y-2 max-h-[60vh] overflow-auto">
                    {mega === "services" &&
                      SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="group p-3 rounded-xl hover:bg-slate-50 transition"
                          data-testid={`mega-service-${s.slug}`}
                        >
                          <div className="text-[10px] uppercase tracking-[0.18em] text-orange-600 font-bold mb-1">
                            {s.category}
                          </div>
                          <div className="font-semibold text-slate-900 group-hover:text-orange-700">
                            {s.title}
                          </div>
                          <div className="text-[13px] text-slate-500 mt-0.5 line-clamp-2">
                            {s.short}
                          </div>
                        </Link>
                      ))}
                    {mega === "industries" &&
                      INDUSTRIES.map((i) => (
                        <Link
                          key={i.slug}
                          to={`/industries/${i.slug}`}
                          className="p-3 rounded-xl hover:bg-slate-50 transition"
                          data-testid={`mega-industry-${i.slug}`}
                        >
                          <div className="font-semibold text-slate-900">{i.name}</div>
                          <div className="text-[13px] text-slate-500 line-clamp-2">{i.desc}</div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link to="/contact" data-testid="nav-contact-link">
            <Button variant="ghost" className="rounded-full h-10 px-4 text-slate-700 font-bold hover:text-slate-950 hover:bg-slate-100">
              Contact
            </Button>
          </Link>
          <Link to="/contact?type=proposal" data-testid="nav-proposal-cta">
            <Button className="rounded-full h-10 px-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold shadow-lg shadow-orange-500/30 transition-all hover:shadow-orange-500/50 hover:-translate-y-0.5">
              Get Proposal
            </Button>
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-2xl shadow-slate-900/5 max-h-[calc(100vh-4rem)] overflow-auto" data-testid="mobile-menu">
          <div className="max-w-7xl mx-auto px-5 py-5 grid grid-cols-2 gap-3">
            {NAV.map((item, idx) => {
              const tones = ["bg-orange-50", "bg-sky-50", "bg-emerald-50", "bg-purple-50", "bg-amber-50", "bg-rose-50", "bg-indigo-50", "bg-teal-50"];
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`p-4 rounded-2xl ${tones[idx % tones.length]} border border-slate-200 active:scale-95 transition-transform`}
                  data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="text-[15px] font-extrabold text-slate-900">{item.label}</div>
                </Link>
              );
            })}
            <Link to="/contact" className="col-span-2 p-4 rounded-2xl bg-slate-100 border border-slate-200 text-center font-bold text-slate-800">
              Contact
            </Link>
            <Link
              to="/contact?type=proposal"
              className="col-span-2 inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl px-5 py-4 font-extrabold shadow-lg shadow-orange-500/30"
              data-testid="mobile-proposal-cta"
            >
              Get Proposal →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
