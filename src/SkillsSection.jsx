/* ------------------------------------------------------------
 *  SkillsSection.jsx – Row‑wise skills with repeat animations
 * ---------------------------------------------------------- */

import { motion } from "framer-motion";

/* Icon inside a white circular frame */
function Icon({ src, label, contain = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}   /* re‑play every scroll */
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="h-20 w-20 rounded-full bg-white ring-2 ring-teal-400 overflow-hidden shadow-md hover:scale-110 transition-transform duration-300">
        <img
          src={src}
          alt={label}
          className={`h-full w-full ${contain ? "object-contain p-2" : "object-cover"}`}
        />
      </div>
      <span className="text-sm text-gray-200">{label}</span>
    </motion.div>
  );
}

export default function SkillsSection() {
  /* helper to wrap each category with motion */
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="skills"
      className="pt-24 relative isolate bg-[#0c0c0c] px-6 py-28 text-white md:px-20"
    >
      {/* Section banner */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="mx-auto max-w-7xl rounded-md bg-teal-400 py-4 text-center shadow-md"
      >
        <h2
          className="text-5xl font-bold uppercase tracking-wider text-white"
          style={{ fontFamily: "Gabriola, cursive" }}
        >
          Skills
        </h2>
      </motion.div>

      <div className="mx-auto mt-14 max-w-5xl space-y-12">
        {/* Programming Languages */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6"
        >
          <h3
            className="text-lg font-semibold text-yellow-300"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-10 pl-4">
            <Icon src="/images/skills/c.jpeg" label="C" />
            <Icon src="/images/skills/python.jpeg" label="Python" />
            <Icon src="/images/skills/java.jpeg" label="Java" />
            <Icon src="/images/skills/web.jpeg" label="Front‑end" contain />
          </div>
        </motion.div>

        {/* Tools & Frameworks */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6"
        >
          <h3
            className="text-lg font-semibold text-yellow-300"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Tools &amp; Frameworks
          </h3>
          <div className="flex flex-wrap gap-10 pl-4">
            <Icon src="/images/skills/git.jpeg" label="Git" />
            <Icon src="/images/skills/vscode.jpeg" label="VS Code" />
            <Icon src="/images/skills/angularjs.jpeg" label="AngularJS" />
          </div>
        </motion.div>

        {/* Databases */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6"
        >
          <h3
            className="text-lg font-semibold text-yellow-300"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Databases
          </h3>
          <div className="flex flex-wrap gap-10 pl-4">
            <Icon src="/images/skills/sql.jpeg" label="SQL" />
            <Icon src="/images/skills/oracle.jpg" label="Oracle" contain />
          </div>
        </motion.div>
      </div>

      {/* bottom border */}
      <div className="absolute inset-x-0 bottom-5 h-px bg-white/15" />
    </section>
  );
}
