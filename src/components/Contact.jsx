import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contact-section' })
      })
      const data = await res.json()
      if (data.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-black text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Let’s talk</h2>
        <p className="mt-2 text-zinc-300">Available for internship — contact me for collaborations.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="rounded-lg border border-white/10 bg-zinc-900/40 p-6 space-y-4">
            <Input label="Name" value={form.name} onChange={v => setForm({ ...form, name: v })} />
            <Input label="Email" type="email" value={form.email} onChange={v => setForm({ ...form, email: v })} />
            <TextArea label="Message" value={form.message} onChange={v => setForm({ ...form, message: v })} />
            <button disabled={status==='sending'} className="w-full px-4 py-3 rounded bg-emerald-400 text-black font-semibold hover:translate-y-[-1px] transition-transform disabled:opacity-50">
              {status==='sending' ? 'Sending…' : 'Send message'}
            </button>
            {status==='success' && <p className="text-emerald-300 text-sm">Thanks! I will get back to you soon.</p>}
            {status==='error' && <p className="text-red-300 text-sm">Something went wrong. Try again later.</p>}
          </form>

          <div className="text-sm text-zinc-300">
            <p>Email: <a className="underline" href="mailto:hello@example.com">hello@example.com</a></p>
            <div className="mt-4 flex gap-3">
              {[
                { label: 'LinkedIn', href: '#' },
                { label: 'Behance', href: '#' },
                { label: 'Dribbble', href: '#' },
                { label: 'Instagram', href: '#' },
              ].map(s => (
                <a key={s.label} className="px-3 py-1 rounded border border-white/15 hover:border-white/40" href={s.href} target="_blank">{s.label}</a>
              ))}
            </div>
            <pre className="mt-8 font-mono text-emerald-300 text-xs">{`/* Keep it simple, make it playful */`}</pre>
          </div>
        </div>
      </div>
    </section>
  )
}

function Input({ label, value, onChange, type='text' }) {
  return (
    <label className="block text-sm">
      <span className="text-zinc-300">{label}</span>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} required className="mt-1 w-full bg-black/40 border border-white/10 rounded px-3 py-2 outline-none focus:border-emerald-400/60" />
    </label>
  )
}

function TextArea({ label, value, onChange }) {
  return (
    <label className="block text-sm">
      <span className="text-zinc-300">{label}</span>
      <textarea value={value} onChange={e => onChange(e.target.value)} rows={6} required className="mt-1 w-full bg-black/40 border border-white/10 rounded px-3 py-2 outline-none focus:border-emerald-400/60" />
    </label>
  )
}
