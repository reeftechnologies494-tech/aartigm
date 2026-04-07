import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import Button from './ui/Button';

const Hero = ({ data }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.12], [1, 1.2]);

  const borderRadius = useTransform(scrollYProgress, [0, 0.14], ["40px", "0px"]);

  const width = useTransform(scrollYProgress, [0, 0.15], ["90%", "100%"]);

  return (
    <div ref={containerRef} className="relative bg-white w-full flex flex-col items-center justify-center">
      <div className='min-h-[90vh] mt-[16vh] w-full flex justify-center items-center'>
        <motion.img style={{ width, borderRadius }} className='h-[90vh] w-[90%] object-cover' src="https://gemastro.com/wp-content/uploads/2025/03/download-e1741171739287.webp" alt="" />
        <div className='absolute top-0 left-0 w-full h-full bg-black/20'></div>
      </div>
    </div>
  );
};

export default Hero;
