import SEO from "../components/site/SEO";
import GradientBlobs from "@/components/site/GradientBlobs";
import { RESOURCES } from "@/lib/data";
import { Clock } from "lucide-react";

export default function Resources() {
  return (
<>
<SEO
  title="Resources & Blogs | People's Choice Tech"
  description="Insights on Website Development, Software Engineering, AI, Cloud, Cybersecurity and Technology Trends."
  keywords="technology blog, software blog, AI blog, website development articles"
  url="https://peopleschoice.tech/resources"
/>
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-[11px] uppercase tracking-[0.24em] text-blue-600 font-bold eyebrow-line">Resources</div>
          <h1 className="mt-6 text-5xl lg:text-6xl font-bold tracking-[-0.005em] leading-[1.05] text-slate-900 max-w-3xl">
            Field notes from the people doing the work.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Articles, guides and reports — written by our engineers and consultants, not marketers.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map((r, idx) => (
              <article
                key={r.title}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 transition-all"
                data-testid={`resource-card-${idx}`}
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img src={r.image} alt={r.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] uppercase tracking-[0.18em] text-blue-700 font-bold">
                    {r.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">{r.title}</h3>
                  <p className="mt-2 text-[14px] text-slate-600 line-clamp-2">{r.excerpt}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-[12.5px] text-slate-500 font-medium">
                    <Clock className="h-3.5 w-3.5" /> {r.read} read
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14 text-center text-slate-500 text-sm">
            More articles coming soon. Subscribe to <span className="text-blue-700 font-semibold">The PCT Briefing</span> in the footer to be the first to read them.
          </div>
        </div>
      </section>
    </div>
</> 
 );
}
