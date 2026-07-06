require('dotenv').config()

const express = require('express')
const path = require('path')
const fs = require('fs')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 3054
const distPath = path.join(__dirname, '../frontend/dist')

app.use(express.json())

const smtpPort = Number(process.env.SMTP_PORT) || 587
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.plan2automate.com',
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: process.env.SMTP_USER || 'aniket@nutriexpertagro.com',
    pass: process.env.SMTP_PASSWORD,
  },
})

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildAutoReply(name) {
  const greeting = name?.trim() ? `Dear ${name.trim()},` : 'Dear Customer,'

  const text = `${greeting}

Thank you for contacting NutriExpert Agro Pvt Ltd.

We have received your enquiry and our agronomy team will review it shortly. We will get back to you within 24 hours.

If your matter is urgent, please call or WhatsApp us directly.

Warm regards,
NutriExpert Agro Pvt Ltd
Ahilyanagar, Maharashtra, India
info@nutriexpertagro.com`

  const html = `
    <p>${escapeHtml(greeting)}</p>
    <p>Thank you for contacting <strong>NutriExpert Agro Pvt Ltd</strong>.</p>
    <p>We have received your enquiry and our agronomy team will review it shortly. <strong>We will get back to you within 24 hours.</strong></p>
    <p>If your matter is urgent, please call or WhatsApp us directly.</p>
    <p>Warm regards,<br>
    <strong>NutriExpert Agro Pvt Ltd</strong><br>
    Ahilyanagar, Maharashtra, India<br>
    <a href="mailto:info@nutriexpertagro.com">info@nutriexpertagro.com</a></p>
  `

  return { text, html }
}

app.post('/api/contact', async (req, res) => {
  const { name, phone, email, crop, landSize, message } = req.body || {}

  if (!name?.trim()) {
    return res.status(400).json({ error: 'Name is required.' })
  }

  if (!email?.trim()) {
    return res.status(400).json({ error: 'Email is required.' })
  }

  if (!process.env.SMTP_PASSWORD) {
    console.error('SMTP_PASSWORD is not configured')
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  const recipient = process.env.CONTACT_EMAIL || 'aniket@nutriexpertagro.com'
  const sender = process.env.SMTP_USER || 'aniket@nutriexpertagro.com'
  const replyTo = email?.trim() || undefined

  const fields = [
    ['Name', name],
    ['Phone', phone],
    ['Email', email],
    ['Crop', crop],
    ['Land Size (acres)', landSize],
    ['Message', message],
  ].filter(([, value]) => value?.trim())

  const textBody = fields.map(([label, value]) => `${label}: ${value.trim()}`).join('\n')
  const htmlBody = fields
    .map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value.trim())}</p>`)
    .join('')

  try {
    await transporter.sendMail({
      from: `"NutriExpert Agro Website" <${sender}>`,
      to: recipient,
      replyTo,
      subject: `New enquiry from ${name.trim()}`,
      text: textBody,
      html: htmlBody,
    })

    if (replyTo) {
      const autoReply = buildAutoReply(name)
      await transporter.sendMail({
        from: `"NutriExpert Agro Pvt Ltd" <${sender}>`,
        to: replyTo,
        subject: 'We received your enquiry — NutriExpert Agro',
        text: autoReply.text,
        html: autoReply.html,
      })
    }

    return res.json({ success: true })
  } catch (err) {
    console.error('Failed to send enquiry email:', err)
    return res.status(500).json({ error: 'Failed to send your enquiry. Please try again later.' })
  }
})

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath))

  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
} else {
  console.warn(`Frontend build not found at ${distPath}. API only — run "npm run build" in frontend for production.`)
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
