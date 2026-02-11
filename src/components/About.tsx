import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Security Team" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border border-slate-100 max-w-xs hidden md:block">
                <p className="text-slate-800 font-semibold mb-2">"We restore more than just accounts; we restore your digital presence."</p>
                <div className="flex items-center text-blue-600">
                  <span className="text-sm font-bold">MetaRescue Team</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Pain → Solution</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">We Understand What’s at Stake</h3>
            <p className="text-slate-700 text-lg mb-6 leading-relaxed">
              “Losing access to your social media can mean losing clients, revenue, and credibility.”
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We help escalate cases professionally and guide you through the recovery process — structured, transparent, and focused on getting your access back.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Disabled Account Assistance",
                "Hacked Profile Help",
                "Business & Ad Account Issues",
                "Impersonation Reporting"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-slate-700">
                  <CheckCircle className="text-blue-500 mr-3" size={20} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
