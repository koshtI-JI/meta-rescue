import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { ArrowRight, FileText, Search, ShieldAlert, Send, Unlock } from 'lucide-react';

const steps = [
  { num: '01', title: 'Submit', desc: 'Provide case details', icon: FileText },
  { num: '02', title: 'Review', desc: 'Expert assessment', icon: Search },
  { num: '03', title: 'Appeal', desc: 'Strategy creation', icon: ShieldAlert },
  { num: '04', title: 'Submission', desc: 'Priority routing', icon: Send },
  { num: '05', title: 'Recovery', desc: 'Account restored', icon: Unlock },
];

const Process: React.FC = () => {
  return (
    <section id="how-it-works" className="section-padding bg-slate-50">
      <div className="container-width">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            The Recovery Process
          </h2>
          <p className="text-lg text-slate-500">
            A systematic, professional approach to getting your account back safely and securely.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-full lg:w-1/5"
              >
                <Card hover className="h-full p-6 relative overflow-hidden group text-center lg:text-left">
                  <div className="text-6xl font-bold text-slate-50 absolute -right-4 -bottom-4 z-0 group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <div className="relative z-10 flex flex-col items-center lg:items-start">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                      <step.icon size={24} strokeWidth={1.75} />
                    </div>
                    <div className="text-sm font-semibold text-primary mb-1">Step {step.num}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                </Card>
              </motion.div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex text-slate-300">
                  <ArrowRight size={24} strokeWidth={1.5} />
                </div>
              )}
              {idx < steps.length - 1 && (
                <div className="flex lg:hidden text-slate-300 my-2">
                  <ArrowRight size={24} strokeWidth={1.5} className="rotate-90" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
