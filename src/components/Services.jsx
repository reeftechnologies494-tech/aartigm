import React from 'react';
import { ShieldCheck, Sparkles, Gem, PenTool } from 'lucide-react';

const icons = [ShieldCheck, Sparkles, Gem, PenTool];

const Services = ({ data }) => {
  return (
    <div className="bg-primary text-light py-12 border-y border-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-secondary/30">
          {data.map((service, idx) => {
            const Icon = icons[idx] || Sparkles;
            return (
              <div key={idx} className={`flex flex-col items-center text-center p-4 ${idx !== 0 ? 'lg:pl-8' : ''}`}>
                <Icon size={36} className="text-generic mb-4" strokeWidth={1.5} />
                <p className="font-medium text-sm md:text-base leading-snug">{service}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
