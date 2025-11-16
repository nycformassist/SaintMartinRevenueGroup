
import React from 'react';
import { CheckIcon } from './Icons';

const PricingCard = ({ plan, isFlagship = false } : { plan: any, isFlagship?: boolean }) => {
  return (
    <div className={`relative border rounded-lg p-8 flex flex-col ${isFlagship ? 'border-blue-600 border-2 bg-blue-50 transform lg:scale-105' : 'border-gray-200 bg-white'}`}>
      {isFlagship && (
        <div className="absolute top-0 right-0 -mt-3 -mr-3">
            <div className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full px-4 py-1">FLAGSHIP</div>
        </div>
      )}
      <h3 className="text-2xl font-bold font-serif mb-2">{plan.name}</h3>
      <p className="text-gray-500 mb-6">{plan.audience}</p>
      
      <div className="mb-6">
        <span className="text-5xl font-bold">{plan.price}</span>
        <span className="text-gray-500">/month</span>
      </div>
      
      <ul className="space-y-4 mb-8 text-left flex-grow">
        {plan.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="bg-blue-100 text-blue-800 italic p-4 rounded-lg mt-auto">
        "{plan.quote}"
      </div>
    </div>
  );
}

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'AI-Powered Presence',
      audience: 'For new freelancers & micro-businesses',
      price: '$299',
      features: [
        '5-page AI-built website + foundational SEO',
        '4 AI-drafted + human-polished social posts/week',
        '1 AI-researched + human-written SEO blog/month',
        'Hosting & webmaster included',
      ],
      quote: "Go from invisible to professional in days—not months—for less than a part-time intern."
    },
    {
      name: 'Growth Engine',
      audience: 'For ambitious SMBs & e-commerce (Flagship)',
      price: '$1,199',
      features: [
        'Custom AI-optimized conversion-focused website',
        '15 AI-optimized social posts + 4 deep SEO blogs/month',
        'Advanced AI SEO: keyword strategy & content clustering',
        'Monthly performance reports + full hosting',
      ],
      quote: "Your full in-house marketing team—AI-powered—at a fraction of the cost.",
      isFlagship: true
    },
    {
      name: 'Market Dominance',
      audience: 'For established brands & funded startups',
      price: '$2,500+',
      features: [
        'Everything in Growth Engine',
        '20+ social posts + 8 premium blogs/month',
        'Monthly strategy calls & AI competitor analysis',
        'Custom content roadmap + KPI guarantee',
      ],
      quote: "A strategic partnership to make you the undisputed leader in your space."
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Value-Based Pricing: The AI Accelerator</h2>
        <div className="mt-4 w-24 h-1.5 bg-blue-600 mx-auto rounded"></div>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Transparent pricing for premium results in the NYC market. Our Growth Engine is the flagship choice for ambitious businesses ready to scale.
        </p>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <PricingCard plan={plans[0]} />
          <PricingCard plan={plans[1]} isFlagship />
          <PricingCard plan={plans[2]} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
