import React from 'react';
import { motion } from 'framer-motion';


const BuyOnline = ({ data={...content} }) => {
  return (
    <section className="py-20 bg-white">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-light rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer border border-transparent hover:border-generic/30"
            >
              <div className="aspect-square bg-gray-200 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src= {product.img}
                  alt={product.name}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">{product.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{product.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyOnline;
