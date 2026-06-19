import SEO from "../components/site/SEO";
import { useParams, Navigate, Link } from "react-router-dom";
import GradientBlobs from "@/components/site/GradientBlobs";
import { INDUSTRIES, CASE_STUDIES, SERVICES } from "@/lib/data";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return <Navigate to="/industries" replace />;
  const challenges = industry.challenges || [
    "Modernizing legacy systems without disrupting business",
    "Building secure, compliant cloud platforms",
    "Unlocking value from siloed data",
    "Delivering delightful customer-facing apps",
  ];

  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.24em] text-blue-600 font-bold eyebrow-line">Industries / {industry.name}</div>
            <h1 className="mt-6 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.05] text-slate-900">
              Technology that moves {industry.name.toLowerCase()} forward.
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl">{industry.overview || industry.desc}</p>
            <div className="mt-8 flex gap-3 flex-wrap">
              <Link to="/contact?type=consultation" data-testid="industry-cta-consult">
                <Button className="h-11 rounded-full px-6 bg-slate-900 hover:bg-blue-700 text-white font-semibold">Talk to an expert</Button>
              </Link>
              <Link to="/contact?type=proposal">
                <Button variant="outline" className="h-11 rounded-full px-6 hover:border-blue-600 hover:text-blue-700">Request a proposal</Button>
              </Link>
            </div>
          </div>
          {industry.image && (
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50 aspect-[4/3]">
                <img src={industry.image} alt={industry.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 via-transparent to-transparent" />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Challenges we solve</h2>
            <ul className="mt-6 space-y-3">
              {challenges.map((c) => (
                <li key={c} className="flex gap-3 items-start p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-200 hover:shadow-sm transition">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-slate-800 font-medium">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Services we deliver</h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {SERVICES.slice(0, 6).map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-600 hover:shadow-md transition group">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-bold">{s.category}</div>
                  <div className="font-semibold text-slate-900 mt-1 group-hover:text-blue-700">{s.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/60 backdrop-blur-sm border-y border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Related case studies</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {CASE_STUDIES.slice(0, 3).map((c) => (
              <Link to="/case-studies" key={c.slug} className="bg-white border border-slate-200 rounded-2xl overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-bold">{c.industry}</div>
                  <div className="mt-1.5 font-bold text-slate-900">{c.title}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact?type=proposal">
              <Button className="h-12 rounded-full px-7 bg-slate-900 hover:bg-blue-700 text-white font-semibold" data-testid="industry-detail-bottom-cta">
                Request a proposal <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
