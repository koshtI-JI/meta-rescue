import React, { useState } from 'react';
import { Instagram, Send, Mail, ArrowRight, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    issue: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Form submitted:', formState);
    alert('Thank you! We will review your case and contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Get Started</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Start Your Recovery Process</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't wait. The sooner we start, the better the chances of recovery. Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Options */}
          <div className="space-y-6">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Direct Channels</h4>
              
              <div className="space-y-4">
                <a 
                  href="https://www.instagram.com/omkoshti2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-100 group hover:border-pink-200"
                >
                  <div className="bg-pink-100 p-3 rounded-full text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <Instagram size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-500 font-medium">Message on Instagram</p>
                    <p className="text-slate-900 font-bold">@omkoshti2</p>
                  </div>
                  <ArrowRight className="ml-auto text-slate-300 group-hover:text-pink-500 transition-colors" size={20} />
                </a>

                <a 
                  href="https://t.me/MetaRescue_support" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-100 group hover:border-sky-200"
                >
                  <div className="bg-sky-100 p-3 rounded-full text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Send size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-500 font-medium">Start Telegram Chat</p>
                    <p className="text-slate-900 font-bold">@MetaRescue_support</p>
                  </div>
                  <ArrowRight className="ml-auto text-slate-300 group-hover:text-sky-500 transition-colors" size={20} />
                </a>

                <a 
                  href="mailto:omkoshti8@gmail.com" 
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-100 group hover:border-blue-200"
                >
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-500 font-medium">Send Email</p>
                    <p className="text-slate-900 font-bold">omkoshti8@gmail.com</p>
                  </div>
                  <ArrowRight className="ml-auto text-slate-300 group-hover:text-blue-500 transition-colors" size={20} />
                </a>

                <a 
                  href="https://wa.me/916261537591" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-100 group hover:border-green-200"
                >
                  <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-500 font-medium">WhatsApp Now</p>
                    <p className="text-slate-900 font-bold">+91 62615 37591</p>
                  </div>
                  <ArrowRight className="ml-auto text-slate-300 group-hover:text-green-500 transition-colors" size={20} />
                </a>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-4">Why Contact Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Free initial consultation to assess your case</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Direct communication with recovery experts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Secure handling of your case details</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Get Your Account Reviewed</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-slate-700 mb-1">Issue Type</label>
                <select 
                  id="issue" 
                  name="issue" 
                  value={formState.issue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                >
                  <option value="" disabled>Select your issue</option>
                  <option value="disabled">Disabled Account</option>
                  <option value="hacked">Hacked Account</option>
                  <option value="business">Business/Ad Account</option>
                  <option value="impersonation">Impersonation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  placeholder="Describe your issue in detail..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Submit for Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
