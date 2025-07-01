/* ------------------------------------------------------------
 *  Header.jsx – Fixed global nav bar
 * ---------------------------------------------------------- */

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-black/40 backdrop-blur px-8 py-4">
      {/* name / logo */}
      <a
        href="#home"
        className="text-sm font-medium uppercase tracking-widest text-cyan-300 hover:text-teal-300 transition"
      >
        Varun&nbsp;Raj&nbsp;Janga
      </a>

      {/* navigation */}
      <nav className="flex items-center gap-6 text-sm font-semibold uppercase tracking-wider">
        {[
            ["About", "#about"],
            ["Education", "#education"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
        ].map(([label, href]) => (
            <a
            key={label}
            href={href}
            className="text-white transition hover:text-teal-300"
            >
            {label}
            </a>
        ))}
        <span className="ml-4 select-none text-xl text-white">→</span>
      </nav>

    </header>
  );
}
