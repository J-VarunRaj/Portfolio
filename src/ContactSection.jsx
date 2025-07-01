/* ------------------------------------------------------------
 *  ContactSection.jsx – Animated WhatsApp & Mail Links
 * ---------------------------------------------------------- */

import { motion } from "framer-motion";

const PHONE_NUMBER   = "917093456290";                    // no + sign
const WHATSAPP_LINK  = `https://wa.me/${PHONE_NUMBER}`;
const EMAIL_ADDRESS  = "vinnu70934@gmail.com";
const GMAIL_COMPOSE  = `https://mail.google.com/mail/?view=cm&to=${EMAIL_ADDRESS}`;

export default function ContactSection() {
  /* simple fade-slide variant for reuse */
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <section
      id="contact"
      className="pt-24 relative isolate bg-[#0c0c0c] px-6 py-28 text-white md:px-20"
    >
      {/* banner – slides down */}
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
          Contact
        </h2>
      </motion.div>

      {/* cards grid */}
      <div className="mx-auto mt-16 grid max-w-xl gap-12 sm:grid-cols-2">
        {/* WhatsApp card */}
        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-4 hover:text-teal-300"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 shadow-md">
            {/* phone icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 5.6A3.6 3.6 0 015.6 2h1.8A3.6 3.6 0 0111 5.6v1.5a3.6 3.6 0 01-.76 2.2l-1.3 1.6a15.9 15.9 0 006.59 6.59l1.6-1.3a3.6 3.6 0 012.2-.76h1.5A3.6 3.6 0 0122 18.4v1.8A3.6 3.6 0 0118.4 24 18.39 18.39 0 012 5.6z" />
            </svg>
          </div>
          <p className="text-lg font-light">WhatsApp</p>
        </motion.a>

        {/* Email card */}
        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.15 }}                     /* small stagger */
          href={GMAIL_COMPOSE}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-4 hover:text-teal-300"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 shadow-md">
            {/* email icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
            </svg>
          </div>
          <p className="text-lg font-light">Send Email</p>
        </motion.a>
      </div>

      {/* divider */}
      <div className="absolute inset-x-0 bottom-5 h-px bg-white/15" />
    </section>
  );
}
