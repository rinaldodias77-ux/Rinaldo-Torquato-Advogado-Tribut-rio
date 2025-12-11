import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rights from './components/Rights';
import Guidance from './components/Guidance';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Rights />
        <Guidance />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;