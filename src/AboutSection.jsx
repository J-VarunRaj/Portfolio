/* ------------------------------------------------------------
 *  AboutSection.jsx – Two‑column bio with repeat animations
 * ---------------------------------------------------------- */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ----- tiny typewriter hook ----- */
function useTypewriter(words, speed = 110, delay = 1800) {
  const [txt, setTxt] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [fwd, setFwd] = useState(true);

  useEffect(() => {
    const w = words[i];
    const t = setTimeout(() => {
      if (fwd) {
        if (j < w.length) {
          setJ(j + 1);
          setTxt(w.slice(0, j + 1));
        } else {
          setFwd(false);
          setTimeout(() => {}, delay);
        }
      } else {
        if (j > 0) {
          setJ(j - 1);
          setTxt(w.slice(0, j - 1));
        } else {
          setFwd(true);
          setI((i + 1) % words.length);
        }
      }
    }, fwd ? speed : speed / 2);
    return () => clearTimeout(t);
  }, [txt, fwd, j, i, words, speed, delay]);

  return txt;
}

export default function AboutSection() {
  const role = useTypewriter(
    ["Full‑Stack Development", "AI & ML"],
    110,
    1800
  );

  return (
    <section
      id="about"
      className="pt-24 relative isolate bg-[#0c0c0c] px-6 py-28 text-white md:px-20"
    >
      <div className="flex w-full flex-col-reverse items-center justify-between gap-12 md:flex-row md:gap-24">
        {/* ----- Text column ----- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-left"
        >
          <p className="font-medium uppercase tracking-widest">Hello!</p>

          <h2 className="mt-1 text-5xl font-extrabold leading-tight">
            I'm <span className="text-teal-400">Varun&nbsp;Raj&nbsp;Janga</span>
          </h2>

          <p className="mt-1 text-lg font-mono">
            I'm good at <span className="text-teal-400">{role}</span>
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-gray-300">
            A curious engineer with an eye for design and a mind for
            problem‑solving. I believe software shines when&nbsp;
            <span className="text-teal-400">usability</span> meets&nbsp;
            <span className="text-teal-400">performance</span>. I love turning
            complex challenges into polished products.
          </p>

          {/* social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {[
              ["LinkedIn", "https://www.linkedin.com/in/varun-raj-janga-31v84/"],
              ["GitHub", "https://github.com/J-VarunRaj"],
              ["LeetCode", "https://leetcode.com/u/FM8yPaD9l7/"],
              ["Resume", "/resume.pdf"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full ${
                  label === "Resume"
                    ? "bg-teal-500 px-6 py-2 text-sm font-semibold text-black hover:bg-teal-400 transition"
                    : "border border-teal-400 px-6 py-2 text-sm font-semibold hover:bg-teal-500/10 transition"
                }`}
              >
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ----- Portrait ----- */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-72 w-72">
            <img
              src="/images/portrait.png"
              alt="Varun Raj"
              className="h-full w-full rounded-full object-cover shadow-2xl"
            />
            <span className="pointer-events-none absolute inset-0 rounded-full ring-4 ring-teal-500 animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* divider line */}
      <div className="absolute inset-x-0 bottom-5 h-px bg-white/15" />
    </section>
  );
}
