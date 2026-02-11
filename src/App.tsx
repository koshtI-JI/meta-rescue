
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import VerifiedAccess from './components/VerifiedAccess';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Testimonials />
      <VerifiedAccess />
      <About />
      <Services />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <Footer />
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        aria-label="Submit My Case"
      >
        Submit My Case
      </a>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 border border-slate-200">
            <h4 className="text-2xl font-bold text-slate-900 mb-2">Free Instagram Recovery Guide</h4>
            <p className="text-slate-600 mb-6">Get quick tips PDF emailed to you. Improve your chances now.</p>
            <form onSubmit={handlePopupSubmit} className="space-y-4">
              <input
                type="email"
                value={popupEmail}
                onChange={(e) => setPopupEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
              <div className="flex gap-3">
                <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all">
                  Get Free Guide
                </button>
                <button type="button" className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 rounded-lg transition-all" onClick={() => setShowPopup(false)}>
                  No thanks
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
