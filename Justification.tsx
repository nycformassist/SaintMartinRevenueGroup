
import React from 'react';

const Justification: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What You're Really Investing In</h2>
            <div className="mt-4 w-24 h-1.5 bg-blue-600 mx-auto rounded"></div>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
              We're not a typical agency; we are a growth accelerator. Here's a breakdown of the value you receive compared to traditional, fragmented solutions.
            </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-serif text-2xl font-bold mb-3 text-blue-800">The Setup</h3>
            <p className="text-gray-600">
              We don't just 'build a website.' We use advanced AI to architect your site for maximum Google visibility and customer conversion from day one. A basic freelancer charges $3,000+ for that alone.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-serif text-2xl font-bold mb-3 text-blue-800">The Content Machine</h3>
            <p className="text-gray-600">
              You're not just getting 'blog posts and social media.' You're getting a persistent, AI-optimized content engine designed to pull in qualified leads 24/7. A junior marketing hire would cost $5,000/month in NYC.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-serif text-2xl font-bold mb-3 text-blue-800">The Bottom Line</h3>
            <p className="text-gray-600">
              Our service isn't an expense. It's an investment that directly works to replace the $5,000-$10,000/month you'd spend on a piecemeal team. You're getting elite-level strategy at a fraction of the cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Justification;
