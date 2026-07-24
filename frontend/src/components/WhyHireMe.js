import { motion } from "framer-motion";
import { WHY_HIRE_ME } from "../data/content";

export const WhyHireMe = () => (
  <section id="why-hire-me" className="relative py-20 md:py-28 px-6 md:px-12" data-testid="why-hire-me-section">
    <div className="max-w-[1400px] mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-5xl tracking-tight mb-14"
      >
        Why Hire Me
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {WHY_HIRE_ME.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-7 hover:border-accentblue/40 border border-white/[0.08] transition-colors"
            data-testid={`why-hire-me-card-${i}`}
          >
            <span className="font-mono-stat text-xs text-accentblue/70">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="font-heading text-xl text-white mt-4 leading-snug">{card.title}</h3>
            <p className="text-white/55 text-sm mt-3 leading-relaxed">{card.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
