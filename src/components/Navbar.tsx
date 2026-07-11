import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

const MetaLogo = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 36 36" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.7,14c-1.8,0-3.4,0.7-4.7,1.9c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2-0.2-0.4-0.4-0.6-0.6C18.6,14.7,17,14,15.2,14 c-4.2,0-7.6,3.4-7.6,7.6c0,4.2,3.4,7.6,7.6,7.6c1.8,0,3.4-0.7,4.7-1.9c0.2-0.2,0.4-0.4,0.6-0.6c0.2,0.2,0.4,0.4,0.6,0.6 c1.2,1.2,2.9,1.9,4.7,1.9c4.2,0,7.6-3.4,7.6-7.6C33.3,17.4,29.9,14,25.7,14z M25.7,26.7c-1.1,0-2.2-0.4-3-1.2 c-0.8-0.8-1.5-2-2-3.4c0.5-1.4,1.2-2.5,2-3.4c0.8-0.8,1.9-1.2,3-1.2c2.8,0,5.1,2.3,5.1,5.1C30.8,24.4,28.5,26.7,25.7,26.7z M15.2,26.7c-2.8,0-5.1-2.3-5.1-5.1c0-2.8,2.3-5.1,5.1-5.1c1.1,0,2.2,0.4,3,1.2c0.8,0.8,1.5,2,2,3.4c-0.5,1.4-1.2,2.5-2,3.4 C17.4,26.3,16.3,26.7,15.2,26.7z"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container-width flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-slate-900 tracking-tight">
          <MetaLogo className="w-7 h-7 text-primary" />
          <span>Meta<span className="text-primary">Rescue</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-slate-900 transition-colors">Process</a>
          <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-slate-900 transition-colors">Success Stories</a>
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="h-12 px-6 rounded-xl text-sm">
            Submit Case
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col space-y-6 shadow-xl">
          <div className="flex flex-col space-y-4 text-slate-600 font-medium">
            <a href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}>Process</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); }}>Success Stories</a>
          </div>
          <Button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full">
            Submit Case
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
