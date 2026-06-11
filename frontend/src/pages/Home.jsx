import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  ArrowRight, ArrowUpRight, Sparkles, Shield, Zap, Globe2, Code2, Brain,
  Cloud, Smartphone, Database, ShieldCheck, Layers, Compass, Star,
} from "lucide-react";
import GradientBlobs from "@/components/site/GradientBlobs";
import HeroVisual from "@/components/site/HeroVisual";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  SERVICES, INDUSTRIES, CASE_STUDIES, PROCESS, FAQS, STATS, FOUNDERS, TECH_STACK,
} from "@/lib/data";

const ICONS = { Code2, Brain, Cloud, Smartphone, Database, ShieldCheck, Layers, Compass, Sparkles, Globe2: Globe2 };

const Eyebrow = ({ children }) => (
  <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-orange-600 eyebrow-line">
    {children}
  </div>
);

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-12 lg:pt-20 pb-24 lg:pb-32 overflow-hidden" data-testid="hero-section">
        <GradientBlobs variant="hero" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <Eyebrow>Global IT Consulting · Est. 2024</Eyebrow>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[-0.035em] leading-[1.02] text-slate-900 text-balance">
                Build, scale & transform with{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-orange-600 via-fuchsia-600 to-blue-600 bg-clip-text text-transparent">AI-powered</span>
                </span>{" "}
                technology solutions.
              </h1>
              <p className="mt-7 text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
                People's Choice Tech helps ambitious businesses ship world-class software, AI,
                cloud, cybersecurity and digital transformation — with enterprise rigor and
                startup pace.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link to="/contact?type=consultation" data-testid="hero-cta-consult">
                  <Button className="h-12 rounded-full px-7 bg-slate-950 hover:bg-slate-800 text-white font-bold text-[15px] shadow-xl shadow-slate-900/20 hover:-translate-y-0.5 transition-all">
                    Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact?type=proposal" data-testid="hero-cta-proposal">
                  <Button variant="outline" className="h-12 rounded-full px-7 border-2 border-slate-300 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-700 font-bold text-[15px] transition-all">
                    Get a Proposal
                  </Button>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] text-slate-600 font-semibold">
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-600" /> ISO-aligned delivery</div>
                <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" /> 4.9/5 satisfaction</div>
                <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-orange-600" /> 6 global offices</div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /> Start in 7 days</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <HeroVisual />
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200"
            data-testid="stats-strip"
          >
            {STATS.map((s) => (
              <div key={s.label} className="bg-white p-6 lg:p-8 hover:bg-orange-50/40 transition-colors">
                <div className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900">{s.value}</div>
                <div className="text-[13px] mt-2 text-slate-500 font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section className="py-10 border-y border-slate-200 bg-slate-50/60">
        <div className="text-center text-[11px] uppercase tracking-[0.24em] text-slate-500 font-bold mb-7">
          Engineering with the tools that ship the world's best products
        </div>
        <div className="marquee-fade">
          <Marquee speed={45} gradient={false} pauseOnHover>
            {["AWS", "Azure", "Google Cloud", "React", "Next.js", "Node.js", "Python", "Django", ".NET", "Java", "Kubernetes", "Docker", "MongoDB", "PostgreSQL", "OpenAI", "LangChain", "Terraform", "Flutter", "Kotlin", "Swift"].map((t) => (
              <span key={t} className="mx-10 text-2xl font-bold text-slate-400 hover:text-slate-900 transition tracking-tight">{t}</span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section className="py-24 lg:py-32 relative" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-5 text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                Ten practices, one accountable partner.
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                From the first product sketch to enterprise transformation — we cover the full
                technology stack so you don't have to stitch vendors together.
              </p>
            </div>
            <Link to="/services" className="text-orange-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all" data-testid="services-see-all">
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, idx) => {
              const Icon = ICONS[s.icon] || Code2;
              const tones = ["bg-sky-50", "bg-emerald-50", "bg-purple-50", "bg-orange-50", "bg-rose-50"];
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group p-7 bg-white border border-slate-200 rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 transition-all"
                  data-testid={`service-card-${s.slug}`}
                >
                  <div className={`h-11 w-11 rounded-xl ${tones[idx % tones.length]} grid place-items-center mb-5 group-hover:scale-110 transition`}>
                    <Icon className="h-5 w-5 text-slate-900" />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-600 mb-2">{s.category}</div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-slate-600 text-[14.5px] leading-relaxed">{s.short}</p>
                  <div className="mt-5 text-orange-600 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-slate-50/60 border-y border-slate-200" data-testid="industries-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow>Industries we transform</Eyebrow>
            <h2 className="mt-5 text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Built for the messy realities of regulated, complex industries.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {INDUSTRIES.slice(0, 15).map((i) => (
              <Link
                key={i.slug}
                to={`/industries/${i.slug}`}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-900 hover:shadow-md transition group"
                data-testid={`industry-card-${i.slug}`}
              >
                <div className="font-semibold text-slate-900 text-[15px] group-hover:text-orange-700">{i.name}</div>
                <div className="text-[12.5px] text-slate-500 mt-1 line-clamp-2">{i.desc}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/industries" data-testid="industries-see-all">
              <Button variant="outline" className="rounded-full h-11 px-6">See all industries</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 lg:py-32" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
              <Eyebrow>How we deliver</Eyebrow>
              <h2 className="mt-5 text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                A delivery model engineered for outcomes — not invoices.
              </h2>
              <p className="mt-5 text-slate-600">
                Agile pods, weekly demos, transparent dashboards. You always know where
                your money is going and what's shipping next.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-5">
              {PROCESS.map((p, idx) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex gap-6 p-7 bg-white border border-slate-200 rounded-2xl hover:border-slate-900 transition"
                >
                  <div className="text-4xl font-black text-orange-600 tabular-nums">{p.step}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                    <p className="mt-2 text-slate-600">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 bg-slate-50/60 border-y border-slate-200" data-testid="case-studies-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <Eyebrow>Client success</Eyebrow>
              <h2 className="mt-5 text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                Work we're proud to put our name on.
              </h2>
            </div>
            <Link to="/case-studies" className="text-orange-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all" data-testid="case-studies-see-all">
              All case studies <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.slice(0, 6).map((c) => (
              <Link
                key={c.slug}
                to="/case-studies"
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all"
                data-testid={`case-card-${c.slug}`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-orange-600 font-bold">{c.industry}</div>
                  <h3 className="mt-2 text-lg font-bold text-slate-900 leading-snug">{c.title}</h3>
                  <p className="mt-2 text-[14px] text-slate-600 line-clamp-2">{c.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-24 lg:py-32" data-testid="founders-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow>The founders</Eyebrow>
            <h2 className="mt-5 text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Two decades of enterprise experience. One mission.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {FOUNDERS.map((f) => (
              <div key={f.slug} className="bg-white p-7 rounded-2xl border border-slate-200" data-testid={`founder-card-${f.slug}`}>
                <div className="flex items-center gap-5">
                  <img src={f.image} alt={f.name} className="h-20 w-20 rounded-2xl object-cover" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{f.name}</h3>
                    <div className="text-[13px] text-orange-600 font-semibold mt-0.5">{f.role}</div>
                  </div>
                </div>
                <p className="mt-5 text-slate-600 text-[14.5px] leading-relaxed">{f.bio}</p>
                <div className="mt-5 pt-5 border-t border-slate-100 italic text-slate-700 text-[14px]">"{f.quote}"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50/60 border-y border-slate-200" data-testid="faq-section">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Eyebrow>Frequently asked</Eyebrow>
            <h2 className="mt-5 text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Quick answers to common questions.
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200">
                <AccordionTrigger className="text-left text-[15.5px] lg:text-base font-semibold text-slate-900 py-5 hover:no-underline" data-testid={`faq-trigger-${i}`}>
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-[15px] leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" data-testid="cta-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-950 text-white rounded-3xl p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-end">
              <div>
                <Eyebrow>Let's build</Eyebrow>
                <h2 className="mt-5 text-4xl lg:text-5xl font-black tracking-tight text-balance">
                  Have an idea, a problem, or a transformation in mind?
                </h2>
                <p className="mt-5 text-slate-300 text-lg max-w-md">
                  Tell us what you want to build. We'll come back within 24 hours with a plan and a realistic estimate.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <Link to="/contact?type=consultation" data-testid="bottom-cta-consult">
                  <Button className="h-12 rounded-full px-7 bg-white text-slate-900 hover:bg-slate-100 font-semibold w-full sm:w-auto">
                    Book a Consultation
                  </Button>
                </Link>
                <Link to="/contact?type=proposal" data-testid="bottom-cta-proposal">
                  <Button variant="outline" className="h-12 rounded-full px-7 border-slate-700 text-white bg-transparent hover:bg-slate-900 font-semibold w-full sm:w-auto">
                    Request Proposal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
