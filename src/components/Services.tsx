import React from 'react';
import { Lock, UserX, Briefcase, AlertTriangle, Zap } from 'lucide-react';

const services = [
  {
    icon: <UserX size={32} />,
    title: "Disabled Account Assistance",
    description: "Guidance for accounts disabled due to policy violations or errors. We help formulate appeals that get noticed."
  },
  {
    icon: <Lock size={32} />,
    title: "Hacked Account Guidance",
    description: "Step-by-step support to secure your compromised account and reclaim access from unauthorized users."
  },
  {
    icon: <Briefcase size={32} />,
    title: "Business & Ad Account Support",
    description: "Specialized assistance for Business Managers and Ad Accounts that have been restricted or disabled."
  },
  {
    icon: <AlertTriangle size={32} />,
    title: "Impersonation Reporting",
    description: "Swift action against fake profiles and impersonators damaging your reputation or brand."
  },
  {
    icon: <Zap size={32} />,
    title: "Priority Case Handling",
    description: "Expedited processing for urgent cases requiring immediate attention and faster resolution timelines."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Recovery Services</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide professional assistance for a wide range of social media account issues, tailored to your specific situation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
