import SEO from "../components/site/SEO";
import { useParams, Navigate, Link } from "react-router-dom";
import GradientBlobs from "@/components/site/GradientBlobs";
import { CASE_STUDIES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, ArrowLeft, Check, TrendingUp, Layers, Sparkles, Quote,
} from "lucide-react";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) return <Navigate to="/case-studies" replace />;

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <div className="text-[11px] uppercase tracking-[0.24em] text-blue-600 font-bold eyebrow-line">{c.industry}</div>
            {c.pctProduct && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[11.5px] font-bold">
                <Sparkles className="h-3 w-3" /> Designed & Built by PCT
              </span>
            )}
          </div>
          <h1 className="mt-5 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.05] text-slate-900">{c.title}</h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-3xl">{c.summary}</p>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="pb-14">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50">
            <img src={c.image} alt={c.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* OVERVIEW / CHALLENGE / SOLUTION */}
      {(c.overview || c.challenge || c.solution) && (
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
            {c.overview && (
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-bold mb-2">Client Overview</div>
                <p className="text-slate-700 leading-relaxed text-[15px]">{c.overview}</p>
              </div>
            )}
            {c.challenge && (
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-bold mb-2">Business Challenge</div>
                <p className="text-slate-700 leading-relaxed text-[15px]">{c.challenge}</p>
              </div>
            )}
            {c.solution && (
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-bold mb-2">Solution Design</div>
                <p className="text-slate-700 leading-relaxed text-[15px]">{c.solution}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* PRODUCT MODULES */}
      {c.modules && (
        <section className="py-14 bg-white/60 backdrop-blur-sm border-y border-slate-200 relative">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="h-4 w-4 text-blue-600" />
              <div className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-bold">Core Product Modules</div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 max-w-2xl">What we built — module by module.</h2>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.modules.map((m, i) => {
                const tones = ["bg-blue-50 text-blue-700", "bg-sky-50 text-sky-700", "bg-emerald-50 text-emerald-700", "bg-purple-50 text-purple-700", "bg-teal-50 text-teal-700"];
                return (
                  <div key={m.name} className="p-6 bg-white border border-slate-200 rounded-2xl hover:-translate-y-1 hover:shadow-md transition">
                    <div className={`h-9 w-9 rounded-lg ${tones[i % tones.length]} grid place-items-center mb-3 font-bold text-[13px]`}>{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="font-bold text-slate-900 text-lg">{m.name}</h3>
                    <p className="mt-1.5 text-slate-600 text-[14px] leading-relaxed">{m.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* TECH STACK */}
      {c.stack && (
        <section className="py-14">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-bold mb-3">Technology Stack</div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 max-w-2xl">Engineered with a modern, scalable stack.</h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(c.stack).map(([cat, items]) => (
                <div key={cat} className="p-6 bg-white border border-slate-200 rounded-2xl">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-bold">{cat}</div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {items.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 text-[12px] font-semibold">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS PHASES */}
      {c.phases && (
        <section className="py-14 bg-white/60 backdrop-blur-sm border-y border-slate-200 relative">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-bold mb-3">Development Process</div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 max-w-2xl">Seven phases. One disciplined agile track.</h2>
            <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {c.phases.map((p, i) => (
                <li key={p} className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 tabular-nums leading-none shrink-0">{String(i + 1).padStart(2, "0")}</div>
                  <div className="text-slate-800 font-medium text-[14.5px] leading-snug">{p}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* OUTCOMES / IMPACT */}
      {(c.outcomes || c.impact) && (
        <section className="py-14">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-4 w-4 text-emerald-600" />
              <div className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-bold">Results & Outcomes</div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 max-w-2xl">A production-ready platform — delivered.</h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {(c.outcomes || c.impact).map((o) => (
                <div key={o} className="flex items-start gap-3 p-5 bg-white border border-slate-200 rounded-2xl">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                  <div className="font-semibold text-slate-900 text-[14.5px]">{o}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CLOSING QUOTE */}
      {c.quote && (
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-slate-950 text-white rounded-3xl p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl" />
              <Quote className="h-8 w-8 text-blue-300 mb-4 relative" />
              <p className="text-xl lg:text-2xl leading-relaxed relative">{c.quote}</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">Want to build something like {c.title.split("—")[0].trim()}?</h2>
          <p className="mt-3 text-slate-600">Tell us your idea. We'll come back with a plan and a realistic estimate in 24 hours.</p>
          <div className="mt-7 flex justify-center gap-3 flex-wrap">
            <Link to="/contact?type=consultation">
              <Button className="h-12 rounded-full px-7 bg-slate-900 hover:bg-blue-700 text-white font-semibold">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact?type=proposal">
              <Button variant="outline" className="h-12 rounded-full px-7 hover:border-blue-600 hover:text-blue-700">
                Request a Proposal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
