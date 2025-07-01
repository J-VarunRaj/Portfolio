/* ------------------------------------------------------------
 *  PortfolioHome.jsx — Black‑Ash Hero with Shine & Fixed Header
 * ---------------------------------------------------------- */

import React from "react";

export default function PortfolioHome() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen w-full overflow-hidden text-white pt-24"
    >
      {/* ─── Fixed header ─── */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-black/40 backdrop-blur px-8 py-4 animate-fade-slide-down">
        {/* name / logo */}
        <a
          href="#home"
          className="text-sm font-medium uppercase tracking-widest text-cyan-300 hover:text-teal-300 transition"
        >
          Varun&nbsp;Raj&nbsp;Janga
        </a>

        {/* navigation */}
        <nav className="flex items-center gap-6 text-sm font-semibold uppercase tracking-wider text-white">
          {[
            ["About", "#about"],
            ["Education", "#education"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="hover:text-teal-300 transition">
              {label}
            </a>
          ))}
          <span className="ml-4 select-none text-xl">→</span>
        </nav>
      </header>

      {/* Layer 1 — ash‑black gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-black via-[#0b0b0b] to-black" />

      {/* Layer 2 — faint radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(35,35,35,0.45)_0%,transparent_70%)]" />

      {/* Layer 3 — subtle grain */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2250%22 height=%2250%22 viewBox=%220 0 50 50%22%3E%3Ccircle cx=%222.5%22 cy=%222.5%22 r=%221%22 fill=%22%23ffffff%22/%3E%3C/svg%3E')",
        }}
      />

      {/* ═════ Centered “Portfolio” ═════ */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1
          className="select-none text-center uppercase leading-none tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 animate-shine drop-shadow-lg text-[10rem] sm:text-[11rem] md:text-[15rem] lg:text-[18rem]"
          style={{ fontFamily: "Gabriola, cursive", fontWeight: 400 }}
        >
          Portfolio
        </h1>
      </div>

      {/* Bottom‑left phone */}
      <div className="absolute bottom-8 left-8 text-sm tracking-wider">
        +91&nbsp;7093456290
      </div>

      {/* Bottom‑right email */}
      <div className="absolute bottom-8 right-8 text-sm tracking-wider">
        vinnu70934@gmail.com
      </div>

      {/* Bottom border */}
      <div className="absolute inset-x-0 bottom-2 h-px bg-white/20" />

      {/* ✨ Shine keyframes */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-shine {
          background-size: 400% 100%;
          animation: shine 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
