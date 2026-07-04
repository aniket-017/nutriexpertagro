import Button from './ui/Button'
import Reveal from './ui/Reveal'

export default function Banner() {
  return (
    <section className="pb-[70px] lg:pb-[110px]">
      <Reveal className="mx-auto grid max-w-[1156px] grid-cols-1 items-center gap-10 rounded-3xl bg-gradient-to-br from-green-dark via-green to-[#8fc93f] px-6 py-9 text-white sm:px-12 sm:py-14 lg:grid-cols-[1.3fr_1fr] lg:px-12">
        <div>
          <h3 className="max-w-[460px] font-[family-name:var(--font-display)] text-[clamp(24px,2.6vw,32px)] leading-tight font-bold tracking-tight">
            Not sure which blend fits your field?
          </h3>
          <p className="mt-3.5 max-w-[440px] text-[15px] text-white/90">
            Share your crop, land size and last soil test — our agronomy team will recommend a
            starting formulation, free of cost.
          </p>
          <div className="mt-6 flex flex-wrap gap-3.5">
            <Button href="#contact" variant="white">
              Get a Free Recommendation
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/25 bg-white/12 p-6">
          <p className="text-[15px] leading-relaxed text-white">
            &ldquo;We switched to a soil-matched NPK blend last season and stopped guessing on
            dosage. Simple change, clear difference.&rdquo;
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-[38px] w-[38px] shrink-0 rounded-full bg-white/30" />
            <div>
              <div className="font-[family-name:var(--font-display)] text-[13.5px] font-semibold">
                Placeholder Farmer Name
              </div>
              <div className="text-xs text-white/75">Ahmednagar district, Maharashtra</div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
