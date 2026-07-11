import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';

const stats = [
  { value: '1500+', label: 'Cases Reviewed' },
  { value: '32', label: 'Countries' },
  { value: '450+', label: 'Business Accounts' },
  { value: '28 min', label: 'Average Response' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-background border-t border-slate-100">
      <div className="container-width">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card hover className="text-center p-6 lg:p-8 flex flex-col justify-center items-center h-full">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2 tracking-tight">{stat.value}</h3>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
