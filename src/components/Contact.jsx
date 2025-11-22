import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading'); setError('');
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if(!res.ok) throw new Error(data.detail || 'Failed to send');
      setStatus('sent');
      setForm({ name: '', email: '', topic: '', message: '' });
    } catch (err){
      setStatus('error');
      setError(err.message);
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-3xl font-semibold text-slate-900">Contact us</h3>
          <p className="text-slate-600 mt-2">Have a question or want to say hello? We’d love to hear from you.</p>
          {status === 'sent' && <p className="mt-4 text-emerald-600">Thanks! Your message was sent.</p>}
        </div>
        <form onSubmit={onSubmit} className="p-6 rounded-2xl bg-white ring-1 ring-slate-200 space-y-4">
          <div>
            <label className="block text-sm text-slate-700 mb-1">Name</label>
            <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} required className="w-full rounded-xl border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
          </div>
          <div>
            <label className="block text-sm text-slate-700 mb-1">Email</label>
            <input type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} required className="w-full rounded-xl border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
          </div>
          <div>
            <label className="block text-sm text-slate-700 mb-1">Topic</label>
            <input value={form.topic} onChange={e=>setForm({...form, topic: e.target.value})} className="w-full rounded-xl border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
          </div>
          <div>
            <label className="block text-sm text-slate-700 mb-1">Message</label>
            <textarea rows={4} value={form.message} onChange={e=>setForm({...form, message: e.target.value})} required className="w-full rounded-xl border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
          </div>
          {status === 'error' && <p className="text-rose-600 text-sm">{error}</p>}
          <button disabled={status==='loading'} className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm disabled:opacity-60">{status==='loading'?'Sending…':'Send message'}</button>
        </form>
      </div>
    </section>
  );
}
