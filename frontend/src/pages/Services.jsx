import { Link } from "react-router-dom";
import {
  Code2, Brain, Cloud, Smartphone, Database, ShieldCheck, Layers, Compass,
  Sparkles, Globe2, ArrowRight,
} from "lucide-react";
import GradientBlobs from "@/components/site/GradientBlobs";
import { SERVICES } from "@/lib/data";
import { Button } from "@/components/ui/button";

const ICONS = { Code2, Brain, Cloud, Smartphone, Database, ShieldCheck, Layers, Compass, Sparkles, Globe2 };

export default function Services() {
  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-[11px] uppercase tracking-[0.24em] text-blue-600 font-bold eyebrow-line">Services</div>
          <h1 className="mt-6 text-5xl lg:text-6xl font-bold tracking-[-0.005em] leading-[1.05] text-slate-900 max-w-3xl">
            Everything you need to build, scale and modernize — under one roof.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Ten deeply-staffed practices spanning software, AI, cloud, security and consulting.
            Engage one or all — your call, our accountability.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, idx) => {
            const Icon = ICONS[s.icon] || Code2;
            const tones = ["bg-sky-50", "bg-emerald-50", "bg-purple-50", "bg-blue-50", "bg-rose-50", "bg-amber-50"];
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group p-7 bg-white border border-slate-200 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all"
                data-testid={`services-grid-${s.slug}`}
              >
                <div className={`h-12 w-12 rounded-xl ${tones[idx % tones.length]} grid place-items-center mb-5`}>
                  <Icon className="h-5 w-5 text-slate-900" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 mb-2">{s.category}</div>
                <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600 text-[14.5px]">{s.short}</p>
                <ul className="mt-4 space-y-1.5 text-[13px] text-slate-600">
                  {s.bullets.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-blue-600" /> {b}</li>
                  ))}
                </ul>
                <div className="mt-5 text-blue-600 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl p-10 lg:p-14 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-[-0.005em]">Not sure which service fits?</h2>
            <p className="text-slate-300 mt-3 max-w-xl mx-auto">Book a 30-minute consultation and we'll tell you exactly where to start.</p>
            <Link to="/contact?type=consultation" className="inline-block mt-6">
              <Button className="h-12 rounded-full px-7 bg-white text-slate-900 hover:bg-slate-100 font-semibold" data-testid="services-bottom-cta">
                Talk to an expert <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
