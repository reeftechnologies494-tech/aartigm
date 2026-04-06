import React, { useState } from 'react';
import { ChevronDown, Phone, User, Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = ({ data }) => {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(data.currencies[0]);

  return (
    <div className="bg-primary text-light px-6 py-2 flex justify-between items-center text-sm sticky top-0 z-50 shadow-md">
      {/* Left side */}
      <div className="flex items-center gap-6">
        <div 
          className="relative cursor-pointer flex items-center gap-1 hover:text-generic transition-colors"
          onClick={() => setCurrencyOpen(!currencyOpen)}
        >
          <span>{selectedCurrency}</span>
          <ChevronDown size={14} />
          
          {/* Dropdown */}
          {currencyOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full mt-2 left-0 bg-white text-primary shadow-lg rounded-md overflow-hidden min-w-[200px]"
            >
              {data.currencies.map((curr, idx) => (
                <div 
                  key={idx}
                  className="px-4 py-2 hover:bg-light cursor-pointer text-sm"
                  onClick={() => {
                    setSelectedCurrency(curr);
                    setCurrencyOpen(false);
                  }}
                >
                  {curr}
                </div>
              ))}
            </motion.div>
          )}
        </div>
        
        <a href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 hover:text-generic transition-colors group">
          <Phone size={14} className="group-hover:scale-110 transition-transform" />
          <span>{data.phone}</span>
        </a>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-5">
        <button className="hover:text-generic transition-colors relative group">
          <User size={18} />
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">Account</span>
        </button>
        <button className="hover:text-generic transition-colors relative group">
          <Heart size={18} />
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">Wishlist</span>
        </button>
        <button className="hover:text-generic transition-colors relative group flex items-center">
          <ShoppingBag size={18} />
          <span className="absolute -top-1.5 -right-1.5 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">Bag</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
