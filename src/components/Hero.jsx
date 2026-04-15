import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import Button from './ui/Button';

const Hero = ({ data }) => {


  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-center">
      <div className='h-full border-4 border-pink w-full flex justify-center items-center'>
        <motion.img className='h-full w-full object-fit object-center' src="/Images/banners/banner1.webp" alt="bannerImage" />
        <div className='absolute top-0 left-0 w-full h-full bg-black/20'></div>
      </div>
    </div>
  );
};

export default Hero;
