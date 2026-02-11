import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VerifiedAccess from './components/VerifiedAccess';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <VerifiedAccess />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
