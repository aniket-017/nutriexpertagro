import { useReveal } from '../../hooks/useReveal'

export default function Reveal({ children, className = '' }) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal translate-y-6 opacity-0 transition-all duration-700 ease-out ${
        visible ? 'is-visible translate-y-0 opacity-100' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
