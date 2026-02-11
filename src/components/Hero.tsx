import React from 'react';
import { ShieldCheck, Clock, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
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
          Professional Instagram & Facebook <br />
          <span className="text-blue-400">Account Recovery Assistance</span>
        </h1>
        
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Fast. Confidential. Expert-handled cases through Meta Business support. We help you regain control of your digital identity.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-600/25">
            Contact Now
          </a>
          <a href="#services" className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-8 rounded-lg border border-slate-700 transition-all">
            View Services
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-slate-800 pt-12">
          <div className="flex flex-col items-center">
            <div className="bg-blue-900/20 p-3 rounded-full mb-3 text-blue-400">
              <Users size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">100+</h3>
            <p className="text-slate-400 text-sm uppercase tracking-wider">Cases Guided</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-900/20 p-3 rounded-full mb-3 text-blue-400">
              <Clock size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">24/7</h3>
            <p className="text-slate-400 text-sm uppercase tracking-wider">Fast Response</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-900/20 p-3 rounded-full mb-3 text-blue-400">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">100%</h3>
            <p className="text-slate-400 text-sm uppercase tracking-wider">Professional Handling</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
