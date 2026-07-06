import { useState } from 'react'
import SectionHead from './ui/SectionHead'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { ContactIcon } from './icons/Icons'
import { contactInfo } from '../data/content'

export default function Contact() {
  const [formNote, setFormNote] = useState('We typically respond within one business day.')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      crop: form.crop.value,
      landSize: form.landSize.value,
      message: form.message.value,
    }

    setSubmitting(true)
    setFormNote('Sending your enquiry…')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || 'Something went wrong.')
      }

      form.reset()
      setFormNote(
        data.email?.trim()
          ? 'Thank you! We received your enquiry and sent a confirmation to your email. We will get back to you within 24 hours.'
          : 'Thank you! We received your enquiry and will get back to you within 24 hours.'
      )
    } catch (err) {
      setFormNote(err.message || 'Failed to send. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-deep-teal py-[70px] text-white lg:py-[110px]">
      <div className="mx-auto max-w-[1220px] px-8 max-lg:px-5">
        <SectionHead
          tag="// Get In Touch"
          title="Talk to our agronomy team."
          description="Have a soil report, or want to find your nearest dealer? Send us a note and we'll get back within one business day."
          light
        />

        <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid content-start gap-5">
            {contactInfo.map((item) => (
              <Reveal key={item.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-white/16 bg-white/8">
                  <ContactIcon name={item.icon} />
                </div>
                <div>
                  <h5 className="mb-0.5 font-[family-name:var(--font-display)] text-[14.5px] font-semibold">
                    {item.title}
                  </h5>
                  <p className="text-sm text-white/70">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="grid gap-4 rounded-[18px] border border-white/14 bg-white/6 p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label
                    htmlFor="fname"
                    className="font-[family-name:var(--font-mono)] text-[12.5px] tracking-[0.06em] text-white/65 uppercase"
                  >
                    Name
                  </label>
                  <input
                    id="fname"
                    name="name"
                    type="text"
                    required
                    disabled={submitting}
                    placeholder="Your full name"
                    className="rounded-[9px] border border-white/20 bg-white/8 px-3.5 py-3 text-[14.5px] text-white placeholder:text-white/40 focus:border-green focus:bg-white/12 focus:outline-none disabled:opacity-60"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label
                    htmlFor="fphone"
                    className="font-[family-name:var(--font-mono)] text-[12.5px] tracking-[0.06em] text-white/65 uppercase"
                  >
                    Phone
                  </label>
                  <input
                    id="fphone"
                    name="phone"
                    type="tel"
                    disabled={submitting}
                    placeholder="10-digit mobile"
                    className="rounded-[9px] border border-white/20 bg-white/8 px-3.5 py-3 text-[14.5px] text-white placeholder:text-white/40 focus:border-green focus:bg-white/12 focus:outline-none disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <label
                  htmlFor="femail"
                  className="font-[family-name:var(--font-mono)] text-[12.5px] tracking-[0.06em] text-white/65 uppercase"
                >
                  Email
                </label>
                <input
                  id="femail"
                  name="email"
                  type="email"
                  required
                  disabled={submitting}
                  placeholder="you@example.com"
                  className="rounded-[9px] border border-white/20 bg-white/8 px-3.5 py-3 text-[14.5px] text-white placeholder:text-white/40 focus:border-green focus:bg-white/12 focus:outline-none disabled:opacity-60"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label
                    htmlFor="fcrop"
                    className="font-[family-name:var(--font-mono)] text-[12.5px] tracking-[0.06em] text-white/65 uppercase"
                  >
                    Crop
                  </label>
                  <input
                    id="fcrop"
                    name="crop"
                    type="text"
                    disabled={submitting}
                    placeholder="e.g. Sugarcane, Cotton"
                    className="rounded-[9px] border border-white/20 bg-white/8 px-3.5 py-3 text-[14.5px] text-white placeholder:text-white/40 focus:border-green focus:bg-white/12 focus:outline-none disabled:opacity-60"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label
                    htmlFor="fland"
                    className="font-[family-name:var(--font-mono)] text-[12.5px] tracking-[0.06em] text-white/65 uppercase"
                  >
                    Land Size (acres)
                  </label>
                  <input
                    id="fland"
                    name="landSize"
                    type="text"
                    disabled={submitting}
                    placeholder="e.g. 5"
                    className="rounded-[9px] border border-white/20 bg-white/8 px-3.5 py-3 text-[14.5px] text-white placeholder:text-white/40 focus:border-green focus:bg-white/12 focus:outline-none disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <label
                  htmlFor="fmsg"
                  className="font-[family-name:var(--font-mono)] text-[12.5px] tracking-[0.06em] text-white/65 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="fmsg"
                  name="message"
                  rows={3}
                  disabled={submitting}
                  placeholder="Tell us about your soil / requirement"
                  className="resize-none rounded-[9px] border border-white/20 bg-white/8 px-3.5 py-3 text-[14.5px] text-white placeholder:text-white/40 focus:border-green focus:bg-white/12 focus:outline-none disabled:opacity-60"
                />
              </div>

              <Button
                type="submit"
                variant="white"
                className="mt-1.5 justify-self-start"
                disabled={submitting}
              >
                {submitting ? 'Sending…' : 'Send Enquiry'}
              </Button>
              <p className="text-xs text-white/50">{formNote}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
