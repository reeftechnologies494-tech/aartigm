import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";

const Navigation = ({ data }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 1024) setActiveDropdown(menu);
  };
  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-2 bg-white/30 text-black backdrop-blur-lg z-50 w-[90%] sm:w-[80%] rounded-2xl mx-auto">
      <div className="w-full px-2 py-2 flex justify-between items-center">
        {/* Logo Area */}
        <div className="text-black text-2xl font-bold  text-gray-6000 cursor-pointer  tracking-wide">
          AARTI <span className="text-amber-600 font-light">GEMS</span> <span className="text-4xl font-primary">Mine</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex bg-white/70 p-2 rounded-2xl items-center gap-8">
          {/* Gemstones Mega Menu */}
          <div
            className="relative py-2 group cursor-pointer"
            onMouseEnter={() => handleMouseEnter("gemstones")}
            onMouseLeave={handleMouseLeave}
          >
            <span className=" hover:text-amber-700 font-medium flex items-center gap-1 transition-colors">
              Gemstones
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${activeDropdown === "gemstones" ? "rotate-180" : ""}`}
              />
            </span>
            <AnimatePresence>
              {activeDropdown === "gemstones" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-14  bg-white/90 -left-70 sm:w-[70vw] shadow-xl rounded-b-md  p-6 gap-4"
                >
                  <div className="flex gap-2 justify-evenly">
                    <div className="text-left">
                      <h1 className="text-xl underline text-amber-800">Zodiac Stones</h1>
                      {data.zodiacStones.map((gem, idx) => (
                        <a
                          href="#"
                          key={idx}
                          className=" text-black text-sm  hover:text-amber-700 hover:translate-x-2 transition-all duration-300 block py-1"
                        >
                          {gem}
                        </a>

                      ))}
                    </div>
                    <div className="flex border-l-1 p-1 flex-col">
                      <h1 className="text-xl underline text-amber-800">Popular Vedic Gems</h1>

                      {data.popularVedicGems.map((gem, idx) => (
                        <a
                          href="#"
                          key={idx + "1"}
                          className="text-black text-sm  hover:text-amber-700 hover:translate-x-2 transition-all duration-300 block py-1"
                        >
                          {gem}
                        </a>

                      ))}
                    </div>
                    <div className="flex border-l-1 p-1 flex-col">
                      <h1 className="text-xl underline text-amber-800">Exclusive Gem stones</h1>

                      {data.exclusiveGemstones.map((gem, idx) => (
                        <a
                          href="#"
                          key={idx + "1"}
                          className="text-black text-sm  hover:text-amber-700 hover:translate-x-2 transition-all duration-300 block py-1"
                        >
                          {gem}
                        </a>

                      ))}
                    </div>
                    <div className="flex p-1 border-l-1 flex-col">
                      <h1 className="text-xl  underline text-amber-800">Other Gem Stones</h1>

                      {data.otherGemstones.map((gem, idx) => (
                        <a
                          href="#"
                          key={idx + "1"}
                          className="text-black text-sm  hover:text-amber-700 hover:translate-x-2 transition-all duration-300 block py-1"
                        >
                          {gem}
                        </a>

                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Jewellery Dropdown */}
          <div
            className="relative py-2 group cursor-pointer"
            onMouseEnter={() => handleMouseEnter("jewellery")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-amber-700 font-medium flex items-center gap-1 transition-colors">
              Jewellery{" "}
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${activeDropdown === "jewellery" ? "rotate-180" : ""}`}
              />
            </span>
            <AnimatePresence>
              {activeDropdown === "jewellery" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-14 bg-white left-0 w-[200px] shadow-xl rounded-b-md py-2"
                >
                  {data.jewellery.map((item, idx) => (
                    <a
                      href="#"
                      key={idx}
                      className="block px-6 py-2 text-black hover:text-amber-700 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Direct Links */}
          {data.directLinks.map((link, idx) => (
            <a
              href="#"
              key={idx}
              className="hover:text-amber-700 font-medium transition-colors cursor-pointer block py-2"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="  text-gray-600 p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "calc(100vh - 72px)", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="
        lg:hidden 
        overflow-hidden
        bg-white/10  w-[95vw] text-[1.5vh]
      "
          >
            <div className="w-full overflow-y-mobile-scroll-hidden h-full overflow-y-auto px-6 py-6 flex flex-col gap-6">

              {/* Gemstones */}
              <div className="w-full flex flex-col items-start">
                <div className="font-semibold text-black mb-2 ">Gemstones</div>
                <div id="subGemStones" className="flex ml-2 gap-4 w-[90%]">
                  <div className="flex flex-col gap-2 text-black/50 ">
                    <h1 className="text-black/60">Popular Vedic Gems</h1>
                    {data.popularVedicGems.map((gem, idx) => (
                      <a key={idx} href="#" className="translate-x-4 hover:text-black/70 hover:translate-x-2 transition">
                        {gem}
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 text-black/50 ">
                    <h1 className="text-black/60">Zodiac Stones</h1>
                    {data.zodiacStones.map((gem, idx) => (
                      <a key={idx} href="#" className="translate-x-4 hover:text-black/70 hover:translate-x-2 transition">
                        {gem}
                      </a>
                    ))}
                  </div>
                </div>
                <div id="subGemStones" className="flex ml-2 gap-4 w-[90%]">
                  <div className="flex flex-col gap-2 text-black/50 ">
                    <h1 className="text-black/60">Exclusive Gem Stones</h1>
                    {data.exclusiveGemstones.map((gem, idx) => (
                      <a key={idx} href="#" className="translate-x-4 hover:text-black/70 hover:translate-x-2 transition">
                        {gem}
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 text-black/50 ">
                    <h1 className="text-black/60">Other Gem Stones</h1>
                    {data.otherGemstones.map((gem, idx) => (
                      <a key={idx} href="#" className="translate-x-4 hover:text-black/70 hover:translate-x-2 transition">
                        {gem}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Jewellery */}
              <div>
                <div className="font-semibold text-gray-800 mb-2">Jewellery</div>
                <div className=" flex flex-col gap-2 text-gray-600">
                  {data.jewellery.map((item, idx) => (
                    <a key={idx} className="translate-x-4 text-black/50 hover:translate-x-2 duration-200 hover:text-black/70" href="#">
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-4 font-semibold text-gray-800">
                {data.directLinks.map((link, idx) => (
                  <a key={idx} href="#">
                    {link}
                  </a>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
