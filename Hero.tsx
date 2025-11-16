import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative text-white min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900 opacity-80"></div>
      <img 
        src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=1920&auto=format&fit=crop" 
        alt="Iconic view of the New York City skyline at twilight"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center px-4">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-fade-in-down" 
          style={{ animationDelay: '0.2s', textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)' }}
        >
          AI-Powered Growth for NYC Businesses
        </h1>
        <p 
          className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-gray-200 animate-fade-in-down" 
          style={{ animationDelay: '0.4s', textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)' }}
        >
          Transform your digital presence with our exclusive, AI-driven marketing accelerator designed for verifiable profitability in New York's competitive market.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 w-full sm:w-auto">
            Explore Our Plans
          </a>
          <a href="#cta" className="border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 w-full sm:w-auto">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;