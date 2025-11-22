import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Auth(){
  const [mode, setMode] = useState('login');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const res = await fetch(`${API_BASE}/api/auth/${mode === 'login' ? 'login' : 'register'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mode === 'login' ? { email: form.email, password: form.password } : form)
      });
      const data = await res.json();
      if(!res.ok) throw new Error(data.detail || 'Request failed');
      setUser(data);
    } catch (err){
      setError(err.message);
    } finally { setLoading(false); }
  }

  return (
    <section id="auth" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-semibold text-slate-900">Sign in or create an account</h3>
          <p className="text-slate-600 mt-2">A minimal email + password flow for quick demos.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white ring-1 ring-slate-200">
          {user ? (
            <div>
              <p className="text-slate-700">Welcome back, <span className="font-medium">{user.name || user.email}</span>!</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              {mode === 'register' && (
                <div>
                  <label className="block text-sm text-slate-700 mb-1">Name</label>
                  <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} required className="w-full rounded-xl border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
                </div>
              )}
              <div>
                <label className="block text-sm text-slate-700 mb-1">Email</label>
                <input type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} required className="w-full rounded-xl border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Password</label>
                <input type="password" value={form.password} onChange={e=>setForm({...form, password: e.target.value})} required className="w-full rounded-xl border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
              </div>
              {error && <p className="text-rose-600 text-sm">{error}</p>}
              <div className="flex items-center justify-between">
                <button disabled={loading} className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm disabled:opacity-60">{loading ? 'Please wait…' : (mode === 'login' ? 'Sign in' : 'Create account')}</button>
                <button type="button" onClick={()=>setMode(mode==='login'?'register':'login')} className="text-slate-700 text-sm underline">
                  {mode === 'login' ? 'Need an account?' : 'Have an account?'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
