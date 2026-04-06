import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = ({ data }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-primary text-primary"
          >
            {data.heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-light p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all"
            >
              <Quote className="text-generic/40 mb-6" size={40} />
              <p className="text-gray-700 italic mb-6 min-h-[80px]">"{review.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-sm font-bold text-secondary">
                  {review.author.charAt(0)}
                </div>
                <span className="font-semibold text-primary">{review.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
