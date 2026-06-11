import GradientBlobs from "@/components/site/GradientBlobs";
import { RESOURCES } from "@/lib/data";
import { Clock } from "lucide-react";

export default function Resources() {
  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-[11px] uppercase tracking-[0.24em] text-orange-600 font-bold eyebrow-line">Resources</div>
          <h1 className="mt-6 text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-slate-900 max-w-3xl">
            Field notes from the people doing the work.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Articles, guides and reports — written by our engineers and consultants, not marketers.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESOURCES.map((r, idx) => {
              const tones = ["bg-sky-50", "bg-emerald-50", "bg-purple-50", "bg-orange-50", "bg-rose-50", "bg-amber-50"];
              return (
                <article
                  key={r.title}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all"
                  data-testid={`resource-card-${idx}`}
                >
                  <div className={`aspect-[16/10] ${tones[idx % tones.length]} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-black text-slate-900 tracking-tight px-6 text-center">
                      {r.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-orange-600 font-bold">{r.category}</div>
                    <h3 className="mt-2 text-lg font-bold text-slate-900 leading-snug group-hover:text-orange-700">{r.title}</h3>
                    <div className="mt-4 flex items-center gap-1.5 text-[12.5px] text-slate-500">
                      <Clock className="h-3.5 w-3.5" /> {r.read} read
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-12 text-center text-slate-500 text-sm">
            More articles coming soon. Subscribe to the PCT Briefing in the footer to be the first to read them.
          </div>
        </div>
      </section>
    </div>
  );
}
