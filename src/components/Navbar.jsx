import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 z-50 w-full bg-white/90 backdrop-blur",
        shadow ? "shadow-sm" : "shadow-none",
      ].join(" ")}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#home" className="text-lg font-semibold text-gray-900">
          Hredoy<span className="text-indigo-600">.</span>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 md:hidden"
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-gray-700 hover:text-indigo-600"
              >
                {l.label}
              </a>
            </li>
          ))}
          <a
            href="#contact"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Contact
          </a>
        </ul>
      </nav>

      {open && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3">
            {links.map((l) => (
              <li key={l.href} className="py-2">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-gray-700 hover:text-indigo-600"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
