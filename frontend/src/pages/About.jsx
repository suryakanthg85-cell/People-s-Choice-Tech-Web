import SEO from "../components/site/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Target, Eye, Heart, Globe2 } from "lucide-react";
import GradientBlobs from "@/components/site/GradientBlobs";
import { Button } from "@/components/ui/button";
import { COMPANY, FOUNDERS, STATS } from "@/lib/data";

const VALUES = [
  { title: "Innovation First", desc: "We lead with curiosity and bold engineering choices." },
  { title: "Customer Success", desc: "Your outcome is our scoreboard — not our hours billed." },
  { title: "Transparency", desc: "No black boxes. Open roadmaps, open code, open communication." },
  { title: "Quality Engineering", desc: "Tests, reviews, observability — every commit is production-minded." },
  { title: "Security by Design", desc: "Threat models from day one, not bolted on at launch." },
  { title: "Long-Term Partnerships", desc: "We're builders, not vendors. Most clients stay for years." },
];

export default function About() {
  return (
<>
<SEO
  title="About Us | People's Choice Tech"
  description="Meet People's Choice Tech founders and senior engineers with expertise in .NET, WordPress, React, AI, Cloud and Enterprise Software Development."
  keywords="about people's choice tech, software company founders, IT company India, website development company"
  url="https://peopleschoice.tech/about"
/>
    <div>
      <section className="relative pt-20 pb-20 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-[11px] uppercase tracking-[0.24em] text-blue-600 font-bold eyebrow-line">About People's Choice Tech</div>
          <h1 className="mt-6 text-5xl lg:text-6xl font-bold tracking-[-0.005em] leading-[1.05] text-slate-900 max-w-4xl">
            An emerging global technology company, founded by people who built at the world's largest IT firms.
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl">
            Two leaders with 10+ years each at Infosys, Cognizant, Datamatics and Clarion came together to
            build something different — enterprise-grade delivery with the speed, transparency and care
            of a tight-knit team.
          </p>
        </div>
      </section>

      <section className="py-20 border-y border-slate-200 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-5xl font-bold tracking-[-0.005em] text-slate-900">{s.value}</div>
              <div className="text-sm mt-2 text-slate-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Our Mission", desc: "Empower every business to leverage modern technology, AI and cloud — without the complexity tax." },
            { icon: Eye, title: "Our Vision", desc: "To be the most trusted emerging technology partner for ambitious teams across the globe." },
            { icon: Heart, title: "Our Promise", desc: "Honest counsel, world-class engineering, and a long-term relationship — not just a project." },
          ].map((b) => (
            <div key={b.title} className="bg-white border border-slate-200 p-7 rounded-2xl">
              <div className="h-11 w-11 rounded-xl bg-blue-50 grid place-items-center mb-5">
                <b.icon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section id="founders" className="py-24 bg-slate-50/60 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.24em] text-blue-600 font-bold eyebrow-line">Founders</div>
            <h2 className="mt-5 text-4xl lg:text-5xl font-bold tracking-[-0.005em] text-slate-900">Led by builders. Backed by experience.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {FOUNDERS.map((f) => (
              <div key={f.slug} className="bg-white p-7 rounded-2xl border border-slate-200" data-testid={`about-founder-${f.slug}`}>
                <div className="flex items-start gap-5">
                  <img src={f.image} alt={f.name} className="h-24 w-24 rounded-2xl object-cover" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900">{f.name}</h3>
                    <div className="text-blue-600 font-semibold text-sm">{f.role}</div>
                    <a href={`mailto:${f.email}`} className="text-[13px] text-slate-500 hover:text-slate-900 mt-1 inline-block">{f.email}</a>
                  </div>
                </div>
                <p className="mt-5 text-slate-600 leading-relaxed">{f.bio}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {f.skills.map((s) => (
                    <span key={s} className="text-[11.5px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">{s}</span>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-slate-100 italic text-slate-700">"{f.quote}"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] uppercase tracking-[0.24em] text-blue-600 font-bold eyebrow-line">Core Values</div>
            <h2 className="mt-5 text-4xl lg:text-5xl font-bold tracking-[-0.005em] text-slate-900">What we believe.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="p-7 bg-white border border-slate-200 rounded-2xl">
                <div className="h-9 w-9 rounded-lg bg-emerald-50 grid place-items-center mb-4">
                  <Check className="h-4 w-4 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{v.title}</h3>
                <p className="text-slate-600 mt-2 text-[14.5px]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="py-24 bg-slate-50/60 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] uppercase tracking-[0.24em] text-blue-600 font-bold eyebrow-line">Global Presence</div>
            <h2 className="mt-5 text-4xl lg:text-5xl font-bold tracking-[-0.005em] text-slate-900">Six offices. One delivery standard.</h2>
            <p className="mt-4 text-slate-600">Headquartered at {COMPANY.hq}, with engineering and client teams across the world.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {COMPANY.offices.map((o) => (
              <div key={o.city} className="bg-white p-5 rounded-xl border border-slate-200" data-testid={`office-card-${o.city.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-bold mb-2 flex items-center gap-1.5">
                  <Globe2 className="h-3 w-3" /> {o.tz}
                </div>
                <div className="text-lg font-bold text-slate-900">{o.city}</div>
                <div className="text-sm text-slate-500">{o.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-[-0.005em] text-slate-900">Want to build with us?</h2>
          <p className="mt-3 text-slate-600">We'd love to hear about your project, your team, or what you're trying to ship.</p>
          <Link to="/contact" className="inline-block mt-6">
            <Button className="h-12 rounded-full px-7 bg-slate-900 hover:bg-slate-800 text-white font-semibold" data-testid="about-cta-contact">
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
</> 
 );
}
