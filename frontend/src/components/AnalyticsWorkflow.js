import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WORKFLOW_STEPS } from "../data/content";

export const AnalyticsWorkflow = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);

  return (
    <section id="workflow" className="relative py-24 md:py-32" data-testid="analytics-workflow-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-stat text-xs text-accentcyan tracking-widest uppercase mb-4"
        >
          04 — How I Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl tracking-tight"
        >
          The Analytics Workflow
        </motion.h2>
      </div>

      <div ref={ref} className="overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 px-6 md:px-12 w-max">
          {WORKFLOW_STEPS.map((step, i) => (
            <div
              key={step.title}
              data-testid={`workflow-step-${i}`}
              className="glass glass-hover rounded-2xl p-6 w-[260px] md:w-[300px] flex-shrink-0"
            >
              <span className="font-mono-stat text-3xl text-accentblue/60">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-heading text-lg text-white mt-4">{step.title}</h3>
              <p className="text-white/50 text-sm mt-2 leading-relaxed">{step.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
