
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Button } from './components/ui/Button';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupShownOnce, setPopupShownOnce] = useState(false);
  const [popupEmail, setPopupEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      if (!popupShownOnce && scrollable > 0 && scrolled / scrollable >= 0.5) {
        setShowPopup(true);
        setPopupShownOnce(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [popupShownOnce]);

  const handlePopupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email captured:', popupEmail);
    setShowPopup(false);
  };
  
  return (
    <div className="min-h-screen bg-background text-content font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      
      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-6 rounded-2xl shadow-btn transition-all duration-300 hover:-translate-y-1"
        aria-label="Submit My Case"
      >
        Submit Case
      </button>
      
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-6 transition-all">
          <div className="bg-card rounded-3xl shadow-2xl max-w-md w-full p-8 border border-slate-100/50">
            <h4 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Free Recovery Guide</h4>
            <p className="text-slate-500 mb-8 text-sm leading-relaxed">Get our priority PDF checklist emailed to you. Improve your chances of recovering your disabled account.</p>
            <form onSubmit={handlePopupSubmit} className="space-y-4">
              <input
                type="email"
                value={popupEmail}
                onChange={(e) => setPopupEmail(e.target.value)}
                required
                placeholder="Enter your email address"
                className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
              />
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button type="submit" className="w-full h-12 px-0 text-sm">
                  Get Free Guide
                </Button>
                <Button type="button" variant="secondary" className="w-full h-12 px-0 text-sm" onClick={() => setShowPopup(false)}>
                  No thanks
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
