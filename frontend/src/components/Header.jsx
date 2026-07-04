import { useState } from "react";
import BrandMark from "./BrandMark";
import Button from "./ui/Button";
import { navLinks } from "../data/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-100 border-b border-line bg-cream/88 backdrop-blur-[10px]">
      <div className="relative mx-auto flex max-w-[1220px] items-center justify-between px-8 py-[18px] max-lg:px-5">
        <a href="#top" className="flex items-center gap-3">
          {/* <BrandMark /> */}
          <div className="flex flex-col leading-[1.05]">
            <span className="font-[family-name:var(--font-display)] text-[17px] font-bold tracking-tight text-charcoal">
              NutriExpert
            </span>
            <span className="text-[10px] tracking-[0.14em] text-charcoal-soft uppercase">Agro Pvt Ltd</span>
          </div>
        </a>

        <nav
          className={`items-center gap-9 max-lg:absolute max-lg:top-full max-lg:right-0 max-lg:left-0 max-lg:flex-col max-lg:border-b max-lg:border-line max-lg:bg-cream max-lg:px-5 max-lg:py-4 ${
            menuOpen ? "flex" : "hidden lg:flex"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="group relative py-1 text-[14.5px] font-medium text-charcoal-soft transition-colors hover:text-charcoal"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-green transition-all duration-250 group-hover:w-full" />
            </a>
          ))}
          <Button href="#contact" onClick={() => setMenuOpen(false)} className="w-full justify-center lg:hidden">
            Talk to an Agronomist
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#contact" className="hidden lg:inline-flex">
            Talk to an Agronomist
          </Button>

          <button
            type="button"
            className="cursor-pointer border-none bg-transparent lg:hidden"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6H21M3 12H21M3 18H21" stroke="#33342F" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
