
import React from 'react';
import { CheckIcon } from './Icons';

const Exclusivity: React.FC = () => {
  const advantages = [
    { icon: '🎯', text: 'Tailored, unbeatable SEO strategy for your specific local market' },
    { icon: '🛡️', text: 'Guaranteed exclusivity in your industry and territory' },
    { icon: '💡', text: 'Focused resources dedicated to making you the leader' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Exclusive Hyper-Local Partnership</h2>
          <div className="mt-4 w-24 h-1.5 bg-blue-600 mx-auto rounded"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              To ensure maximum impact for our clients, we operate on an exclusive, non-compete model. This means we partner with only one business per industry within a designated geographic territory.
            </p>
            <ul className="space-y-3 text-lg text-gray-700 mb-8">
              <li className="flex"><CheckIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" /><span>One chiropractor in Queens</span></li>
              <li className="flex"><CheckIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" /><span>One salon in Wakefield</span></li>
              <li className="flex"><CheckIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" /><span>One restaurant across all five boroughs</span></li>
            </ul>
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-6 rounded-r-lg">
              <p className="font-semibold italic">
                Your investment is protected. We will never use our powerful system to help your direct local competitor.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
            <h3 className="font-serif text-3xl font-bold mb-6 text-gray-900">Your Advantages:</h3>
            <ul className="space-y-6">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-2xl mr-4">{advantage.icon}</span>
                  <span className="text-lg text-gray-700">{advantage.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exclusivity;
