
import React from 'react';
import { FoundationIcon, ContentIcon, ConsistencyIcon } from './Icons';

const HolyTrinity: React.FC = () => {
  const trinityItems = [
    {
      icon: <FoundationIcon className="w-12 h-12 text-blue-600" />,
      title: 'Superior Foundation',
      description: 'An AI-optimized website built for maximum Google visibility and customer conversion from day one.',
    },
    {
      icon: <ContentIcon className="w-12 h-12 text-blue-600" />,
      title: 'Superior Content',
      description: 'AI-enhanced SEO copywriting that ranks higher, converts better, and engages your audience.',
    },
    {
      icon: <ConsistencyIcon className="w-12 h-12 text-blue-600" />,
      title: 'Superior Consistency',
      description: 'Automated, persistent social media and blogging that compounds visibility 24/7.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">The Holy Trinity of Digital Marketing</h2>
        <div className="mt-4 w-24 h-1.5 bg-blue-600 mx-auto rounded"></div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {trinityItems.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-base text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolyTrinity;
