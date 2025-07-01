/* ------------------------------------------------------------
 *  EducationSection.jsx – SR University (2022‑2026)
 *  Animated entry every scroll
 * ---------------------------------------------------------- */

import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="pt-24 relative isolate bg-[#0c0c0c] px-6 py-28 text-white md:px-20"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      {/* Banner (slides down) */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl rounded-md bg-teal-400 py-4 text-center shadow-md"
      >
        <h2
          className="text-5xl font-bold uppercase tracking-wider text-white"
          style={{ fontFamily: "Gabriola, cursive" }}
        >
          Education
        </h2>
      </motion.div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mt-10 max-w-5xl space-y-8"
        style={{ fontFamily: "Merriweather, serif" }}
      >
        <h3
          className="text-center text-4xl font-semibold leading-relaxed text-yellow-300"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          SR University&nbsp;
          <span className="text-gray-200">(2022‑2026)</span>
        </h3>

        <motion.ul
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="list-disc space-y-2 pl-6 text-xl leading-relaxed"
        >
          <li>Bachelor of Technology in Computer Science &amp; Engineering</li>
          <li>CGPA: 9.2 / 10</li>
          <li>
            <span className="font-semibold">Coursework:</span>
            <ul className="list-inside list-[circle] pl-4 space-y-1 text-lg">
              <li>Data Structures &amp; Algorithms</li>
              <li>Operating System</li>
              <li>Database Management Systems</li>
              <li>Computer Networks</li>
              <li>Artificial Intelligence &amp; Machine Learning</li>
            </ul>
          </li>
        </motion.ul>
      </motion.div>

      {/* Divider */}
      <div className="absolute inset-x-0 bottom-5 h-px bg-white/15" />
    </section>
  );
}
