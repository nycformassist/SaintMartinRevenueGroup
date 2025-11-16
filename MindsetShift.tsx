
import React from 'react';
import { OldModelIcon, NewModelIcon } from './Icons';

const MindsetShift: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">The Core Mindset Shift</h2>
        <div className="mt-4 w-24 h-1.5 bg-blue-600 mx-auto rounded"></div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-8">
            <div className="flex items-center text-yellow-800 mb-4">
              <OldModelIcon className="w-10 h-10 mr-4" />
              <h3 className="text-3xl font-bold">Old Model</h3>
            </div>
            <p className="text-lg text-yellow-900 italic">
              "I trade my time for money. My costs are low, so my price should be low."
            </p>
          </div>
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-8">
            <div className="flex items-center text-blue-800 mb-4">
              <NewModelIcon className="w-10 h-10 mr-4" />
              <h3 className="text-3xl font-bold">New Model</h3>
            </div>
            <p className="text-lg text-blue-900 italic">
              "I use proprietary AI systems to generate a disproportionate amount of results for my clients. I am selling accelerated growth, and my fee is a fraction of the value I create."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindsetShift;
