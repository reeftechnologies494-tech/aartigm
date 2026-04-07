import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';


const Collection = ({ data }) => {
  return (
    <section className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-primary text-primary mb-3"
          >
            {data.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary tracking-widest uppercase text-sm font-semibold"
          >
            {data.subheading}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {data.items.map((item, idx) => {
            const isHighlighted = item.title.includes("Salman Khan" && "Earrings");
            const spanClass = isHighlighted ? "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2" : "md:col-span-1 lg:col-span-2";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative group rounded-xl overflow-hidden cursor-pointer bg-light ${spanClass}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0  group-hover:bg-primary/5 transition-colors duration-500" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="bg-white/5  backdrop-blur-sm p-5 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className={`font text-primary mb-4 ${isHighlighted ? 'text-xl' : 'text-xl line-clamp-1'}`}>
                      {item.title}
                    </h3>
                    <Button variant="primary" className="text-sm px-6 py-2 w-full">SHOP NOW</Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collection;
