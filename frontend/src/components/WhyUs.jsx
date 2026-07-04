import SectionHead from './ui/SectionHead'
import Reveal from './ui/Reveal'
import { soilLayers, features } from '../data/content'

export default function WhyUs() {
  return (
    <section id="why" className="bg-paper py-[70px] lg:py-[110px]">
      <div className="mx-auto max-w-[1220px] px-8 max-lg:px-5">
        <div className="grid grid-cols-1 items-center gap-[70px] lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[20px] bg-gradient-to-br from-deep-teal to-teal p-9">
            <div>
              <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.08em] text-white/60 uppercase">
                Soil Composition We Formulate For
              </span>
              <div className="mt-4.5">
                {soilLayers.map((row) => (
                  <div
                    key={row.layer}
                    className="flex items-center justify-between border-b border-white/15 py-3.5 font-[family-name:var(--font-display)] text-[14.5px] text-white last:border-b-0"
                  >
                    <span>{row.label}</span>
                    <span className="font-[family-name:var(--font-mono)] text-[13px] text-sky-light">
                      {row.layer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="max-w-[340px] text-[13px] text-white/65">
              Maharashtra&apos;s soil varies block to block. Our formulations start from a soil
              test, not a shelf template.
            </p>
          </Reveal>

          <div>
            <SectionHead
              tag="// Why NutriExpert"
              title="Built on what's under the crop, not just what's on the label."
              className="!mb-[34px]"
            />
            <div className="grid gap-6">
              {features.map((feature) => (
                <Reveal key={feature.num} className="flex gap-4.5">
                  <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-green font-[family-name:var(--font-display)] text-[15px] font-bold text-green-dark">
                    {feature.num}
                  </div>
                  <div>
                    <h4 className="mb-1.5 font-[family-name:var(--font-display)] text-[17px] font-semibold text-charcoal">
                      {feature.title}
                    </h4>
                    <p className="text-[14.5px] text-charcoal-soft">{feature.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
