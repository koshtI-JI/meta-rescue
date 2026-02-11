import React from 'react';
import { BadgeCheck, ShieldAlert } from 'lucide-react';
import verifyProfile from "./image/verify_profile.png";


const VerifiedAccess: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden">
            
            {/* Glow effect background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-lg border-2 border-slate-100 overflow-hidden">
                  <img 
                    src={verifyProfile} 
                    alt="Verified Professional Profile" 
                    className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = verifyProfile as unknown as string;
                    }}
                  />
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-full shadow-lg border border-slate-100">
                  <BadgeCheck className="text-blue-500 w-8 h-8" fill="currentColor" color="white" />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                <BadgeCheck size={14} />
                <span>Verified Access</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Professional Access to Meta Business Support
              </h2>
              
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Enabling faster and structured case escalation.
              </p>
              
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100 text-left">
                <ShieldAlert className="text-slate-400 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-semibold text-slate-700">Disclaimer:</span> We are not affiliated with or officially endorsed by Meta. We provide independent professional assistance to help navigate their support systems effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifiedAccess;
