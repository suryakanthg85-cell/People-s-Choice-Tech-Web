import { Link } from "react-router-dom";
import GradientBlobs from "@/components/site/GradientBlobs";
import { STAFFING } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Users, Clock, Globe2, Check, ArrowRight } from "lucide-react";

export default function Staffing() {
  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-[11px] uppercase tracking-[0.24em] text-blue-600 font-bold eyebrow-line">Staffing & Talent</div>
          <h1 className="mt-6 text-5xl lg:text-6xl font-bold tracking-[-0.005em] leading-[1.05] text-slate-900 max-w-4xl">
            Hire vetted engineers in days — not months.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Augment your team with senior, pre-screened developers across 80+ stacks.
            Flexible models, transparent pricing, zero recruiter spam.
          </p>
          <div className="mt-8 flex gap-3">
            <Link to="/contact?type=consultation" data-testid="staffing-cta-talk">
              <Button className="h-11 rounded-full px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold">Talk to staffing</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 border-y border-slate-200 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Clock, k: "5 days", v: "Avg placement time" },
            { icon: Users, k: "120+", v: "Engineers in network" },
            { icon: Globe2, k: "20+", v: "Tech stacks covered" },
            { icon: Check, k: "92%", v: "Conversion to long-term" },
          ].map((m) => (
            <div key={m.v}>
              <m.icon className="h-5 w-5 text-blue-600 mb-3" />
              <div className="text-3xl font-bold text-slate-900">{m.k}</div>
              <div className="text-sm text-slate-500">{m.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-[-0.005em] text-slate-900 max-w-xl">Choose the engagement that fits your stage.</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STAFFING.map((s) => (
              <div key={s.title} className="p-7 bg-white border border-slate-200 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all" data-testid={`staffing-card-${s.title.replace(/\s+/g, '-').toLowerCase()}`}>
                <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600 text-[14.5px]">{s.desc}</p>
                <Link to="/contact?type=proposal" className="mt-5 inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm">
                  Hire for this <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl p-10 lg:p-14 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-[-0.005em]">Need to scale your team yesterday?</h2>
                <p className="text-slate-300 mt-3 max-w-md">Send us your hiring need — we'll come back within 24 hours with 3 vetted profiles.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <Link to="/contact?type=proposal" data-testid="staffing-bottom-proposal">
                  <Button className="h-12 rounded-full px-7 bg-white text-slate-900 hover:bg-slate-100 font-semibold w-full sm:w-auto">Request profiles</Button>
                </Link>
                <Link to="/contact?type=consultation" data-testid="staffing-bottom-consult">
                  <Button variant="outline" className="h-12 rounded-full px-7 border-slate-700 text-white bg-transparent hover:bg-slate-900 font-semibold w-full sm:w-auto">Book a call</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
