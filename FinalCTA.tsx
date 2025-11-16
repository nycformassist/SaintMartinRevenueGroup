
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center bg-white p-10 rounded-lg shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Secure Your Unfair Advantage</h2>
        <p className="mt-6 text-lg text-gray-600">
          The market isn't waiting. While your competitors rely on guesswork, you can leverage an AI-powered strategy built on two decades of proven success. Secure your exclusive partnership and turn market uncertainty into your greatest advantage.
        </p>
        <div className="mt-10">
          <a
            href="mailto:contact@saintmartinrevenue.com"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105 inline-block"
          >
            Get Your Exclusive Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
