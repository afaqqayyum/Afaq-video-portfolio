
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0b0b10]/95 backdrop-blur-xl border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex flex-col leading-tight">
          <span className="text-2xl font-extrabold tracking-tight">
            AFAQ<span className="text-purple-400">.</span>
          </span>
          <span className="text-[9px] tracking-[0.22em] text-gray-400 uppercase mt-1">
            Video Editor • Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden text-white p-2"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-[#111118] border-t border-white/10 px-6 py-5">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-purple-400 transition-colors text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
