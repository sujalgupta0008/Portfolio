import { motion } from "framer-motion";
import { ABOUT } from "../data/content";

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

export const About = () => (
  <section id="about" className="relative py-24 md:py-36 px-6 md:px-12" data-testid="about-section">
    <div className="max-w-[1400px] mx-auto">
      <motion.p {...reveal} className="font-mono-stat text-xs text-accentcyan tracking-widest uppercase mb-6">
        {ABOUT.kicker}
      </motion.p>

      <div className="grid lg:grid-cols-12 gap-12">
        <motion.blockquote
          {...reveal}
          className="lg:col-span-7 font-heading text-3xl md:text-5xl leading-[1.1] tracking-tight text-white"
          data-testid="about-pull-quote"
        >
          "{ABOUT.quote}"
        </motion.blockquote>

        <div className="lg:col-span-5 flex flex-col gap-5">
          {ABOUT.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.1 }}
              className="text-base md:text-lg text-white/60 leading-relaxed"
              data-testid={`about-paragraph-${i}`}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  </section>
);
