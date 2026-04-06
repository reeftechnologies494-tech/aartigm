import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-light z-50">
      <motion.div
        className="w-16 h-16 border-4 border-t-secondary border-r-generic border-b-primary border-l-cta rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-8 h-8 bg-primary rotate-45 transform"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Loader;
