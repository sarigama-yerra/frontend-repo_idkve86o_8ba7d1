import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28">
      <div className="relative h-[520px] sm:h-[560px] lg:h-[640px]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white pointer-events-none" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 ring-1 ring-slate-200 text-slate-700 text-sm mb-4">
                New • Minimal fintech theme
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight">
                The softest way to launch your SaaS
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-slate-600">
                Pastel visuals, clean typography, and everything you need to sell — pricing, auth, blog, and a working contact form.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#pricing" className="px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">View pricing</a>
                <a href="#auth" className="px-5 py-3 rounded-xl bg-white text-slate-900 ring-1 ring-slate-200 text-sm font-medium hover:bg-slate-50">Create account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
