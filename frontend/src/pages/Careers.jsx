import { Link } from "react-router-dom";
import GradientBlobs from "@/components/site/GradientBlobs";
import { JOBS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, ArrowRight, Heart, Sparkles, Compass } from "lucide-react";

const BENEFITS = [
  { icon: Heart, title: "People-first culture", desc: "Flexible hours, remote-friendly, mental-health days, and a team that actually listens." },
  { icon: Sparkles, title: "Top-tier projects", desc: "Work on greenfield AI, cloud and enterprise platforms — not boring CRUD." },
  { icon: Compass, title: "Real career growth", desc: "Promotion paths, learning stipends and mentorship from senior architects." },
];

export default function Careers() {
  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-[11px] uppercase tracking-[0.24em] text-blue-600 font-bold eyebrow-line">Careers</div>
          <h1 className="mt-6 text-5xl lg:text-6xl font-bold tracking-[-0.005em] leading-[1.05] text-slate-900 max-w-3xl">
            Build a career here. Not just a paycheck.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            We're a small, senior team obsessed with shipping great software. Join us and work on
            problems that move real businesses forward.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-5">
          {BENEFITS.map((b) => (
            <div key={b.title} className="p-7 bg-white border border-slate-200 rounded-2xl">
              <div className="h-11 w-11 rounded-xl bg-blue-50 grid place-items-center mb-5">
                <b.icon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 border-y border-slate-200 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-[-0.005em] text-slate-900">Open positions</h2>
          <div className="mt-8 space-y-3">
            {JOBS.map((j, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-white border border-slate-200 rounded-2xl hover:border-slate-900 transition" data-testid={`job-row-${idx}`}>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{j.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-[13.5px] text-slate-500">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {j.location}</span>
                    <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> {j.type}</span>
                  </div>
                </div>
                <Link to={`/contact?type=careers&role=${encodeURIComponent(j.title)}`} data-testid={`apply-job-${idx}`}>
                  <Button className="rounded-full h-10 px-5 bg-slate-900 hover:bg-slate-800 text-white">
                    Apply <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-[-0.005em] text-slate-900">Don't see your role?</h2>
          <p className="mt-3 text-slate-600">We're always meeting great people. Drop us a note with what you do best.</p>
          <Link to="/contact?type=careers" className="inline-block mt-6">
            <Button className="h-12 rounded-full px-7 bg-slate-900 hover:bg-slate-800 text-white font-semibold" data-testid="careers-general-apply">
              Send us your resume <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
