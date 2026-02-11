import React from 'react';
import { Instagram, Send, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold tracking-tight">
              Meta<span className="text-blue-500">Rescue</span>
            </span>
            <p className="text-slate-400 mt-2 text-sm">Professional Social Media Recovery Services</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/omkoshti2" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://t.me/MetaRescue_support" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Send size={24} />
            </a>
            <a href="mailto:omkoshti8@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} MetaRescue. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
