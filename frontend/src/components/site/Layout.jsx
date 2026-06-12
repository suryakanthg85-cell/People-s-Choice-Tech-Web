import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GradientBlobs from "./GradientBlobs";
import WhatsappChat from "./WhatsappChat";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-slate-900">
      {/* Site-wide ambient gradient blobs — light blue / light green / light purple */}
      <GradientBlobs variant="fixed" />
      <div className="relative z-10 flex flex-col flex-1 w-full max-w-[100vw] overflow-x-clip">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <WhatsappChat />
    </div>
  );
}
