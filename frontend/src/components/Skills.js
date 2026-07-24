import { motion } from "framer-motion";
import { SKILLS } from "../data/content";

export const Skills = () => (
  <section id="skills" className="relative py-20 md:py-28 px-6 md:px-12" data-testid="skills-section">
    <div className="max-w-[1400px] mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-5xl tracking-tight mb-4"
      >
        Skills Wall
      </motion.h2>
      <p className="text-white/50 mb-14 max-w-xl">The tools I actually reach for — grouped, not graded.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {SKILLS.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: gi * 0.08 }}
            className="glass rounded-2xl p-5"
            data-testid={`skills-group-${gi}`}
          >
            <h3 className="font-heading text-sm text-accentsky uppercase tracking-wide mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  data-testid={`skill-chip-${item.replace(/[\s()/.]/g, "-").toLowerCase()}`}
                  className="text-sm px-3 py-1.5 rounded-full border border-white/10 text-white/70 hover:border-accentblue/60 hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
