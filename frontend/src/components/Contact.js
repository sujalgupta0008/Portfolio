import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { submitContact } from "../lib/api";
import { SOCIALS } from "../data/content";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      await submitContact(form);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12" data-testid="contact-section">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono-stat text-xs text-accentcyan tracking-widest uppercase mb-4"
          >
            05 — Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl tracking-tight leading-tight"
          >
            Let's Build Something Meaningful Together
          </motion.h2>
          <p className="text-white/55 mt-6 leading-relaxed max-w-md">
            Open to internships, full-time analytics roles and freelance data work. If you have a role or a
            problem worth solving with data — I'd love to hear about it.
          </p>

          <div className="mt-10 space-y-4">
            <a href={`mailto:${SOCIALS.email}`} data-testid="contact-email-link" className="flex items-center gap-3 text-white/70 hover:text-accentsky transition-colors">
              <Mail size={18} /> {SOCIALS.email}
            </a>
            <div className="flex items-center gap-3 text-white/50">
              <MapPin size={18} /> Open to relocation / remote
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-10 space-y-5" data-testid="contact-form">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-white/45 uppercase tracking-wide">Name</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  data-testid="contact-name-input"
                  className="mt-2 w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accentsky/60 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-white/45 uppercase tracking-wide">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  data-testid="contact-email-input"
                  className="mt-2 w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accentsky/60 transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-white/45 uppercase tracking-wide">Subject</label>
              <input
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                data-testid="contact-subject-input"
                className="mt-2 w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accentsky/60 transition-colors"
                placeholder="Internship opportunity / role"
              />
            </div>
            <div>
              <label className="text-xs text-white/45 uppercase tracking-wide">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                data-testid="contact-message-input"
                className="mt-2 w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accentsky/60 transition-colors resize-none"
                placeholder="Tell me a bit about the role or project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              data-testid="contact-submit-btn"
              className="inline-flex items-center gap-2 rounded-full bg-accentblue px-7 py-3.5 text-sm font-medium hover:bg-accentblue/90 transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              <Send size={15} />
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 text-sm"
                  data-testid="contact-success-message"
                >
                  <CheckCircle2 size={16} /> Message sent — I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm" data-testid="contact-error-message">
                  {errorMsg}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
};
