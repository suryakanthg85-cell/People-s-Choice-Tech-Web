import { Link } from "react-router-dom";
import GradientBlobs from "@/components/site/GradientBlobs";
import { TECH_STACK } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CATEGORY_COLORS = {
  Frontend: "from-sky-50 to-white",
  Backend: "from-emerald-50 to-white",
  Mobile: "from-purple-50 to-white",
  Database: "from-amber-50 to-white",
  Cloud: "from-orange-50 to-white",
  DevOps: "from-rose-50 to-white",
  AI: "from-indigo-50 to-white",
};

export default function Technologies() {
  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-[11px] uppercase tracking-[0.24em] text-orange-600 font-bold eyebrow-line">Technologies</div>
          <h1 className="mt-6 text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-slate-900 max-w-3xl">
            The tools we use to ship reliable, fast, modern software.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            We're stack-agnostic and outcome-obsessed. Below is the toolkit we reach for
            most — but if your team standardizes on something else, we'll meet you there.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          {Object.entries(TECH_STACK).map(([cat, items]) => (
            <div key={cat} className={`bg-gradient-to-br ${CATEGORY_COLORS[cat] || "from-slate-50 to-white"} border border-slate-200 rounded-2xl p-7`} data-testid={`tech-cat-${cat.toLowerCase()}`}>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-orange-600 font-bold">Stack</div>
                  <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-slate-900 mt-1">{cat}</h2>
                </div>
                <div className="text-sm text-slate-500">{items.length} technologies</div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {items.map((t) => (
                  <span key={t} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-[14px] font-semibold text-slate-800 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl p-10 lg:p-14 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">Need a specific stack expert?</h2>
            <p className="text-slate-300 mt-3 max-w-xl mx-auto">We can place vetted engineers across 80+ technologies — typically in under 10 days.</p>
            <Link to="/contact?type=consultation" className="inline-block mt-6">
              <Button className="h-12 rounded-full px-7 bg-white text-slate-900 hover:bg-slate-100 font-semibold" data-testid="tech-bottom-cta">
                Talk to staffing <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
