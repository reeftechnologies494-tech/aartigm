import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';


const Bestselling = ({ data }) => {
  if(!data) return null
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-primary text-primary mb-3"
            >
              {data.heading}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-secondary tracking-widest uppercase text-sm font-semibold"
            >
              {data.subheading}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="hidden md:block px-8">VIEW ALL</Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.categories?.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={item.img}
                alt={item.img}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                <h3 className="text-3xl font-primary text-white tracking-wide">{item.name}</h3>
                <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-secondary transition-colors duration-300">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center md:hidden">
          <Button variant="outline" className="w-full">VIEW ALL</Button>
        </div>
      </div>
    </section>
  );
};

export default Bestselling;
