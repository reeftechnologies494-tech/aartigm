import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
const CertifiedStones = () => {
  const stones = [
    { name: "Blue Sapphire", src: "/Images/Sapphire/blueSapphire.webp" },
    { name: "Emerald", src: "/Images/Gems/3.webp" },
    { name: "Yellow Sapphire", src: "/Images/Gems/1.webp" },
    { name: "Ruby", src: "/Images/Sapphire/ruby.webp" }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x"
        >
          {stones.map((stone, idx) => (
            <div key={idx} className="min-w-[280px] md:min-w-[320px] bg-light rounded-2xl p-6 snap-center border border-transparent hover:border-gray-200 transition-colors">
              <div className="relative aspect-square mb-6 rounded-lg overflow-hidden bg-white">
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-sm shadow-sm z-10 flex items-center gap-1 border border-gray-100">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> LAB CERTIFIED
                </div>
                <img src={stone.src} alt={stone.name} className="w-full h-full object-cover mix-blend-multiply p-4" />
              </div>
              <h3 className="text-xl font-primary text-primary text-center mb-4">{stone.name}</h3>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 py-2 text-xs">READ MORE</Button>
                <Button variant="secondary" className="flex-1 py-2 text-xs">SHOP NOW</Button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertifiedStones;
