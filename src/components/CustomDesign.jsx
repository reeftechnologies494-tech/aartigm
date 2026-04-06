import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const CustomDesign = ({ data }) => {
  return (
    <section className="py-24 bg-light relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-generic/10 rounded-l-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-primary text-primary mb-6"
          >
            {data.heading}
          </motion.h2>
          <p className="text-gray-700 tracking-wider text-xl max-w-2xl mx-auto">Create a piece of jewellery that is uniquely yours. Our artisans bring your imagination to life with precision and care.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
          
          {data.steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col items-center mb-8 md:mb-0 bg-light p-4"
            >
              <div className="w-16 h-16 rounded-full bg-primary text-light border-4 border-light shadow-lg flex items-center justify-center text-xl font-bold mb-4">
                {idx + 1}
              </div>
              <h4 className="font-semibold text-primary text-lg">{step}</h4>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="secondary" className="text-lg px-10 py-4 shadow-xl">BOOK A SESSION</Button>
        </div>
      </div>
    </section>
  );
};

export default CustomDesign;
