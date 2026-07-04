import Button from './ui/Button'
import SoilScene from './SoilScene'
import { heroNotes } from '../data/content'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-deep-teal via-[#145A6D] to-teal text-white"
    >
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-10 px-8 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-[88px] max-lg:px-5">
        <div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-[family-name:var(--font-mono)] text-xs tracking-[0.08em] text-sky-light uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-green shadow-[0_0_0_4px_rgba(121,182,44,0.25)]" />
            Soil-first fertilizer science
          </span>

          <h1 className="max-w-[640px] font-[family-name:var(--font-display)] text-[clamp(34px,4.6vw,56px)] leading-[1.06] font-bold tracking-tight">
            Precision nutrition for{' '}
            <em className="relative text-green not-italic">every acre</em> you farm.
          </h1>

          <p className="mt-5 max-w-[480px] text-[17.5px] text-white/82">
            NutriExpert Agro formulates NPK, water-soluble and bio-based fertilizers matched to
            Maharashtra&apos;s soil types — so every input you buy does real work in the field.
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button href="#products" variant="white" className="!text-deep-teal">
              Explore Products
            </Button>
            <Button href="#contact" variant="outlineLight">
              Request a Soil Consult
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap gap-6">
            {heroNotes.map((note) => (
              <div key={note.title} className="text-[13px] text-white/65">
                <strong className="block font-[family-name:var(--font-display)] text-[15px] font-semibold text-white">
                  {note.title}
                </strong>
                {note.text}
              </div>
            ))}
          </div>
        </div>

        <SoilScene />
      </div>

      <svg
        className="mt-[60px] block w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 40 C 240 90, 480 0, 720 30 C 960 60, 1200 10, 1440 40 L1440 80 L0 80 Z"
          fill="#FAFAF6"
        />
      </svg>
    </section>
  )
}
