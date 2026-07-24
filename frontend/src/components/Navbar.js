import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "../data/content";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 200);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      data-testid="navbar"
    >
      <div
        className={`w-full max-w-6xl flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-transparent border border-transparent"
        }`}
      >
        <button data-testid="nav-logo" onClick={() => scrollTo("hero")} className="font-heading text-lg tracking-tighter">
          SG<span className="text-accentblue">.</span>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              data-testid={`nav-link-${link.id}`}
              onClick={() => scrollTo(link.id)}
              className={`text-sm transition-colors relative ${
                active === link.id ? "text-white" : "text-white/55 hover:text-white"
              }`}
            >
              {link.label}
              {active === link.id && (
                <motion.span layoutId="nav-active" className="absolute -bottom-1.5 left-0 right-0 h-px bg-accentsky" />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a data-testid="nav-github-icon" href={SOCIALS.github} target="_blank" rel="noreferrer" className="text-white/60 hover:text-accentsky transition-colors">
            <Github size={18} />
          </a>
          <a data-testid="nav-linkedin-icon" href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="text-white/60 hover:text-accentsky transition-colors">
            <Linkedin size={18} />
          </a>
        </div>

        <button data-testid="mobile-menu-toggle" className="lg:hidden text-white" onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 glass rounded-2xl p-6 flex flex-col gap-4 lg:hidden"
            data-testid="mobile-menu"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                data-testid={`mobile-nav-link-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className="text-left text-white/80 hover:text-white text-base"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
