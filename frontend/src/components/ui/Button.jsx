const variants = {
  primary:
    'bg-deep-teal text-white border-transparent hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-10px_rgba(15,76,92,0.55)]',
  ghost:
    'border-line text-charcoal bg-transparent hover:border-teal hover:text-teal',
  white:
    'bg-white text-green-dark border-transparent hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.25)]',
  outlineLight:
    'border-white/40 text-white bg-transparent hover:border-white hover:bg-white/10',
}

export default function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  type = 'button',
  ...props
}) {
  const classes = `inline-flex cursor-pointer items-center gap-2 rounded-lg border-[1.5px] px-[22px] py-3 font-[family-name:var(--font-display)] text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
