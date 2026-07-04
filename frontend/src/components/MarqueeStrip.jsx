import { stripItems } from '../data/content'

export default function MarqueeStrip() {
  const items = [...stripItems, ...stripItems]

  return (
    <div className="overflow-hidden border-b border-line bg-paper py-3.5 whitespace-nowrap">
      <div className="strip-track inline-flex gap-14">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-[12.5px] tracking-[0.06em] text-charcoal-soft uppercase before:text-[8px] before:text-green before:content-['●']"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
