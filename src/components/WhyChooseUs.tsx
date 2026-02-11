import React from 'react';
import { Shield, MessageSquare, BadgeCheck, UserCheck, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: <Shield size={28} />,
    title: "Confidential Process",
    description: "Your data and privacy are paramount. We operate with strict confidentiality protocols."
  },
  {
    icon: <MessageSquare size={28} />,
    title: "Transparent Communication",
    description: "Clear updates at every step. No jargon, just straightforward information about your case status."
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "No False Promises",
    description: "Honest assessment of recovery chances. We only take cases where we can genuinely help."
  },
  {
    icon: <UserCheck size={28} />,
    title: "Professional Support",
    description: "Experienced specialists who understand Meta's policies and support infrastructure inside out."
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Client-First Approach",
    description: "We treat every account as if it were our own, fighting tirelessly for your digital rights."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-900 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Your Trusted Partner in Account Recovery</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              In an industry full of scams and false promises, MetaRescue stands apart as a legitimate, professional service provider. We prioritize integrity and results above all else.
            </p>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <BadgeCheck className="text-green-500" size={24} />
                </div>
                <div>
                  <p className="font-bold text-white">Verified Methods</p>
                  <p className="text-xs text-slate-400">Safe & Compliant</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm">
                We strictly adhere to platform terms of service while leveraging legitimate support channels.
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                    {reason.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{reason.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
