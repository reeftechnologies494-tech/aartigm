import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Blog = ({ data }) => {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl w-full font-primary text-primary "
          >
            {data.heading}
          </motion.h2>
          <NavLink href="#" className="w-1/6 hidden md:block text-secondary font-semibold hover:underline decoration-2 underline-offset-4">
            VIEW ALL POSTS
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl mb-6 relative aspect-[16/9]">
                <img 
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors">
                READ MORE <span className="text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
