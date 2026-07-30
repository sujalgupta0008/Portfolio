import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS, SOCIALS } from "../data/content";

const ProjectSlide = ({ project, index }) => {
  const reversed = index % 2 === 1;

  return (
    <div
      id={`project-${project.id}`}
      data-testid={`project-slide-${project.id}`}
      className="min-h-[92vh] flex items-center py-24 border-b border-white/5"
    >
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className={`group relative lg:col-span-7 ${
            reversed ? "lg:order-2" : ""
          }`}
        >
          {/* Animated Glow */}
          <div className="absolute -inset-3 rounded-[30px] bg-gradient-to-r from-cyan-500/30 via-sky-500/20 to-blue-500/30 blur-2xl opacity-40 transition duration-700 group-hover:opacity-100 group-hover:blur-3xl" />

          {/* Card */}
          <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[#05070b] shadow-[0_20px_80px_rgba(0,0,0,.45)]">

            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                aspect-[16/10]
                object-contain
                bg-[#05070b]
                transition-all
                duration-700
                brightness-110
                contrast-110
                saturate-125
                group-hover:brightness-125
                group-hover:contrast-125
                group-hover:saturate-150
                group-hover:scale-[1.03]
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Glass Reflection */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />

            {/* Border */}
            <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-cyan-300/20 group-hover:ring-cyan-300/60 transition duration-500" />

            {/* Bottom Glow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-400/30 blur-[90px] opacity-0 group-hover:opacity-100 transition duration-700" />

            {/* Project Index */}
            <div className="absolute top-6 left-6 z-20">
              <span className="font-mono-stat text-6xl text-white/15">
                {project.index}
              </span>
            </div>
          </div>
        </motion.div>
        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: reversed ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className={`lg:col-span-5 ${
            reversed ? "lg:order-1" : ""
          }`}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono-stat uppercase tracking-[0.25em] text-xs text-cyan-400 mb-3"
          >
            Featured Case Study
          </motion.p>

          <h3 className="font-heading text-4xl md:text-5xl leading-tight tracking-tight text-white">
            {project.title}
          </h3>

          <p className="mt-3 text-cyan-300 text-base md:text-lg">
            {project.subtitle}
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <h4 className="text-white text-sm uppercase tracking-wider mb-2 font-semibold">
                Business Problem
              </h4>

              <p className="text-white/65 leading-8">
                {project.business}
              </p>
            </div>

            <div>
              <h4 className="text-white text-sm uppercase tracking-wider mb-2 font-semibold">
                Solution
              </h4>

              <p className="text-white/65 leading-8">
                {project.approach}
              </p>
            </div>
          </div>

          {/* STACK */}

          <div className="mt-8 flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-white/[0.04]
                  backdrop-blur-md
                  px-4
                  py-2
                  text-sm
                  text-white/80
                  transition
                  duration-300
                  hover:border-cyan-400/70
                  hover:bg-cyan-400/10
                  hover:text-cyan-300
                "
              >
                {tech}
              </span>
            ))}
          </div>

         {/* RESULT */}

<div className="mt-8 relative group">

  {/* Glow */}
  <div
    className="
      absolute
      -inset-2
      rounded-3xl
      bg-gradient-to-r
      from-cyan-500/25
      via-emerald-400/20
      to-green-500/25
      blur-2xl
      opacity-40
      transition-all
      duration-700
      group-hover:opacity-100
      group-hover:blur-3xl
    "
  />

  <div
    className="
      relative
      rounded-2xl
      border
      border-cyan-400/15
      bg-gradient-to-br
      from-white/[0.05]
      to-white/[0.02]
      backdrop-blur-xl
      p-6
      transition-all
      duration-500
      group-hover:border-cyan-400/60
    "
  >
    <p className="uppercase tracking-[0.25em] text-xs text-cyan-300 mb-3">
      Result
    </p>

    <p className="text-white/80 leading-8">
      {project.result}
    </p>

    {/* Inner Border */}
    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-cyan-300/20 group-hover:ring-cyan-300/60 transition duration-500" />

    {/* Bottom Glow */}
    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-cyan-400/30 blur-[70px] opacity-0 group-hover:opacity-100 transition duration-700" />
  </div>

</div>

          {/* BUTTONS */}

          <div className="mt-10 flex flex-wrap gap-4">

            <motion.a
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.96 }}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-testid={`project-github-btn-${project.id}`}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-6
                py-3
                text-white
                transition
                hover:border-cyan-400
                hover:text-cyan-300
              "
            >
              <Github size={17} />
              GitHub
            </motion.a>

            {project.live && (
              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.96 }}
                href={project.live}
                target="_blank"
                rel="noreferrer"
                data-testid={`project-live-btn-${project.id}`}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  via-sky-500
                  to-blue-600
                  px-6
                  py-3
                  font-medium
                  text-white
                  shadow-lg
                  shadow-cyan-500/20
                  transition
                  hover:shadow-cyan-400/50
                "
              >
                Live Demo
                <ArrowUpRight size={17} />
              </motion.a>
            )}

          </div>

        </motion.div>

      </div>
    </div>
  );
};

