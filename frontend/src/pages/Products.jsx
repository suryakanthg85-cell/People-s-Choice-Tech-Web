import SEO from "../components/site/SEO";
import { Link } from "react-router-dom";
import GradientBlobs from "@/components/site/GradientBlobs";
import { PRODUCTS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, ArrowUpRight, ExternalLink, Check } from "lucide-react";

export default function Products() {
  const featured = PRODUCTS.find((p) => p.designedByPCT) || null;
  const rest = PRODUCTS.filter((p) => !p.designedByPCT);

  return (
<>
<SEO
  title="Products | People's Choice Tech"
  description="Discover SaaS products and digital platforms developed by People's Choice Tech."
  keywords="saas products, software products, custom platforms, AI products"
  url="https://peopleschoice.tech/products"
/>
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-[11px] uppercase tracking-[0.24em] text-blue-600 font-bold eyebrow-line">Products</div>
          <h1 className="mt-6 text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-slate-900 max-w-3xl">
            Building the next generation of technology products.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Beyond services, we design, engineer and operate full software products — for our clients,
            and increasingly under our own brand.
          </p>
        </div>
      </section>

      {/* FEATURED — Track The Breach */}
      {featured && (
        <section className="py-8 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl overflow-hidden text-white relative">
              <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

              <div className="lg:col-span-7 p-8 lg:p-14 relative">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 text-[11px] font-bold uppercase tracking-[0.18em] border border-purple-400/30">
                  <Sparkles className="h-3 w-3" /> Designed & Built by PCT
                </div>
                <h2 className="mt-5 text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-[1.1]">
                  {featured.name}
                </h2>
                <div className="mt-2 text-blue-300 font-semibold text-[14px]">{featured.category}</div>
                <p className="mt-4 text-slate-200 text-[15.5px] leading-relaxed max-w-xl">{featured.desc}</p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {featured.tags?.map((t) => (
                    <span key={t} className="text-[11.5px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/15">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {featured.caseStudySlug && (
                    <Link to={`/case-studies/${featured.caseStudySlug}`} data-testid="featured-case-study-cta">
                      <Button className="h-11 rounded-full px-6 bg-white text-slate-900 hover:bg-slate-100 font-semibold">
                        Read the case study <ArrowUpRight className="ml-1.5 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                  {featured.url && (
                    <a href={featured.url} target="_blank" rel="noopener noreferrer" data-testid="featured-product-website">
                      <Button variant="outline" className="h-11 rounded-full px-6 border-white/30 text-white bg-transparent hover:bg-white/10 font-semibold">
                        Visit website <ExternalLink className="ml-1.5 h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                  <img src={featured.image} alt={featured.name} className="w-full h-full object-cover opacity-80" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-950/30 to-slate-950" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 max-w-xl">More accelerators in our pipeline.</h2>
          <p className="text-slate-600 mt-2">Productized platforms that help teams skip months of foundational work.</p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p) => (
              <div
                key={p.name}
                className="p-7 bg-white border border-slate-200 rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 transition-all"
                data-testid={`product-card-${p.name.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <div className="text-[11px] uppercase tracking-[0.18em] text-blue-600 font-bold">{p.category}</div>
                <h3 className="text-xl font-bold text-slate-900 mt-2">{p.name}</h3>
                <p className="mt-2 text-slate-600 text-[14.5px]">{p.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-800 text-[11.5px] font-semibold">
                  <Sparkles className="h-3 w-3" /> In early access
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Want early access or your own product?</h2>
          <p className="mt-3 text-slate-600">Tell us which product interests you — or if you'd like us to build the next one with you.</p>
          <Link to="/contact?type=contact" className="inline-block mt-6">
            <Button className="h-12 rounded-full px-7 bg-slate-900 hover:bg-blue-700 text-white font-semibold" data-testid="products-cta">
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
</>
  );
}
