export function NpkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="7" cy="8" r="3" fill="#4FAFDC" />
      <circle cx="16" cy="7" r="2.4" fill="#4FAFDC" />
      <circle cx="12" cy="15" r="3.4" fill="#4FAFDC" />
      <circle cx="18" cy="16" r="2" fill="#4FAFDC" />
    </svg>
  )
}

export function WsfIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3C12 3 6 10 6 14.5C6 17.5 8.7 20 12 20C15.3 20 18 17.5 18 14.5C18 10 12 3 12 3Z"
        fill="#1C6E82"
      />
    </svg>
  )
}

export function BioIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 18C4 18 5 8 12 6C19 8 20 18 20 18"
        stroke="#79B62C"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="6" r="2.4" fill="#79B62C" />
    </svg>
  )
}

export function MicroIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="5" width="6" height="6" rx="1.5" fill="#0F4C5C" />
      <rect x="13" y="5" width="6" height="6" rx="1.5" fill="#0F4C5C" opacity="0.6" />
      <rect x="5" y="13" width="6" height="6" rx="1.5" fill="#0F4C5C" opacity="0.6" />
      <rect x="13" y="13" width="6" height="6" rx="1.5" fill="#0F4C5C" />
    </svg>
  )
}

const icons = {
  npk: NpkIcon,
  wsf: WsfIcon,
  bio: BioIcon,
  micro: MicroIcon,
}

export function ProductIcon({ name }) {
  const Icon = icons[name]
  return Icon ? <Icon /> : null
}

export function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 10.5C21 16 12 22 12 22C12 22 3 16 3 10.5C3 5.8 7 2 12 2C17 2 21 5.8 21 10.5Z"
        stroke="#BFE6F5"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10.5" r="2.6" stroke="#BFE6F5" strokeWidth="1.6" />
    </svg>
  )
}

export function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6C4 5 5 4 6 4H8L10 9L7.5 10.5C8.5 13 10.5 15 13 16L14.5 13.5L19.5 15.5C19.9 15.6 20 16.3 20 17C20 19 19 20 18 20C11 20 4 13 4 6Z"
        stroke="#BFE6F5"
        strokeWidth="1.6"
      />
    </svg>
  )
}

export function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="#BFE6F5" strokeWidth="1.6" />
      <path d="M3 7L12 13L21 7" stroke="#BFE6F5" strokeWidth="1.6" />
    </svg>
  )
}

export function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke="#BFE6F5" strokeWidth="1.6" />
      <path d="M3 9H21" stroke="#BFE6F5" strokeWidth="1.6" />
    </svg>
  )
}

const contactIcons = {
  location: LocationIcon,
  phone: PhoneIcon,
  email: EmailIcon,
  calendar: CalendarIcon,
}

export function ContactIcon({ name }) {
  const Icon = contactIcons[name]
  return Icon ? <Icon /> : null
}
