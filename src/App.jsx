import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Auth from './components/Auth';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Auth />
      <Blog />
      <Contact />
      <footer className="py-10 border-t border-slate-200 text-center text-slate-500 text-sm">© {new Date().getFullYear()} PastelPay — All rights reserved.</footer>
    </div>
  )
}

export default App
