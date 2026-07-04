import Reveal from './Reveal'

export default function SectionHead({ tag, title, description, light = false, className = '' }) {
  return (
    <Reveal className={`mb-[60px] max-w-[640px] ${className}`}>
      <span
        className={`mb-3.5 block font-[family-name:var(--font-mono)] text-[12.5px] font-medium tracking-[0.1em] uppercase ${
          light ? 'text-sky-light' : 'text-green-dark'
        }`}
      >
        {tag}
      </span>
      <h2
        className={`text-[clamp(28px,3.4vw,42px)] leading-[1.15] font-bold tracking-tight ${
          light ? 'text-white' : 'text-deep-teal'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-[560px] text-[16.5px] ${
            light ? 'text-white/70' : 'text-charcoal-soft'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
