import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      interest: form.get('interest'),
      message: form.get('message'),
    }

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thank you! We will get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Get in Touch</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            Tell us about your goals and we’ll tailor a solution that delivers impact.
          </p>
          <div className="mt-6 grid gap-2 text-slate-700 dark:text-slate-300">
            <div><strong>Address:</strong> 123 Impact Avenue, Accra</div>
            <div><strong>Phone:</strong> +233 55 000 0000</div>
            <div><strong>Email:</strong> hello@impact-avenue.com</div>
          </div>
          <div className="mt-6 rounded-2xl overflow-hidden">
            <iframe title="map" className="w-full h-64" src="https://maps.google.com/maps?q=Accra&t=&z=12&ie=UTF8&iwloc=&output=embed"></iframe>
          </div>
        </div>
        <form onSubmit={onSubmit} className="p-6 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-xl grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">Name</label>
              <input name="name" required className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900" />
            </div>
            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">Email</label>
              <input type="email" name="email" required className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">Phone</label>
              <input name="phone" className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900" />
            </div>
            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">Interest</label>
              <select name="interest" required className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900">
                <option>Training</option>
                <option>Consultancy</option>
                <option>Coaching</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-600 dark:text-slate-300">Message</label>
            <textarea name="message" rows="4" className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900" />
          </div>
          <button className="px-6 py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: 'var(--ia-blue)' }}>
            Send Enquiry
          </button>
          {status && <div className="text-sm text-slate-600 dark:text-slate-300">{status}</div>}
        </form>
      </div>
    </section>
  )
}
