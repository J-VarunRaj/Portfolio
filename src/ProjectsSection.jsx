/* ------------------------------------------------------------
 *  ProjectsSection.jsx — Text‑only project cards with animations
 * ---------------------------------------------------------- */

import { motion } from "framer-motion";

function ProjectCard({ title, desc, github, demo, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }} // re‑animate every entry
      transition={{ duration: 0.45, delay: index * 0.15 }}
      className="flex flex-col gap-4 rounded-lg bg-[#111] p-6 ring-1 ring-white/10 shadow-md"
    >
      <h4 className="text-xl font-semibold text-teal-300">{title}</h4>
      <p className="flex-1 text-sm leading-relaxed text-gray-300">{desc}</p>

      <div className="mt-2 flex gap-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-gray-800 px-4 py-1 text-xs transition hover:bg-gray-700"
          >
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-teal-500 px-4 py-1 text-xs text-black transition hover:bg-teal-400"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "This very site – React + Tailwind, fully responsive & dark‑mode ready.",
      github: "https://github.com/J-VarunRaj/portfolio",
      demo: "",
    },
    {
      title: "OHO Application",
      desc: "Video streaming app enabling users to browse and watch uploaded videos.",
      github: "https://github.com/J-VarunRaj/oho-app",
      demo: "",
    },
    {
      title: "Automatic Seed‑Sowing Robot",
      desc: "Arduino‑based rover that plants seeds at uniform depth & spacing.",
      github: "https://github.com/J-VarunRaj/seed-sowing-robot",
      demo: "",
    },
  ];

  /* simple banner motion variant */
  const banner = {
    hidden: { opacity: 0, y: -40 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      className="pt-24 relative isolate bg-[#0c0c0c] px-6 py-28 text-white md:px-20"
    >
      {/* Banner */}
      <motion.div
        variants={banner}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="mx-auto max-w-7xl rounded-md bg-teal-400 py-4 text-center shadow-md"
      >
        <h2
          className="text-5xl font-bold uppercase tracking-wider text-white"
          style={{ fontFamily: "Gabriola, cursive" }}
        >
          Projects
        </h2>
      </motion.div>

      {/* Card grid */}
      <div className="mx-auto mt-14 grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} index={i} />
        ))}
      </div>

      {/* bottom border */}
      <div className="absolute inset-x-0 bottom-5 h-px bg-white/15" />
    </section>
  );
}
