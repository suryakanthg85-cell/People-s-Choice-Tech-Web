import { Link } from "react-router-dom";
import GradientBlobs from "@/components/site/GradientBlobs";
import { INDUSTRIES } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Industries() {
  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-[11px] uppercase tracking-[0.24em] text-blue-600 font-bold eyebrow-line">Industries</div>
          <h1 className="mt-6 text-5xl lg:text-6xl font-bold tracking-[-0.005em] leading-[1.05] text-slate-900 max-w-4xl">
            Deep domain expertise across 20 industries — and counting.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Every industry has its own gravity. We bring patterns from the leaders and innovations from the
            challengers — so you don't have to choose between safe and bold.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((i) => (
            <Link
              to={`/industries/${i.slug}`}
              key={i.slug}
              className="group p-7 bg-white border border-slate-200 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all"
              data-testid={`industries-grid-${i.slug}`}
            >
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700">{i.name}</h3>
              <p className="mt-2 text-slate-600 text-[14.5px]">{i.desc}</p>
              <div className="mt-4 text-blue-600 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
