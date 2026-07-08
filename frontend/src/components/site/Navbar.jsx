import { useState, useEffect, useRef } from "react";
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
  const closeTimer = useRef(null);
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

  const openMega = (key) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMega(null), 180);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/70 shadow-sm shadow-slate-200/40" : "bg-white/40 backdrop-blur-sm"
      }`}
      data-testid="site-header"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
<Link to="/">
  <img
    src="/logo.png"
    alt="People's Choice Tech"
    className="h-10 w-auto"
  />
</Link>
        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.mega ? openMega(item.mega) : scheduleClose()}
              onMouseLeave={scheduleClose}
            >
              <NavLink
                to={item.to}
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-[14px] font-semibold rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap group/link ${
                    isActive || mega === item.mega ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
                  }`
                }
              >
                <span className="relative">
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                      mega === item.mega ? "w-full" : "w-0 group-hover/link:w-full"
                    }`}
                  />
                </span>
                {item.mega && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 opacity-60 transition-transform duration-300 ${
                      mega === item.mega ? "rotate-180 text-blue-600 opacity-100" : ""
                    }`}
                  />
                )}
              </NavLink>

              {/* Mega panel — anchored directly under this trigger, no gap */}
              {item.mega && mega === item.mega && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50"
                  onMouseEnter={() => openMega(item.mega)}
                  onMouseLeave={scheduleClose}
                  style={{ minWidth: "720px" }}
                >
                  <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-300/40 p-6">
                    <div className="grid grid-cols-3 gap-x-6 gap-y-1 max-h-[60vh] overflow-auto">
                      {item.mega === "services" &&
                        SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="group/item p-3 rounded-xl hover:bg-blue-50 transition-colors"
                            data-testid={`mega-service-${s.slug}`}
                          >
                            <div className="text-[10px] uppercase tracking-[0.18em] text-blue-600 font-bold mb-1">
                              {s.category}
                            </div>
                            <div className="font-semibold text-slate-900 group-hover/item:text-blue-700 text-[14.5px]">
                              {s.title}
                            </div>
                            <div className="text-[12.5px] text-slate-500 mt-0.5 line-clamp-2 leading-snug">
                              {s.short}
                            </div>
                          </Link>
                        ))}
                      {item.mega === "industries" &&
                        INDUSTRIES.map((i) => (
                          <Link
                            key={i.slug}
                            to={`/industries/${i.slug}`}
                            className="group/item p-3 rounded-xl hover:bg-blue-50 transition-colors"
                            data-testid={`mega-industry-${i.slug}`}
                          >
                            <div className="font-semibold text-slate-900 group-hover/item:text-blue-700 text-[14.5px]">{i.name}</div>
                            <div className="text-[12.5px] text-slate-500 line-clamp-2 leading-snug mt-0.5">{i.desc}</div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link to="/contact" data-testid="nav-contact-link">
            <Button variant="ghost" className="rounded-full h-10 px-4 text-slate-700 font-semibold hover:text-blue-700 hover:bg-blue-50">
              Contact
            </Button>
          </Link>
          <Link to="/contact?type=proposal" data-testid="nav-proposal-cta">
            <Button className="rounded-full h-10 px-5 bg-slate-900 hover:bg-blue-700 text-white font-semibold shadow-md transition-all hover:-translate-y-0.5">
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
              const tones = ["bg-sky-50", "bg-emerald-50", "bg-purple-50", "bg-blue-50", "bg-teal-50", "bg-indigo-50", "bg-violet-50", "bg-cyan-50"];
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`p-4 rounded-2xl ${tones[idx % tones.length]} border border-slate-200 active:scale-95 transition-transform`}
                  data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="text-[15px] font-bold text-slate-900">{item.label}</div>
                </Link>
              );
            })}
            <Link to="/contact" className="col-span-2 p-4 rounded-2xl bg-slate-100 border border-slate-200 text-center font-semibold text-slate-800">
              Contact
            </Link>
            <Link
              to="/contact?type=proposal"
              className="col-span-2 inline-flex items-center justify-center bg-slate-900 hover:bg-blue-700 text-white rounded-2xl px-5 py-4 font-bold shadow-md transition-colors"
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
