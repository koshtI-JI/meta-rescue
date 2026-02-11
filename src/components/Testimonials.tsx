import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Content Creator",
    content: "I thought my Instagram account with 50k followers was gone forever after being hacked. MetaRescue guided me through the recovery process and I got it back within a week. Lifesavers!",
    stars: 5
  },
  {
    name: "Marcus Thorne",
    role: "Business Owner",
    content: "Our ad account was disabled without warning during a critical launch. The team here knew exactly who to contact and what to say. Professional, fast, and effective.",
    stars: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Influencer",
    content: "Don't waste time with bots or generic support forms. MetaRescue provided the human expertise I needed to resolve an impersonation issue that was affecting my brand.",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Social Proof</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Trusted by Account Owners Across Multiple Niches</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
