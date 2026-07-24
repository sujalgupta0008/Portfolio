import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "../data/content";

const TimelineRail = ({ progressRef }) => {
  const { scrollYProgress } = useScroll({ target: progressRef, offset: ["start 80%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="absolute left-[9px] md:left-[13px] top-2 bottom-2 w-px bg-white/10">
      <motion.div style={{ scaleY, originY: 0 }} className="w-full h-full bg-gradient-to-b from-accentblue via-accentcyan to-accentsky" />
    </div>
  );
};

export const Education = () => {
  const ref = useRef(null);
  return (
    <section id="education" className="relative py-20 md:py-28 px-6 md:px-12" data-testid="education-section">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl tracking-tight mb-14 flex items-center gap-3"
        >
          <GraduationCap className="text-accentblue" size={32} /> Education
        </motion.h2>

        <div ref={ref} className="relative pl-8 md:pl-10 space-y-10">
          <TimelineRail progressRef={ref} />
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative glass glass-hover rounded-2xl p-6 md:p-8"
              data-testid={`education-card-${edu.id}`}
            >
              <span className="absolute -left-[38px] md:-left-[46px] top-8 w-3 h-3 rounded-full bg-accentsky shadow-[0_0_16px_rgba(56,189,248,0.7)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading text-xl md:text-2xl text-white">{edu.institution}</h3>
                <span className="font-mono-stat text-xs text-white/45">{edu.period}</span>
              </div>
              <p className="text-accentcyan text-sm md:text-base mt-1">{edu.program}</p>
              <p className="text-white/55 text-sm md:text-base mt-3 leading-relaxed">{edu.detail}</p>
              {edu.highlight && (
                <span className="inline-block mt-4 font-mono-stat text-xs px-3 py-1 rounded-full border border-accentblue/40 text-accentsky">
                  {edu.highlight}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Experience = () => {
  const ref = useRef(null);
  return (
    <section id="experience" className="relative py-20 md:py-28 px-6 md:px-12" data-testid="experience-section">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl tracking-tight mb-14 flex items-center gap-3"
        >
          <Briefcase className="text-accentblue" size={32} /> Experience
        </motion.h2>

        <div ref={ref} className="relative pl-8 md:pl-10 space-y-10">
          <TimelineRail progressRef={ref} />
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 md:p-8 glass glass-hover ${exp.featured ? "ring-1 ring-accentblue/30" : ""}`}
              data-testid={`experience-card-${exp.id}`}
            >
              <span className="absolute -left-[38px] md:-left-[46px] top-8 w-3 h-3 rounded-full bg-accentblue shadow-[0_0_16px_rgba(59,130,246,0.7)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading text-xl md:text-2xl text-white">{exp.company}</h3>
                <span className="font-mono-stat text-xs text-white/45">{exp.period}</span>
              </div>
              <p className="text-accentcyan text-sm md:text-base mt-1">{exp.role}</p>
              <ul className="mt-4 space-y-2">
                {exp.points.map((p, idx) => (
                  <li key={idx} className="text-white/55 text-sm md:text-base leading-relaxed flex gap-2">
                    <span className="text-accentblue mt-2 w-1 h-1 rounded-full bg-accentblue flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
