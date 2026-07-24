import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import { CERTIFICATIONS, ACHIEVEMENTS } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";

const AchievementCounter = ({ item }) => {
  const numeric = parseFloat(item.value);
  const decimals = item.value.includes(".") ? item.value.split(".")[1].length : 0;
  const { ref, display } = useCountUp(numeric, decimals);
  return (
    <span ref={ref} className="font-mono-stat text-3xl md:text-4xl text-accentsky">
      {display}{item.suffix}
    </span>
  );
};

export const Certifications = () => (
  <section id="certifications" className="relative py-20 md:py-28 px-6 md:px-12" data-testid="certifications-section">
    <div className="max-w-[1400px] mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-5xl tracking-tight mb-14 flex items-center gap-3"
      >
        <Award className="text-accentblue" size={32} /> Certifications
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass glass-hover rounded-2xl p-6"
            data-testid={`certification-card-${i}`}
          >
            <p className="font-mono-stat text-xs text-white/40 mb-2">{cert.year}</p>
            <h3 className="font-heading text-lg text-white leading-snug">{cert.title}</h3>
            <p className="text-white/50 text-sm mt-2">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Achievements = () => (
  <section id="achievements" className="relative py-20 md:py-28 px-6 md:px-12" data-testid="achievements-section">
    <div className="max-w-[1400px] mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-5xl tracking-tight mb-14 flex items-center gap-3"
      >
        <Trophy className="text-accentblue" size={32} /> Achievements
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {ACHIEVEMENTS.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-hover rounded-2xl p-6 flex flex-col justify-between min-h-[150px]"
            data-testid={`achievement-card-${i}`}
          >
            <AchievementCounter item={item} />
            <div>
              <p className="text-white/60 text-sm mt-3 leading-snug">{item.label}</p>
              <p className="font-mono-stat text-[11px] text-white/35 mt-1">{item.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
