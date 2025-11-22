export default function Features(){
  const features = [
    { title: "Simple billing", desc: "Transparent plans that scale with you.", color: "from-rose-200 to-rose-100" },
    { title: "Secure auth", desc: "Email-based sign up and login.", color: "from-sky-200 to-sky-100" },
    { title: "Built-in blog", desc: "Share updates with a minimal CMS.", color: "from-violet-200 to-violet-100" },
    { title: "Contact forms", desc: "Capture leads directly to your inbox.", color: "from-emerald-200 to-emerald-100" },
  ];
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-5 rounded-2xl bg-white ring-1 ring-slate-200/70">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-b ${f.color} mb-3`} />
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
