import SectionHead from './ui/SectionHead'
import Reveal from './ui/Reveal'
import { processSteps } from '../data/content'

export default function Process() {
  return (
    <section id="process" className="bg-cream py-[70px] lg:py-[110px]">
      <div className="mx-auto max-w-[1220px] px-8 max-lg:px-5">
        <SectionHead
          tag="// How We Formulate"
          title="From soil sample to sown field, in four steps."
        />

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div className="absolute top-[23px] right-[6%] left-[6%] hidden h-0.5 bg-[repeating-linear-gradient(90deg,var(--color-line)_0_8px,transparent_8px_16px)] lg:block" />

          {processSteps.map((step) => (
            <Reveal key={step.step} className="relative px-0 lg:px-[18px]">
              <div className="relative z-1 mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-full border-2 border-green bg-white font-[family-name:var(--font-display)] text-base font-bold text-green-dark">
                {step.step}
              </div>
              <h4 className="mb-2 font-[family-name:var(--font-display)] text-[16.5px] font-semibold text-deep-teal">
                {step.title}
              </h4>
              <p className="text-sm text-charcoal-soft">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
