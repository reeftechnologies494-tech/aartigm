import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Diamond } from 'lucide-react';

const DummyPage = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-light">
      <Diamond className="text-secondary mb-6 animate-pulse" size={64} strokeWidth={1} />
      <h1 className="text-5xl md:text-6xl font-primary text-primary mb-6">Coming Soon</h1>
      <h2 className="text-xl md:text-2xl font-light text-primary mb-4 px-4">
        The page <span className="font-mono bg-white px-3 py-1 rounded-sm text-secondary font-medium shadow-sm leading-relaxed">{location.pathname}</span> is under construction.
      </h2>
      <p className="text-gray-600 max-w-lg mx-auto mb-10 text-sm md:text-base">
        We're currently crafting this page. Please check back later or explore our brilliant gemstone collections on the home page.
      </p>
      <Link to="/" className="bg-primary text-light px-8 py-3 rounded-sm font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 relative group overflow-hidden">
        <span className="relative z-10">RETURN TO HOME</span>
        <div className="absolute inset-0 h-full w-full bg-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
        <span className="relative z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center">RETURN TO HOME</span>
      </Link>
    </div>
  );
};

export default DummyPage;
