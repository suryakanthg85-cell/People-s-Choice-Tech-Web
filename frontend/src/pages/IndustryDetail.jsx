import { useParams, Navigate, Link } from "react-router-dom";
import GradientBlobs from "@/components/site/GradientBlobs";
import { INDUSTRIES, CASE_STUDIES, SERVICES } from "@/lib/data";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHALLENGES = {
  default: [
    "Modernizing legacy systems without disrupting business",
    "Building secure, compliant cloud platforms",
    "Unlocking value from siloed data",
    "Delivering delightful customer-facing apps",
  ],
};

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return <Navigate to="/industries" replace />;

  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-[11px] uppercase tracking-[0.24em] text-orange-600 font-bold eyebrow-line">Industries / {industry.name}</div>
          <h1 className="mt-6 text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-slate-900 max-w-4xl">
            Technology that moves {industry.name.toLowerCase()} forward.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">{industry.desc}</p>
          <div className="mt-8 flex gap-3">
            <Link to="/contact?type=consultation" data-testid="industry-cta-consult">
              <Button className="h-11 rounded-full px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold">Talk to an expert</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Challenges we solve</h2>
            <ul className="mt-5 space-y-3">
              {CHALLENGES.default.map((c) => (
                <li key={c} className="flex gap-3 items-start">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span className="text-slate-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Services we deliver</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {SERVICES.slice(0, 6).map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-900 transition">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-orange-600 font-bold">{s.category}</div>
                  <div className="font-semibold text-slate-900 mt-1">{s.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50/60 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">Related case studies</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {CASE_STUDIES.slice(0, 3).map((c) => (
              <Link to="/case-studies" key={c.slug} className="bg-white border border-slate-200 rounded-2xl overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-orange-600 font-bold">{c.industry}</div>
                  <div className="mt-1.5 font-bold text-slate-900">{c.title}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact?type=proposal">
              <Button className="h-12 rounded-full px-7 bg-slate-900 hover:bg-slate-800 text-white font-semibold" data-testid="industry-detail-bottom-cta">
                Request a proposal <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
