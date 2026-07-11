import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { ShieldCheck, Lock, Send, Instagram, BadgeCheck, Check, User, Mail, Globe, AtSign, FileText, AlertCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    platform: 'Instagram',
    username: '',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    
    if (formData.name.trim().length < 2) {
      setError('Please enter a valid full name.');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    if (formData.username.trim().length < 2) {
      setError('Please enter a valid username or link.');
      return;
    }
    
    if (formData.details.trim().length < 10) {
      setError('Please provide more details about your case (at least 10 characters).');
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      // Format the message for Telegram
      const message = `🚨 *New Recovery Request* 🚨\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Platform:* ${formData.platform}\n*Username:* ${formData.username}\n*Details:* ${formData.details}`;
      
      // Encode for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Open Telegram
      window.open(`https://t.me/MetaRescue_support?text=${encodedMessage}`, '_blank');
      
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        platform: 'Instagram',
        username: '',
        details: ''
      });
      
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 border-t border-slate-100">
      <div className="container-width">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Content */}
          <div className="flex-1 lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Start Your Recovery Request
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Submit your case details below. Our team of specialists will review your situation and provide a realistic assessment of recovery options.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <ShieldCheck size={24} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Confidential Review</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Your data is strictly confidential. We only use this information to assess your case against Meta's guidelines.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <Lock size={24} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">No Passwords Required</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">We will never ask for your account password. Our recovery methods utilize official appeal channels.</p>
                  </div>
                </div>
              </div>

              {/* Instagram Profile Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-50 via-indigo-50 to-pink-50 transition-transform duration-500 group-hover:scale-105"></div>
                <div className="relative z-10">
                  <div className="flex items-end gap-4 mb-4 pt-4">
                    <div className="w-20 h-20 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-red-500 to-fuchsia-600 shrink-0">
                      <img src="https://avatars.githubusercontent.com/u/120801666?v=4" alt="koshti_ji__" className="w-full h-full rounded-full border-4 border-white object-cover bg-white" />
                    </div>
                    <div className="pb-1">
                      <h3 className="text-xl font-bold flex items-center gap-1.5 text-slate-900 tracking-tight">
                        koshti_ji__ 
                        <BadgeCheck className="text-blue-500" fill="currentColor" size={20} strokeWidth={1} />
                      </h3>
                      <p className="text-sm text-slate-500 font-medium">Meta Recovery Specialist</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 text-center mb-5 border-y border-slate-100 py-3">
                    <div className="flex-1">
                      <div className="text-slate-900 font-bold">1,542</div>
                      <div className="text-xs text-slate-500 font-medium">Recoveries</div>
                    </div>
                    <div className="w-px bg-slate-100"></div>
                    <div className="flex-1">
                      <div className="text-slate-900 font-bold">15.2K</div>
                      <div className="text-xs text-slate-500 font-medium">Followers</div>
                    </div>
                    <div className="w-px bg-slate-100"></div>
                    <div className="flex-1">
                      <div className="text-slate-900 font-bold">24/7</div>
                      <div className="text-xs text-slate-500 font-medium">Support</div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Helping creators and businesses securely restore disabled Meta accounts. Fast, confidential, and professional. Send a DM for urgent cases.
                  </p>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setIsFollowing(true);
                        window.open('https://instagram.com/koshti_ji__', '_blank');
                      }}
                      className={`flex-1 rounded-xl py-3 text-sm font-semibold flex justify-center items-center gap-2 transition-all shadow-sm ${
                        isFollowing 
                          ? 'bg-slate-100 text-slate-900 border border-slate-200' 
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      {isFollowing ? <Check size={18} /> : <Instagram size={18} />} 
                      {isFollowing ? 'Following' : 'Follow'}
                    </button>
                    <a href="https://t.me/MetaRescue_support" target="_blank" rel="noreferrer" className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl py-3 text-sm font-semibold flex justify-center items-center gap-2 transition-all">
                      <Send size={18} /> Message
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Form */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 lg:p-10">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-900">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                          <User size={18} />
                        </div>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Enter your name"
                          className="w-full h-12 pl-11 pr-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-900">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                          <Mail size={18} />
                        </div>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="Enter your email"
                          className="w-full h-12 pl-11 pr-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-900">Platform</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 z-10">
                          <Globe size={18} />
                        </div>
                        <select 
                          value={formData.platform}
                          onChange={(e) => setFormData({...formData, platform: e.target.value})}
                          className="w-full h-12 pl-11 pr-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm appearance-none relative"
                        >
                          <option value="Instagram">Instagram</option>
                          <option value="Facebook">Facebook</option>
                          <option value="WhatsApp">WhatsApp</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-900">Username / Link</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                          <AtSign size={18} />
                        </div>
                        <input 
                          type="text" 
                          required
                          value={formData.username}
                          onChange={(e) => setFormData({...formData, username: e.target.value})}
                          placeholder="@username"
                          className="w-full h-12 pl-11 pr-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Case Details</label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-0 pl-4 flex pointer-events-none text-slate-400">
                        <FileText size={18} />
                      </div>
                      <textarea 
                        rows={4}
                        required
                        value={formData.details}
                        onChange={(e) => setFormData({...formData, details: e.target.value})}
                        placeholder="Please briefly explain what happened when your account was disabled..."
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                      ></textarea>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        className="overflow-hidden"
                      >
                        <div className="p-3 rounded-xl bg-red-50 text-red-600 text-sm font-medium border border-red-100 flex items-center gap-2">
                          <AlertCircle size={16} className="shrink-0" />
                          {error}
                        </div>
                      </motion.div>
                    )}
                    
                    {success && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        className="overflow-hidden"
                      >
                        <div className="p-3 rounded-xl bg-green-50 text-green-700 text-sm font-medium border border-green-200 flex items-center gap-2">
                          <Check size={16} className="shrink-0" />
                          Request submitted successfully.
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <Button type="submit" className="w-full gap-2 h-12" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Processing...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send via Telegram
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-center text-slate-500 mt-4">
                    By submitting, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
