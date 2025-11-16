
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold">Valentine Saint Martin</h2>
        <p className="mt-4 text-xl text-gray-300">
          For Two Decades, Building & Optimizing NYC Businesses from the Ground Up
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="border-t-2 border-blue-500 pt-4">
            <p className="text-5xl font-bold text-blue-400">20+</p>
            <p className="text-lg text-gray-400 mt-2">Years Experience</p>
          </div>
          <div className="border-t-2 border-blue-500 pt-4">
            <p className="text-5xl font-bold text-blue-400">25-56%</p>
            <p className="text-lg text-gray-400 mt-2">Revenue Growth</p>
          </div>
          <div className="border-t-2 border-blue-500 pt-4">
            <p className="text-5xl font-bold text-blue-400">200+</p>
            <p className="text-lg text-gray-400 mt-2">Business Relationships</p>
          </div>
        </div>

        <p className="mt-12 max-w-3xl mx-auto text-lg text-gray-300">
          My approach is simple: I build the infrastructure for predictable, scalable growth. After two decades of documenting what works, I've encoded my expertise into a proprietary AI engine. It's not just software; it's your profitability co-pilot, transforming your business data into a verifiable roadmap for success.
        </p>
      </div>
    </section>
  );
};

export default About;
