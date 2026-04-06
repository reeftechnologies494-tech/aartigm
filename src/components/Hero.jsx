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

  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["40px", "0px"]);

  const width = useTransform(scrollYProgress, [0, 0.5], ["90%", "100%"]);

  return (
    <div ref={containerRef} className="relative bg-white w-full flex flex-col items-center justify-center">
      <div className='min-h-[90vh] mt-[16vh] w-full flex justify-center items-center'>
        <motion.img style={{ width, borderRadius }} className='h-[90vh] w-[90%] object-cover' src="https://images.unsplash.com/photo-1605821628253-8120cd950c03?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  );
};

export default Hero;