export const Projects = () => (
  <section
    id="projects"
    className="relative overflow-hidden"
    data-testid="projects-section"
  >
    {/* Background Glow */}
    <div className="pointer-events-none absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

    {/* Heading */}
    <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 pt-28 md:pt-36">

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="font-mono-stat text-cyan-400 uppercase tracking-[0.35em] text-xs mb-5"
      >
        03 — Selected Work
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className="
          font-heading
          text-4xl
          md:text-6xl
          lg:text-7xl
          leading-none
          tracking-tight
          text-white
        "
      >
        Featured
        <br />

        <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
          Projects
        </span>

      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .3 }}
        className="mt-8 max-w-2xl text-lg text-white/55 leading-8"
      >
        A collection of end-to-end analytics, business intelligence,
        machine learning and AI solutions focused on solving real-world
        business problems with measurable impact.
      </motion.p>

    </div>

    {/* PROJECTS */}

    {PROJECTS.map((project, index) => (
      <ProjectSlide
        key={project.id}
        project={project}
        index={index}
      />
    ))}

    {/* CTA */}

    <div
      className="
        relative
        min-h-[60vh]
        flex
        items-center
        justify-center
        px-6
        text-center
      "
      data-testid="projects-more-cta"
    >

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-cyan-400/20
          bg-white/[0.03]
          backdrop-blur-xl
          px-12
          py-14
          max-w-3xl
          w-full
        "
      >

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />

        <p className="relative font-mono-stat uppercase tracking-[0.3em] text-cyan-300 text-xs">
          Explore More
        </p>

        <h3
          className="
            relative
            mt-5
            text-4xl
            md:text-6xl
            font-heading
            leading-tight
            tracking-tight
            text-white
          "
        >
          More Projects
          <br />
          on GitHub
        </h3>

        <p className="relative mt-6 text-white/60 leading-8 max-w-xl mx-auto">
          Explore additional analytics dashboards, machine learning
          projects, Power BI solutions, and AI applications available on
          my GitHub profile.
        </p>

        <motion.a
          whileHover={{
            scale: 1.05,
            y: -4,
          }}
          whileTap={{
            scale: .96,
          }}
          href={SOCIALS.github}
          target="_blank"
          rel="noreferrer"
          data-testid="projects-github-profile-btn"
          className="
            relative
            mt-10
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            via-sky-500
            to-blue-600
            px-8
            py-4
            text-white
            font-medium
            shadow-lg
            shadow-cyan-500/25
            transition
            hover:shadow-cyan-400/60
          "
        >
          Explore GitHub

          <ArrowUpRight size={18} />
        </motion.a>

      </motion.div>

    </div>

  </section>
);

