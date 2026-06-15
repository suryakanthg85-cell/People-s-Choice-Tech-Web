import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  ArrowRight, ArrowUpRight, MonitorSmartphone, Sparkles, Shield, Zap, Globe2, Code2, Brain,
  Cloud, Smartphone, Database, Workflow, Users, Briefcase, ShieldCheck, Layers, Compass, Star, Award,
  Stethoscope, Landmark, ShoppingBag, Factory, Truck, GraduationCap, Building2,
  Plane, Car, Radio, Clapperboard, Sprout, HardHat, Rocket,
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

const INDUSTRY_ICONS = {
  healthcare: Stethoscope, "finance-banking": Landmark, insurance: Shield,
  "retail-ecommerce": ShoppingBag, manufacturing: Factory, logistics: Truck,
  education: GraduationCap, "real-estate": Building2, "travel-hospitality": Plane,
  automotive: Car, energy: Zap, government: Landmark, telecom: Radio,
  media: Clapperboard, agriculture: Sprout, construction: HardHat, startups: Rocket,
};
const INDUSTRY_TONES = [
  { bg: "bg-rose-100", ic: "text-rose-600" },
  { bg: "bg-amber-100", ic: "text-amber-600" },
  { bg: "bg-emerald-100", ic: "text-emerald-600" },
  { bg: "bg-blue-100", ic: "text-blue-600" },
  { bg: "bg-purple-100", ic: "text-purple-600" },
  { bg: "bg-cyan-100", ic: "text-cyan-600" },
  { bg: "bg-violet-100", ic: "text-violet-600" },
  { bg: "bg-teal-100", ic: "text-teal-600" },
  { bg: "bg-fuchsia-100", ic: "text-fuchsia-600" },
  { bg: "bg-sky-100", ic: "text-sky-600" },
];

