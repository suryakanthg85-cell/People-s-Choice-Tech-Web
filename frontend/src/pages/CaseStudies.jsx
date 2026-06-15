import { Link } from "react-router-dom";
import GradientBlobs from "@/components/site/GradientBlobs";
import { CASE_STUDIES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function CaseStudies() {
  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-[11px] uppercase tracking-[0.24em] text-blue-600 font-bold eyebrow-line">Case Studies</div>
          <h1 className="mt-6 text-5xl lg:text-6xl font-bold tracking-[-0.005em] leading-[1.05] text-slate-900 max-w-3xl">
            Outcomes, not promises. Pick a transformation to dive into.
          </h1>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          {CASE_STUDIES.map((c, idx) => (
            <Link
              to={`/case-studies/${c.slug}`}
              key={c.slug}
              className={`grid lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
              data-testid={`case-study-${c.slug}`}
            >
              <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:h-full bg-slate-100 overflow-hidden">
                <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="lg:col-span-7 p-8 lg:p-12">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-bold">{c.industry}</div>
                  {c.pctProduct && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[10.5px] font-bold uppercase tracking-wider">
                      PCT Built
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 leading-tight">{c.title}</h3>
                <p className="mt-3 text-slate-600 text-[15.5px] leading-relaxed">{c.summary}</p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {c.impact.slice(0, 3).map((i) => (
                    <div key={i} className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <TrendingUp className="h-4 w-4 text-emerald-600 mb-2" />
                      <div className="font-semibold text-slate-900 text-[13.5px] leading-tight">{i}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold">
                  Read case study <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-[-0.005em] text-slate-900">Could yours be next?</h2>
          <p className="mt-3 text-slate-600">Tell us where you're stuck. We'll show you what's possible.</p>
          <Link to="/contact?type=consultation" className="inline-block mt-6">
            <Button className="h-12 rounded-full px-7 bg-slate-900 hover:bg-slate-800 text-white font-semibold" data-testid="case-studies-cta">
              Book a consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
