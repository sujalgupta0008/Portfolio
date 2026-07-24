import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS, SOCIALS } from "../data/content";

const ProjectSlide = ({ project, index }) => {
  const reversed = index % 2 === 1;
  return (
    <div
      className="min-h-[92vh] flex items-center py-20 border-b border-white/5"
      id={`project-${project.id}`}
      data-testid={`project-slide-${project.id}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className={`relative lg:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden ${reversed ? "lg:order-2" : ""}`}
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
          <span className="absolute top-5 left-5 font-mono-stat text-5xl text-white/20">{project.index}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}
        >
          <h3 className="font-heading text-3xl md:text-4xl tracking-tight text-white">{project.title}</h3>
          <p className="text-accentcyan mt-1 text-sm md:text-base">{project.subtitle}</p>

          <p className="text-white/55 mt-5 leading-relaxed text-sm md:text-base">{project.business}</p>
          <p className="text-white/55 mt-3 leading-relaxed text-sm md:text-base">{project.approach}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span key={t} className="font-mono-stat text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/60">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 glass rounded-xl p-4">
            <p className="text-xs uppercase tracking-wide text-white/40 mb-1">Result</p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">{project.result}</p>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-testid={`project-github-btn-${project.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm hover:border-accentsky/60 hover:text-accentsky transition-colors"
            >
              <Github size={15} /> GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                data-testid={`project-live-btn-${project.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-accentblue px-5 py-2.5 text-sm hover:bg-accentblue/90 transition-colors"
              >
                Live Demo <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const Projects = () => (
  <section id="projects" className="relative" data-testid="projects-section">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 md:pt-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono-stat text-xs text-accentcyan tracking-widest uppercase mb-4"
      >
        03 — Selected Work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight mb-10"
      >
        Featured Projects
      </motion.h2>
    </div>

    {PROJECTS.map((project, i) => (
      <ProjectSlide key={project.id} project={project} index={i} />
    ))}

    <div className="min-h-[60vh] flex items-center justify-center text-center px-6" data-testid="projects-more-cta">
      <div>
        <p className="font-mono-stat text-white/30 text-sm mb-3">07</p>
        <h3 className="font-heading text-3xl md:text-5xl tracking-tight mb-6">And more on GitHub.</h3>
        <a
          href={SOCIALS.github}
          target="_blank"
          rel="noreferrer"
          data-testid="projects-github-profile-btn"
          className="inline-flex items-center gap-2 rounded-full bg-accentblue px-6 py-3 text-sm font-medium hover:bg-accentblue/90 transition-colors"
        >
          Explore the full profile <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  </section>
);