const Eyebrow = ({ children }) => (
  <div className="text-[11px] font-bold tracking-[0.24em] uppercase text-blue-600 eyebrow-line">
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
              <Eyebrow>AI • SOFTWARE • WEB & APP DEVELOPMENT • GLOBAL DELIVERY</Eyebrow>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.005em] leading-[1.02] text-slate-900 text-balance">
               We Turn Complex Business Challenges Into {" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent"> Smart Technology </span>
                </span>{" "}
              Solutions 
              </h1>
              <p className="mt-7 text-sm lg:text-base text-slate-600 leading-relaxed max-w-xl">
              People's Choice Tech helps startups, SMEs, and enterprises build AI solutions, custom software, SaaS platforms, web applications, mobile apps, cloud infrastructure, ERP systems, and business automation tools using modern technologies and proven engineering practices. 
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link to="/contact?type=consultation" data-testid="hero-cta-consult">
                  <Button className="h-12 rounded-full px-7 bg-slate-950 hover:bg-slate-800 text-white font-normal text-[14px] shadow-xl shadow-slate-900/20 hover:-translate-y-0.5 transition-all">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact?type=proposal" data-testid="hero-cta-proposal">
                  <Button variant="outline" className="h-12 rounded-full px-7 border-2 border-slate-300 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700 font-normal text-[14px] transition-all">
                   Book Free Consultation
                  </Button>
                </Link>
              </div>

             {/* Trust badges */}
<div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 text-[14px] text-slate-600 font-normal">

    <div className="flex items-center gap-2">
    <Code2 className="h-4 w-4 text-blue-600" />
    <span> Support All Tech</span>
  </div>

<div className="flex items-center gap-2">
    <Brain className="h-4 w-4 text-purple-600" />
    <span>AI Solutions</span>
  </div>


  <div className="flex items-center gap-2">
    <MonitorSmartphone className="h-4 w-4 text-emerald-600" />
    <span>Web & Mobile Apps</span>
  </div>

  <div className="flex items-center gap-2">
    <Briefcase className="h-4 w-4 text-amber-500" />
    <span>Custom Software & SaaS</span>
  </div>

  <div className="flex items-center gap-2">
    <Workflow className="h-4 w-4 text-cyan-600" />
    <span>ERP & API Integrations</span>
  </div>

  <div className="flex items-center gap-2">
    <Users className="h-4 w-4 text-indigo-600" />
    <span>Dedicated Development Teams</span>
  </div>

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
              <div key={s.label} className="bg-white p-6 lg:p-8 hover:bg-blue-50/40 transition-colors">
                <div className="text-4xl lg:text-5xl font-bold tracking-[-0.005em] text-slate-900">{s.value}</div>
                <div className="text-[13px] mt-2 text-slate-500 font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRUST / CERTIFICATIONS BAR */}
      <section className="py-14 border-y border-slate-200 bg-white/60 backdrop-blur-sm relative" data-testid="trust-bar">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.24em] text-blue-600 font-bold eyebrow-line">Trusted & Certified</div>
              <h3 className="mt-3 text-xl lg:text-2xl font-bold text-slate-900 tracking-[-0.005em]">
                Enterprise-grade rigor, verified by the standards your team already trusts.
              </h3>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: ShieldCheck, label: "ISO 27001", sub: "Aligned" },
                { icon: Cloud, label: "AWS Cloud", sub: "Sales Certified" },
                { icon: Award, label: "ISO 9001", sub: "Quality Aligned" },
                { icon: Shield, label: "SOC 2", sub: "Type II Ready" },
              ].map((c, i) => {
                const tones = ["bg-blue-50 text-blue-700", "bg-sky-50 text-sky-700", "bg-emerald-50 text-emerald-700", "bg-purple-50 text-purple-700"];
                return (
                  <div
                    key={c.label}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition"
                    data-testid={`cert-${c.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className={`h-10 w-10 rounded-lg ${tones[i]} grid place-items-center shrink-0`}>
                      <c.icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div className="leading-tight min-w-0">
                      <div className="font-bold text-slate-900 text-[13.5px] truncate">{c.label}</div>
                      <div className="text-[11.5px] text-slate-500 truncate">{c.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Brand pseudo-logos marquee */}
          <div className="mt-10">
            <div className="text-center text-[11px] uppercase tracking-[0.24em] text-slate-500 font-semibold mb-6">
              Trusted by ambitious teams across BFSI · Healthcare · Retail · Manufacturing
            </div>
            <div className="marquee-fade">
              <Marquee speed={42} gradient={false} pauseOnHover>
                {["Capgemini", "Infosys", "Cognizant", "Datamatics", "Clarion", "TCS", "Accenture", "Wipro", "HCL", "Tech Mahindra", "Mindtree", "LTI"].map((t) => (
                  <span key={t} className="mx-8 text-lg font-semibold text-slate-400 hover:text-slate-700 transition tracking-wide">
                    {t}
                  </span>
                ))}
              </Marquee>
            </div>
          </div>
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
              <span key={t} className="mx-10 text-2xl font-bold text-slate-400 hover:text-slate-900 transition tracking-[-0.005em]">{t}</span>
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
              <h2 className="mt-5 text-4xl lg:text-5xl font-bold tracking-[-0.005em] text-slate-900">
                Ten practices, one accountable partner.
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                From the first product sketch to enterprise transformation — we cover the full
                technology stack so you don't have to stitch vendors together.
              </p>
            </div>
            <Link to="/services" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all" data-testid="services-see-all">
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, idx) => {
              const Icon = ICONS[s.icon] || Code2;
              const palettes = [
                { bg: "bg-sky-100", ic: "text-sky-600", accent: "from-sky-500 to-sky-600" },
                { bg: "bg-emerald-100", ic: "text-emerald-600", accent: "from-emerald-500 to-emerald-600" },
                { bg: "bg-purple-100", ic: "text-purple-600", accent: "from-purple-500 to-purple-600" },
                { bg: "bg-blue-100", ic: "text-blue-600", accent: "from-blue-500 to-blue-600" },
                { bg: "bg-indigo-100", ic: "text-indigo-600", accent: "from-indigo-500 to-indigo-600" },
                { bg: "bg-teal-100", ic: "text-teal-600", accent: "from-teal-500 to-teal-600" },
                { bg: "bg-fuchsia-100", ic: "text-fuchsia-600", accent: "from-fuchsia-500 to-fuchsia-600" },
                { bg: "bg-cyan-100", ic: "text-cyan-600", accent: "from-cyan-500 to-cyan-600" },
                { bg: "bg-violet-100", ic: "text-violet-600", accent: "from-violet-500 to-violet-600" },
                { bg: "bg-slate-100", ic: "text-slate-700", accent: "from-slate-700 to-slate-900" },
              ];
              const p = palettes[idx % palettes.length];
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group p-7 bg-white border border-slate-200 rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 hover:border-blue-200 transition-all"
                  data-testid={`service-card-${s.slug}`}
                >
                  <div className={`h-12 w-12 rounded-xl ${p.bg} grid place-items-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className={`h-6 w-6 ${p.ic}`} strokeWidth={2} />
                  </div>
                  <div className={`text-[11px] font-bold uppercase tracking-[0.18em] ${p.ic} mb-2`}>{s.category}</div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-[-0.005em]">{s.title}</h3>
                  <p className="mt-2 text-slate-600 text-[14.5px] leading-relaxed">{s.short}</p>
                  <div className="mt-5 text-blue-600 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
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
            <h2 className="mt-5 text-4xl lg:text-5xl font-bold tracking-[-0.005em] text-slate-900">
              Built for the messy realities of regulated, complex industries.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {INDUSTRIES.slice(0, 15).map((i, idx) => {
              const IIcon = INDUSTRY_ICONS[i.slug] || Building2;
              const t = INDUSTRY_TONES[idx % INDUSTRY_TONES.length];
              return (
                <Link
                  key={i.slug}
                  to={`/industries/${i.slug}`}
                  className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition group"
                  data-testid={`industry-card-${i.slug}`}
                >
                  <div className={`h-10 w-10 rounded-lg ${t.bg} grid place-items-center mb-3 group-hover:scale-110 transition-transform`}>
                    <IIcon className={`h-5 w-5 ${t.ic}`} strokeWidth={2} />
                  </div>
                  <div className="font-semibold text-slate-900 text-[15px] group-hover:text-blue-700">{i.name}</div>
                  <div className="text-[12.5px] text-slate-500 mt-1 line-clamp-2">{i.desc}</div>
                </Link>
              );
            })}
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
              <h2 className="mt-5 text-4xl lg:text-5xl font-bold tracking-[-0.005em] text-slate-900">
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
                  <div className="text-4xl font-bold text-blue-600 tabular-nums">{p.step}</div>
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
              <h2 className="mt-5 text-4xl lg:text-5xl font-bold tracking-[-0.005em] text-slate-900">
                Work we're proud to put our name on.
              </h2>
            </div>
            <Link to="/case-studies" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all" data-testid="case-studies-see-all">
              All case studies <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.slice(0, 6).map((c) => (
              <Link
                key={c.slug}
                to={`/case-studies/${c.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 transition-all"
                data-testid={`case-card-${c.slug}`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-bold">{c.industry}</div>
                    {c.pctProduct && (
                      <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[9.5px] font-bold uppercase tracking-wider">People’s Choice Tech Built</span>
                    )}
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700">{c.title}</h3>
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
            <h2 className="mt-5 text-4xl lg:text-5xl font-bold tracking-[-0.005em] text-slate-900">
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
                    <div className="text-[13px] text-blue-600 font-semibold mt-0.5">{f.role}</div>
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
            <h2 className="mt-5 text-4xl lg:text-5xl font-bold tracking-[-0.005em] text-slate-900">
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
            <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-end">
              <div>
                <Eyebrow>Let's build</Eyebrow>
                <h2 className="mt-5 text-4xl lg:text-5xl font-bold tracking-[-0.005em] text-balance">
                  Have an idea, a problem, or a transformation in mind?
                </h2>
                <p className="mt-5 text-slate-300 text-lg max-w-md">
                  Tell us what you want to build. We'll come back within 24 hours with a plan and a realistic estimate.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <Link to="/contact?type=consultation" data-testid="bottom-cta-consult">
                  <Button className="h-12 rounded-full px-7 bg-white text-slate-900 hover:bg-slate-100 font-semibold w-full sm:w-auto">
                    Start Your Project
                  </Button>
                </Link>
                <Link to="/contact?type=proposal" data-testid="bottom-cta-proposal">
                  <Button variant="outline" className="h-12 rounded-full px-7 border-slate-700 text-white bg-transparent hover:bg-slate-900 font-semibold w-full sm:w-auto">
                    📅 Book Free Consultation 
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


