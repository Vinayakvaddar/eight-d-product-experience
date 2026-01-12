import { useState } from "react"

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: API integration or email service
    setSubmitted(true)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>
          Have any questions or want to work together? Send us a message.
        </p>

        {!submitted ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>
          </form>
        ) : (
          <p className="thank-you">Thank you — we’ll get back to you soon!</p>
        )}
      </div>
    </section>
  )
}

export default ContactSection
