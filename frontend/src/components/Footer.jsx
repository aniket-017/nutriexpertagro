import BrandMark from './BrandMark'
import { navLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-[#0B3A46] py-11 text-white/75">
      <div className="mx-auto max-w-[1220px] px-8 max-lg:px-5">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            {/* <BrandMark className="h-[26px] w-7" /> */}
            <div className="flex flex-col leading-[1.05]">
              <span className="font-[family-name:var(--font-display)] text-[17px] font-bold text-white">
                NutriExpert
              </span>
              <span className="text-[10px] tracking-[0.14em] text-white/50 uppercase">
                Agro Pvt Ltd
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13.5px] text-white/65 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap justify-between gap-2.5 border-t border-white/10 pt-5 text-[12.5px] text-white/45">
          <span>© 2026 NutriExpert Agro Pvt Ltd. All rights reserved.</span>
          <span>Formulated for Maharashtra soils.</span>
        </div>
      </div>
    </footer>
  )
}
