import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Creator',
    photo: 'https://i.pravatar.cc/150?img=47',
    stars: 5,
    country: 'United States',
    platform: 'Instagram',
    time: '48 Hours',
    text: 'After 3 months of automated rejections, the team got my account back in 2 days. Professional from start to finish.',
  },
  {
    name: 'David Chen',
    role: 'E-commerce Brand',
    photo: 'https://i.pravatar.cc/150?img=11',
    stars: 5,
    country: 'United Kingdom',
    platform: 'Facebook Business',
    time: '72 Hours',
    text: 'Our ad account was disabled right before a major launch. They handled the appeal internally and restored our access perfectly.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Influencer',
    photo: 'https://i.pravatar.cc/150?img=5',
    stars: 5,
    country: 'Spain',
    platform: 'Instagram',
    time: '24 Hours',
    text: 'I was devastatingly locked out of my 500k follower account. The communication and speed were truly unmatched. Highly trusted.',
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-background border-t border-slate-100">
      <div className="container-width">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Trusted by Professionals
          </h2>
          <p className="text-lg text-slate-500">
            Real recovery stories from creators and businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card hover className="h-full flex flex-col p-8">
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(test.stars)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-8 flex-1">
                  "{test.text}"
                </p>
                
                <div className="mt-auto border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={test.photo} alt={test.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-bold text-slate-900">{test.name}</div>
                      <div className="text-sm text-slate-500">{test.role}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-2 text-xs font-medium bg-slate-50 p-4 rounded-xl">
                    <div className="text-slate-500">Platform</div>
                    <div className="text-slate-900 text-right">{test.platform}</div>
                    
                    <div className="text-slate-500">Country</div>
                    <div className="text-slate-900 text-right">{test.country}</div>
                    
                    <div className="text-slate-500">Recovery Time</div>
                    <div className="text-success text-right">{test.time}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
