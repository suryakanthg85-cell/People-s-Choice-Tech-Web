import { Link } from "react-router-dom";
import GradientBlobs from "@/components/site/GradientBlobs";
import { PRODUCTS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Products() {
  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-[11px] uppercase tracking-[0.24em] text-orange-600 font-bold eyebrow-line">Products</div>
          <h1 className="mt-6 text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-slate-900 max-w-3xl">
            Building the next generation of technology products.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Beyond services, we invest in platforms — productized accelerators that help teams skip months of foundational work.
          </p>
          <div className="mt-7 flex items-center gap-2 text-orange-600 text-sm font-semibold">
            <Sparkles className="h-4 w-4" /> Early access program now open
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="p-7 bg-white border border-slate-200 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all" data-testid={`product-card-${p.name.replace(/\s+/g, '-').toLowerCase()}`}>
              <div className="text-[11px] uppercase tracking-[0.18em] text-orange-600 font-bold">{p.category}</div>
              <h3 className="text-xl font-bold text-slate-900 mt-2">{p.name}</h3>
              <p className="mt-2 text-slate-600 text-[14.5px]">{p.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-800 text-[11.5px] font-semibold">
                <Sparkles className="h-3 w-3" /> In early access
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-900">Want early access?</h2>
          <p className="mt-3 text-slate-600">Tell us which product you're interested in and we'll add you to the pilot list.</p>
          <Link to="/contact?type=contact" className="inline-block mt-6">
            <Button className="h-12 rounded-full px-7 bg-slate-900 hover:bg-slate-800 text-white font-semibold" data-testid="products-cta">
              Join the pilot list <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
