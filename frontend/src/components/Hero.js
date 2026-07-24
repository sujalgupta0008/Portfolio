import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowLeft, Download, Mail, Github, Linkedin } from "lucide-react";
import { ROLES, HERO_STATS, SOCIALS } from "../data/content";
import { ParticlesField } from "./ParticlesField";
import { useCountUp } from "../hooks/useCountUp";
import { resumeDownloadUrl } from "../lib/api";

const HERO_IMAGE = "https://customer-assets-jt897jd0.emergentagent.net/job_sujal-minimal/artifacts/ubqs9490_1.png";

const ORBIT_BADGES = [
  { id: "data-analyst", label: "Data Analyst", angle: 0, duration: 24 },
  { id: "power-bi-developer", label: "Power BI Developer", angle: 120, duration: 28 },
  { id: "business-analyst", label: "Business Analyst", angle: 240, duration: 32 },
];

const nameLine = (text, delay) => (
  <span className="block overflow-hidden">
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </motion.span>
  </span>
);

const StatCard = ({ stat, className, delay }) => {
  const { ref, display } = useCountUp(stat.value, stat.decimals || 0);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`glass glass-hover rounded-2xl px-4 py-3 transition-colors duration-300 ${className}`}
      data-testid={`hero-stat-${stat.label.replace(/\s/g, "-").toLowerCase()}`}
    >
      <div className="font-mono-stat text-xl md:text-2xl text-accentsky">
        {display}{stat.suffix}
      </div>
      <div className="text-[11px] uppercase tracking-wide text-white/50 mt-0.5">{stat.label}</div>
    </motion.div>
  );
};

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { damping: 20, stiffness: 80 });
  const springY = useSpring(my, { damping: 20, stiffness: 80 });

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(id);
  }, []);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px * 24);
    my.set(py * 24);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.14),_transparent_55%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-10 items-center relative z-10">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono-stat text-xs text-accentcyan tracking-widest uppercase mb-4"
            data-testid="hero-kicker"
          >
            Data Analyst · BI · AI Enthusiast
          </motion.p>

          <h1 className="font-heading font-medium text-5xl md:text-7xl lg:text-[5.6vw] leading-[0.95] tracking-tighter text-white">
            {nameLine("Sujal", 0.3)}
            {nameLine("Gupta.", 0.42)}
          </h1>

          <div className="h-10 mt-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={ROLES[roleIndex]}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="text-lg md:text-xl text-white/70 font-heading"
                data-testid="hero-rotating-role"
              >
                {ROLES[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-xl"
          >
            I turn messy, real-world data into decisions people actually trust — across BI dashboards,
            machine learning pipelines and GenAI-powered analytics tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={resumeDownloadUrl}
              data-testid="hero-resume-download-btn"
              className="group inline-flex items-center gap-2 rounded-full bg-accentblue px-6 py-3 text-sm font-medium text-white hover:bg-accentblue/90 transition-colors"
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="hero-contact-cta-btn"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:border-accentsky/60 hover:text-accentsky transition-colors"
            >
              <Mail size={16} />
              Let's Talk
            </button>
            <div className="flex items-center gap-3 ml-1">
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" data-testid="hero-github-icon" className="text-white/50 hover:text-accentsky transition-colors">
                <Github size={19} />
              </a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" data-testid="hero-linkedin-icon" className="text-white/50 hover:text-accentsky transition-colors">
                <Linkedin size={19} />
              </a>
            </div>
          </motion.div>

          <div className="mt-14 grid grid-cols-3 sm:grid-cols-5 gap-3 max-w-2xl">
            {HERO_STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} delay={0.9 + i * 0.08} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <motion.div
            style={{ x: springX, y: springY }}
            className="hero-photo-frame relative w-[280px] md:w-[360px] aspect-[3/4]"
          >
            <div className="absolute -inset-10 bg-accentblue/25 blur-[90px] rounded-full" />
            <div className="absolute inset-0">
              <ParticlesField />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden glass"
              data-testid="hero-portrait-frame"
            >
              <img src={HERO_IMAGE} alt="Sujal Gupta" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="orbit-hero absolute inset-0 hidden md:block"
              data-testid="hero-orbit-system"
            >
              {ORBIT_BADGES.map((badge) => (
                <div
                  key={badge.id}
                  className="orbit-arm absolute inset-0"
                  style={{ "--start": `${badge.angle}deg`, animationDuration: `${badge.duration}s` }}
                >
                  <div className="orbit-radius absolute top-1/2 left-1/2 flex items-center gap-1.5">
                    <ArrowLeft size={13} className="orbit-arrow-icon text-accentsky flex-shrink-0" />
                    <div
                      className="orbit-counter"
                      style={{ "--start": `${badge.angle}deg`, animationDuration: `${badge.duration}s` }}
                    >
                      <span
                        className="orbit-float glass rounded-full px-3 py-1.5 text-[11px] font-mono-stat text-white/85 whitespace-nowrap block"
                        data-testid={`orbit-badge-${badge.id}`}
                      >
                        {badge.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex md:hidden flex-wrap gap-2 mt-6 justify-center" data-testid="hero-orbit-mobile-stack">
            {ORBIT_BADGES.map((badge) => (
              <span
                key={badge.id}
                data-testid={`orbit-badge-mobile-${badge.id}`}
                className="glass rounded-full px-3 py-1.5 text-[11px] font-mono-stat text-white/80 flex items-center gap-1.5"
              >
                <ArrowLeft size={12} className="text-accentsky" /> {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[11px] uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
};
