
import React from 'react';
import Hero from './components/Hero';
import MindsetShift from './components/MindsetShift';
import HolyTrinity from './components/HolyTrinity';
import Pricing from './components/Pricing';
import Justification from './components/Justification';
import Exclusivity from './components/Exclusivity';
import About from './components/About';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import AudioPitch from './components/AudioPitch';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <main>
        <Hero />
        <MindsetShift />
        <HolyTrinity />
        <Pricing />
        <Justification />
        <AudioPitch />
        <Exclusivity />
        <About />
        <FinalCTA />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default App;