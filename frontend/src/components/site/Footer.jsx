import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { COMPANY, SERVICES, INDUSTRIES } from "../../lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SOCIALS = [
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/company/people-s-choice-tech",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/suryakanthg85-cell",
    label: "GitHub",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/1234567890", // Replace with your actual WhatsApp number/link
    label: "WhatsApp",
  },
  {
    icon: FaFacebookF,
    href: "https://facebook.com/peopleschoicetech",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/peopleschoicetech",
    label: "Instagram",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/peopleschoicetech",
    label: "X (Twitter)",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com/@peopleschoicetech",
    label: "YouTube",
  },
];

const SECTIONS = [
  {
    title: "Services",
    links: SERVICES.slice(0, 8).map((s) => ({ label: s.title, to: `/services/${s.slug}` })),
  },
  {
    title: "Industries",
    links: INDUSTRIES.slice(0, 8).map((i) => ({ label: i.name, to: `/industries/${i.slug}` })),
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Founders", to: "/about#founders" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Careers", to: "/careers" },
      { label: "Resources", to: "/resources" },
      { label: "Products", to: "/products" },
      { label: "Staffing", to: "/staffing" },
    ],
  },
  {
    title: "Get in Touch",
    links: [
      { label: "Contact Sales", to: "/contact" },
      { label: "Book Consultation", to: "/contact?type=consultation" },
      { label: "Request Proposal", to: "/contact?type=proposal" },
      { label: "Partner with us", to: "/contact?type=contact" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setBusy(true);
    try {
      await axios.post(`${API}/newsletter`, { email });
      toast.success("Subscribed! Welcome to the PCT insider list.");
      setEmail("");
    } catch (err) {
      toast.error("Could not subscribe. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <footer className="relative bg-slate-950 text-slate-100 mt-24 overflow-hidden" data-testid="site-footer">
      {/* Decorative ambient glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative">
        {/* Newsletter band */}
        <div className="grid lg:grid-cols-2 gap-10 pb-14 border-b border-slate-800/80">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-blue-400 font-bold mb-3">
              The People's Choice Tech Briefing
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-[-0.005em]">
              Signal over noise. Once a month.
            </h3>
            <p className="text-slate-200 mt-3 max-w-md">
              Field notes on AI, cloud, and modern engineering — written by our practitioners, not marketers.
            </p>
          </div>
          <form
            onSubmit={subscribe}
            className="flex flex-col sm:flex-row gap-3 lg:self-end w-full"
            data-testid="newsletter-form"
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="h-12 bg-slate-900/60 border-slate-700 text-white placeholder:text-slate-400 rounded-full px-5 focus-visible:ring-blue-500"
              data-testid="newsletter-email-input"
            />
            <Button
              type="submit"
              disabled={busy}
              className="h-12 rounded-full px-7 bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-900 text-white font-bold shadow-lg shadow-slate-900/20"
              data-testid="newsletter-submit"
            >
              {busy ? "Subscribing…" : "Subscribe"}
            </Button>
          </form>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mt-14">
          <div className="col-span-2">
            <Link to="/" className="inline-flex items-center bg-white rounded-2xl px-4 py-2.5 shadow-lg shadow-slate-900/15 group hover:scale-105 transition-transform duration-300" data-testid="footer-logo">
              <img
                src="/new-logo.png"
                alt="People's Choice Tech"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-200 mt-5 max-w-sm text-[14.5px] leading-relaxed">
              An emerging global technology partner — software, AI, cloud, cybersecurity,
              staffing & digital transformation, delivered with enterprise rigor and startup pace.
            </p>
            
            <div className="mt-6 space-y-2.5 text-[14px]">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2.5 text-slate-100 hover:text-blue-400 transition-colors" data-testid="footer-email">
                <Mail className="h-4 w-4 text-blue-400" /> {COMPANY.email}
              </a>
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 text-slate-100 hover:text-blue-400 transition-colors" data-testid="footer-phone">
                <Phone className="h-4 w-4 text-blue-400" /> {COMPANY.phone}
              </a>
              <div className="flex items-start gap-2.5 text-slate-200">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" /> {COMPANY.hq}
              </div>
            </div>

            {/* Social Icons Section */}
            <div className="mt-8">
              <div className="text-[11px] uppercase tracking-[0.18em] text-blue-400 font-bold mb-4">
                Follow Us
              </div>
              <div className="flex flex-wrap gap-3">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${social.label}`}
                      title={social.label}
                      className="h-10 w-10 rounded-full border border-slate-700 bg-slate-900/50 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                    >
                      <Icon className="text-[1.1rem]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {SECTIONS.map((sec) => (
            <div key={sec.title}>
              <div className="text-[11px] uppercase tracking-[0.18em] text-blue-400 font-bold mb-4">
                {sec.title}
              </div>
              <ul className="space-y-2.5 text-[14px]">
                {sec.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-slate-200 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group">
                      <span className="h-px w-0 bg-blue-400 group-hover:w-3 transition-all duration-300" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Offices */}
        <div className="mt-14 pt-10 border-t border-slate-800/80">
          <div className="text-[11px] uppercase tracking-[0.18em] text-blue-400 font-bold mb-4">
            Global Offices
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {COMPANY.offices?.map((o) => (
              <div key={o.city} className="text-sm group cursor-default">
                <div className="text-white font-bold group-hover:text-blue-400 transition-colors">{o.city}</div>
                <div className="text-slate-300 text-[12px]">{o.country} · {o.tz}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-slate-300">
          <div>© {new Date().getFullYear()} People's Choice Tech. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

