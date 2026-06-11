import { useParams, Link, Navigate } from "react-router-dom";
import {
  Code2, Brain, Cloud, Smartphone, Database, ShieldCheck, Layers, Compass,
  Sparkles, Globe2, ArrowRight, Check,
} from "lucide-react";
import GradientBlobs from "@/components/site/GradientBlobs";
import { SERVICES, PROCESS, CASE_STUDIES } from "@/lib/data";
import { Button } from "@/components/ui/button";

const ICONS = { Code2, Brain, Cloud, Smartphone, Database, ShieldCheck, Layers, Compass, Sparkles, Globe2 };

const WHY = [
  { title: "Outcome-driven", desc: "Every engagement starts with the business metric we're moving — not the feature list." },
  { title: "Senior-heavy teams", desc: "65%+ of every team is senior engineers. No bench-warmers, no juniors on critical paths." },
  { title: "Weekly demos", desc: "You see real, working software every Friday — from week one." },
  { title: "Transparent pricing", desc: "Detailed estimates, clear billing, no surprise scope creep." },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  const Icon = ICONS[service.icon] || Code2;
  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-[11px] uppercase tracking-[0.24em] text-orange-600 font-bold eyebrow-line">{service.category}</div>
          <div className="mt-6 flex items-start gap-5 max-w-4xl">
            <div className="h-14 w-14 rounded-2xl bg-slate-900 grid place-items-center shrink-0">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-slate-900">{service.title}</h1>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl">{service.short}</p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <Link to="/contact?type=proposal" data-testid="service-detail-cta-proposal">
              <Button className="h-11 rounded-full px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold">Request a proposal</Button>
            </Link>
            <Link to="/contact?type=consultation" data-testid="service-detail-cta-consult">
              <Button variant="outline" className="h-11 rounded-full px-6">Talk to an expert</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">What you get</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {service.bullets.map((b) => (
                <div key={b} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl">
                  <Check className="h-4 w-4 text-emerald-600 mt-1" />
                  <div className="text-[14.5px] font-medium text-slate-900">{b}</div>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-3xl font-black tracking-tight text-slate-900">Why partner with PCT</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {WHY.map((w) => (
                <div key={w.title} className="p-5 bg-white border border-slate-200 rounded-xl">
                  <div className="font-bold text-slate-900">{w.title}</div>
                  <div className="text-[14px] text-slate-600 mt-1">{w.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-slate-950 text-white rounded-2xl p-7 sticky top-28">
              <div className="text-[11px] uppercase tracking-[0.18em] text-orange-300 font-bold">Engagement at a glance</div>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="text-[12px] text-slate-400">Typical start</div>
                  <div className="font-bold">5 – 10 business days</div>
                </div>
                <div>
                  <div className="text-[12px] text-slate-400">Engagement models</div>
                  <div className="font-bold">Fixed-price · T&M · Dedicated team</div>
                </div>
                <div>
                  <div className="text-[12px] text-slate-400">Team composition</div>
                  <div className="font-bold">Senior-led pods (2–12 engineers)</div>
                </div>
                <div>
                  <div className="text-[12px] text-slate-400">Locations</div>
                  <div className="font-bold">India · USA · UK · Singapore</div>
                </div>
              </div>
              <Link to="/contact?type=proposal" className="block mt-6">
                <Button className="w-full h-11 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-semibold" data-testid="sidebar-proposal-cta">
                  Get a proposal <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 bg-slate-50/60 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 max-w-2xl">How we deliver — a 5-step engagement.</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="p-6 bg-white border border-slate-200 rounded-2xl">
                <div className="text-2xl font-black text-orange-600">{p.step}</div>
                <div className="mt-2 font-bold text-slate-900">{p.title}</div>
                <div className="mt-1.5 text-[13.5px] text-slate-600">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">Related work</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {CASE_STUDIES.slice(0, 3).map((c) => (
              <Link to="/case-studies" key={c.slug} className="bg-white border border-slate-200 rounded-2xl overflow-hidden group">
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-orange-600 font-bold">{c.industry}</div>
                  <div className="mt-1.5 font-bold text-slate-900">{c.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">Explore other services</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {others.map((s) => {
              const I = ICONS[s.icon] || Code2;
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="p-5 bg-white border border-slate-200 rounded-xl hover:border-slate-900 transition">
                  <I className="h-5 w-5 text-slate-700" />
                  <div className="mt-3 font-bold text-slate-900">{s.title}</div>
                  <div className="text-[13px] text-slate-500 mt-1 line-clamp-2">{s.short}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
