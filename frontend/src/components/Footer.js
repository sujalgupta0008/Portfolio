import { Github, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "../data/content";

export const Footer = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="relative border-t border-white/10 py-14 px-6 md:px-12" data-testid="footer">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <p className="font-heading text-2xl tracking-tighter">
            SG<span className="text-accentblue">.</span>
          </p>
          <p className="text-white/45 text-sm mt-3 max-w-sm">
            Turning messy data into decisions people trust — one dashboard, one model, one insight at a time.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" data-testid="footer-github-icon" className="text-white/50 hover:text-accentsky transition-colors">
              <Github size={18} />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" data-testid="footer-linkedin-icon" className="text-white/50 hover:text-accentsky transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${SOCIALS.email}`} data-testid="footer-email-icon" className="text-white/50 hover:text-accentsky transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              data-testid={`footer-nav-link-${link.id}`}
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="max-w-[1400px] mx-auto mt-10 pt-6 border-t border-white/5 text-xs text-white/30">
        © {new Date().getFullYear()} Sujal Gupta. Built with obsessive attention to detail.
      </div>
    </footer>
  );
};
