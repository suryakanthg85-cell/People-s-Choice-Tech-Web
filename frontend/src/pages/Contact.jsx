import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import GradientBlobs from "@/components/site/GradientBlobs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { COMPANY, SERVICES } from "@/lib/data";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TYPES = {
  contact: { title: "Contact us", subtitle: "Drop us a line. We read every message." },
  consultation: { title: "Book a consultation", subtitle: "30 minutes with one of our senior architects, on us." },
  proposal: { title: "Request a proposal", subtitle: "Tell us the scope. We'll return a detailed plan and estimate within 24 hours." },
  careers: { title: "Apply to People's Choice Tech", subtitle: "Share your story and we'll be in touch." },
};

export default function Contact() {
  const [sp] = useSearchParams();
  const type = TYPES[sp.get("type")] ? sp.get("type") : "contact";
  const meta = TYPES[type];
  const initialRole = sp.get("role") || "";

  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", subject: "",
    service: "", budget: "", message: "", role: initialRole, resume_url: "",
  });
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill name, email and message.");
      return;
    }
    setBusy(true);
    try {
      await axios.post(`${API}/submissions`, { ...form, type });
      toast.success("Thanks! We'll be in touch within 24 hours.");
      setSent(true);
    } catch (err) {
      toast.error("Submission failed. Please try again or email us directly.");
    } finally {
      setBusy(false);
    }
  };

  const headline = useMemo(() => meta.title, [meta]);

  return (
    <div>
      <section className="relative pt-20 pb-12 overflow-hidden">
        <GradientBlobs variant="page" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div className="text-[11px] uppercase tracking-[0.24em] text-blue-600 font-bold eyebrow-line">Contact</div>
            <h1 className="mt-5 text-4xl lg:text-5xl font-bold tracking-[-0.005em] leading-[1.05] text-slate-900">{headline}</h1>
            <p className="mt-5 text-slate-600 text-lg max-w-md">{meta.subtitle}</p>

            <div className="mt-10 space-y-4">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-slate-700 hover:text-slate-900" data-testid="contact-email-link">
                <span className="h-10 w-10 rounded-xl bg-slate-100 grid place-items-center"><Mail className="h-4 w-4" /></span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500 font-bold">Email</div>
                  <div className="font-semibold">{COMPANY.email}</div>
                </div>
              </a>
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-slate-700 hover:text-slate-900" data-testid="contact-phone-link">
                <span className="h-10 w-10 rounded-xl bg-slate-100 grid place-items-center"><Phone className="h-4 w-4" /></span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500 font-bold">Phone</div>
                  <div className="font-semibold">{COMPANY.phone}</div>
                </div>
              </a>
              <div className="flex items-start gap-3 text-slate-700">
                <span className="h-10 w-10 rounded-xl bg-slate-100 grid place-items-center mt-0.5"><MapPin className="h-4 w-4" /></span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500 font-bold">HQ</div>
                  <div className="font-semibold">{COMPANY.hq}</div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500 font-bold mb-3">Offices</div>
              <div className="flex flex-wrap gap-2">
                {COMPANY.offices.map((o) => (
                  <span key={o.city} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white border border-slate-200">{o.city}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {sent ? (
              <div className="bg-white border border-slate-200 rounded-3xl p-10 text-center" data-testid="form-success">
                <CheckCircle2 className="h-14 w-14 text-emerald-500 mx-auto" />
                <h2 className="mt-5 text-3xl font-bold tracking-[-0.005em] text-slate-900">Got it — thank you.</h2>
                <p className="mt-3 text-slate-600 max-w-md mx-auto">
                  We've received your message and will be in touch within 24 hours. Look out for an email from <b>{COMPANY.email}</b>.
                </p>
                <Button
                  className="mt-7 rounded-full h-11 px-6 bg-slate-900 hover:bg-slate-800 text-white"
                  onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", company: "", subject: "", service: "", budget: "", message: "", role: initialRole, resume_url: "" }); }}
                  data-testid="form-send-another"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-white border border-slate-200 rounded-3xl p-7 lg:p-10 space-y-5" data-testid="contact-form">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name">Your name *</Label>
                    <Input id="name" required value={form.name} onChange={onChange("name")} className="mt-1.5 h-11 rounded-xl" placeholder="Jane Doe" data-testid="contact-form-name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Work email *</Label>
                    <Input id="email" type="email" required value={form.email} onChange={onChange("email")} className="mt-1.5 h-11 rounded-xl" placeholder="jane@company.com" data-testid="contact-form-email" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={form.phone} onChange={onChange("phone")} className="mt-1.5 h-11 rounded-xl" placeholder="+1 555 000 0000" data-testid="contact-form-phone" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" value={form.company} onChange={onChange("company")} className="mt-1.5 h-11 rounded-xl" placeholder="Company Inc." data-testid="contact-form-company" />
                  </div>
                </div>

                {type === "careers" ? (
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="role">Role applying for</Label>
                      <Input id="role" value={form.role} onChange={onChange("role")} className="mt-1.5 h-11 rounded-xl" placeholder="e.g. Senior Engineer" data-testid="contact-form-role" />
                    </div>
                    <div>
                      <Label htmlFor="resume_url">Resume / LinkedIn URL</Label>
                      <Input id="resume_url" value={form.resume_url} onChange={onChange("resume_url")} className="mt-1.5 h-11 rounded-xl" placeholder="https://linkedin.com/in/…" data-testid="contact-form-resume" />
                    </div>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="service">Service of interest</Label>
                      <Select value={form.service} onValueChange={(v) => setForm((f) => ({ ...f, service: v }))}>
                        <SelectTrigger className="mt-1.5 h-11 rounded-xl" data-testid="contact-form-service">
                          <SelectValue placeholder="Pick a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICES.map((s) => (
                            <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>
                          ))}
                          <SelectItem value="Other">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget range</Label>
                      <Select value={form.budget} onValueChange={(v) => setForm((f) => ({ ...f, budget: v }))}>
                        <SelectTrigger className="mt-1.5 h-11 rounded-xl" data-testid="contact-form-budget">
                          <SelectValue placeholder="Select a range" />
                        </SelectTrigger>
                        <SelectContent>
                          {["< $10k", "$10k – $50k", "$50k – $150k", "$150k – $500k", "$500k+"].map((b) => (
                            <SelectItem key={b} value={b}>{b}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" value={form.subject} onChange={onChange("subject")} className="mt-1.5 h-11 rounded-xl" placeholder="What's this about?" data-testid="contact-form-subject" />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" required rows={6} value={form.message} onChange={onChange("message")} className="mt-1.5 rounded-xl" placeholder="Tell us about your project, team, timeline or what you'd like to discuss…" data-testid="contact-form-message" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="text-[12.5px] text-slate-500">By submitting, you agree to our privacy policy. We never share your data.</div>
                  <Button
                    type="submit"
                    disabled={busy}
                    className="h-12 rounded-full px-7 bg-slate-900 hover:bg-slate-800 text-white font-semibold"
                    data-testid="contact-form-submit"
                  >
                    {busy ? "Sending…" : "Send message"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
