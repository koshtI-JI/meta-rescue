import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do you guarantee recovery?",
    answer: "No service can legitimately guarantee recovery, as the final decision lies with Meta. However, we maximize your success chances by using professional support channels, correct escalation protocols, and years of experience handling similar cases."
  },
  {
    question: "How fast is the process?",
    answer: "Timelines vary depending on the complexity of the case and Meta's current backlog. Simple issues may be resolved in 24-48 hours, while complex account disabled cases can take 1-2 weeks. We provide expedited handling to move things as quickly as possible."
  },
  {
    question: "Is my data safe?",
    answer: "Absolutely. We operate with strict confidentiality and never ask for passwords unless absolutely necessary for specific recovery steps (which is rare). Your personal information is handled securely and never shared with third parties."
  },
  {
    question: "What information do I need to provide?",
    answer: "Generally, we need your account username, the email/phone associated with the account, and details about the issue (e.g., screenshots of error messages). We will guide you through exactly what is needed during the consultation."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Common Questions</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h3>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button 
                className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600" size={20} />
                ) : (
                  <ChevronDown className="text-slate-400" size={20} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-6 bg-white border-t border-slate-200">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
