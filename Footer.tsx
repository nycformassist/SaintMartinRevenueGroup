
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Saint Martin Revenue Group. All Rights Reserved.</p>
        <p className="text-sm mt-2">Empowering NYC Businesses with AI-Driven Growth</p>
      </div>
    </footer>
  );
};

export default Footer;
