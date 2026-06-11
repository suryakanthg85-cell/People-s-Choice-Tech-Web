import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GradientBlobs from "@/components/site/GradientBlobs";

export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] grid place-items-center overflow-hidden">
      <GradientBlobs variant="hero" />
      <div className="text-center px-6 relative">
        <div className="text-[11px] uppercase tracking-[0.24em] text-orange-600 font-bold">404</div>
        <h1 className="mt-4 text-5xl lg:text-7xl font-black tracking-tight text-slate-900">Lost in space.</h1>
        <p className="mt-4 text-slate-600 max-w-md mx-auto">The page you're looking for doesn't exist — or has moved.</p>
        <Link to="/" className="inline-block mt-6">
          <Button className="h-12 rounded-full px-7 bg-slate-900 hover:bg-slate-800 text-white font-semibold" data-testid="notfound-home">
            Go home <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
