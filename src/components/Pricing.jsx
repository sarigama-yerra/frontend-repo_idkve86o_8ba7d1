export default function Pricing(){
  const plans = [
    { name: 'Starter', price: '$9', period: 'mo', desc: 'For personal projects', features: ['1 project', 'Basic analytics', 'Email support'], color: 'from-sky-200 to-sky-100' },
    { name: 'Growth', price: '$29', period: 'mo', desc: 'For small teams', features: ['5 projects', 'Advanced analytics', 'Priority support'], color: 'from-rose-200 to-rose-100', popular: true },
    { name: 'Scale', price: '$79', period: 'mo', desc: 'For businesses', features: ['Unlimited projects', 'SLA & SSO', 'Dedicated support'], color: 'from-emerald-200 to-emerald-100' },
  ];
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Pricing that scales with you</h2>
          <p className="text-slate-600 mt-2">Start free, upgrade when you grow.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`p-6 rounded-2xl bg-white ring-1 ring-slate-200 ${p.popular ? 'shadow-lg' : ''}`}>
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-b ${p.color} mb-4`} />
              <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
              <p className="text-slate-600 text-sm">{p.desc}</p>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold text-slate-900">{p.price}</span>
                <span className="text-slate-500">/{p.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.features.map(f => (<li key={f}>• {f}</li>))}
              </ul>
              <a href="#auth" className="mt-6 inline-block px-4 py-2 rounded-xl bg-slate-900 text-white text-sm">Choose {p.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
