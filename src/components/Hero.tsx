import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-background">
      {/* Animated Ambient Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none -z-10"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
        }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      <div className="container-width">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-6 backdrop-blur-md bg-white/50"
            >
              <ShieldCheck size={16} className="text-primary" />
              Verified Meta Support Partners
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 drop-shadow-sm"
            >
              Instagram Account <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">Disabled?</span> Let's Fix It.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              Get professional recovery assistance for disabled Instagram or Facebook accounts. Fast, confidential, and handled by specialists.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12"
            >
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto gap-2">
                Submit Your Case <ArrowRight size={18} />
              </Button>
              <Button variant="outline" onClick={() => window.open('https://wa.me/916261537591', '_blank')} className="w-full sm:w-auto hover:bg-slate-100 hover:border-slate-300">
                Chat on WhatsApp
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-8"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                ))}
              </div>
              <div className="flex flex-col text-sm text-slate-500">
                <div className="flex items-center gap-1 text-slate-900 font-semibold">
                  <span>4.9/5</span>
                  <div className="flex text-amber-400 text-xs drop-shadow-sm">★★★★★</div>
                </div>
                <span>From 1500+ recoveries</span>
              </div>
            </motion.div>
          </div>

          {/* Right Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative w-full max-w-md lg:max-w-none flex justify-center lg:justify-end"
          >
            {/* Soft decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/60 to-purple-100/60 rounded-full blur-3xl -z-10" />
            
            {/* Phone Frame */}
            <motion.div 
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative w-[300px] h-[600px] bg-slate-900 rounded-[48px] p-2 shadow-2xl border border-slate-700/50 rotate-[-2deg] transition-all duration-500"
            >
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
                <div className="w-32 h-6 bg-slate-900 rounded-b-3xl"></div>
              </div>
              {/* Screen Content */}
              <div className="w-full h-full bg-white rounded-[40px] overflow-hidden flex flex-col pt-12 px-6 shadow-inner">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center shadow-sm">
                    <div className="w-8 h-8 text-red-500">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 text-center mb-2">Error</h3>
                <h4 className="text-lg font-semibold text-slate-900 text-center mb-3">Your account has been disabled</h4>
                <p className="text-sm text-slate-500 text-center mb-6 leading-relaxed">
                  You can't use Instagram because your account activity didn't follow our Community Guidelines.
                </p>
                <div className="mt-auto mb-8 space-y-3">
                  <div className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-sm font-semibold text-slate-600 shadow-sm">Log In</div>
                  <div className="w-full h-12 bg-blue-500 hover:bg-blue-600 transition-colors rounded-xl flex items-center justify-center text-sm font-semibold text-white shadow-btn cursor-pointer">Learn More</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
