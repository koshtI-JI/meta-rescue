import React from 'react';
import { ShieldCheck, Clock, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center bg-blue-900/30 border border-blue-500/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-blue-200 text-sm font-medium tracking-wide">META SUPPORT SPECIALISTS</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
          Instagram or Facebook Account Disabled?
        </h1>
        
        <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
          Get Expert Recovery Assistance — Fast, Confidential & Professional.
        </p>
        <p className="text-base text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Trusted support for creators, businesses, and professionals facing account issues.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a href="#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-emerald-600/25">
            Get Your Account Reviewed
          </a>
          <a href="https://wa.me/916261537591" target="_blank" rel="noopener noreferrer" className="bg-black/80 hover:bg-black text-white font-bold py-4 px-10 rounded-xl transition-all border border-slate-700">
            Chat on WhatsApp
          </a>
        </div>
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-700/40 text-blue-200 px-4 py-2 rounded-lg">
            <Clock size={18} />
            <span className="text-sm font-medium">
              Due to high demand, only limited cases are reviewed daily.
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-slate-800 pt-8">
          <div className="flex items-center justify-center gap-2 text-slate-200">
            <Clock size={18} className="text-blue-400" />
            <span className="text-sm font-semibold">Fast Response</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-200">
            <ShieldCheck size={18} className="text-blue-400" />
            <span className="text-sm font-semibold">Confidential Handling</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-200">
            <Users size={18} className="text-blue-400" />
            <span className="text-sm font-semibold">Professional Support</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-200">
            <ShieldCheck size={18} className="text-blue-400" />
            <span className="text-sm font-semibold">Business Priority</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
