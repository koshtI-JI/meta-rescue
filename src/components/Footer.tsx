import React from 'react';
import { Instagram, Send, Mail } from 'lucide-react';

const MetaLogo = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 36" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.7,14c-1.8,0-3.4,0.7-4.7,1.9c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2-0.2-0.4-0.4-0.6-0.6C18.6,14.7,17,14,15.2,14 c-4.2,0-7.6,3.4-7.6,7.6c0,4.2,3.4,7.6,7.6,7.6c1.8,0,3.4-0.7,4.7-1.9c0.2-0.2,0.4-0.4,0.6-0.6c0.2,0.2,0.4,0.4,0.6,0.6 c1.2,1.2,2.9,1.9,4.7,1.9c4.2,0,7.6-3.4,7.6-7.6C33.3,17.4,29.9,14,25.7,14z M25.7,26.7c-1.1,0-2.2-0.4-3-1.2 c-0.8-0.8-1.5-2-2-3.4c0.5-1.4,1.2-2.5,2-3.4c0.8-0.8,1.9-1.2,3-1.2c2.8,0,5.1,2.3,5.1,5.1C30.8,24.4,28.5,26.7,25.7,26.7z M15.2,26.7c-2.8,0-5.1-2.3-5.1-5.1c0-2.8,2.3-5.1,5.1-5.1c1.1,0,2.2,0.4,3,1.2c0.8,0.8,1.5,2,2,3.4c-0.5,1.4-1.2,2.5-2,3.4 C17.4,26.3,16.3,26.7,15.2,26.7z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="container-width flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-xl font-bold text-slate-900 tracking-tight">
          <MetaLogo className="w-6 h-6 text-slate-400" />
          <span>Meta<span className="text-primary">Rescue</span></span>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-slate-900 transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="https://instagram.com/koshti_ji__" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-pink-600 hover:bg-pink-50 transition-colors">
            <Instagram size={18} />
          </a>
          <a href="https://t.me/MetaRescue_support" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-colors">
            <Send size={18} />
          </a>
          <a href="mailto:omkoshti8@gmail.com" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
            <Mail size={18} />
          </a>
        </div>
        
        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} MetaRescue. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
