import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyle =
    "relative overflow-hidden group font-medium rounded-sm transition-all duration-500 inline-block text-center cursor-pointer";

  const variants = {
    primary: "bg-primary text-light hover:bg-opacity-90",
    secondary: "bg-secondary text-white hover:bg-opacity-90",
    cta: "bg-cta text-white hover:bg-opacity-90",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-light",
  };

  return (
    <motion.button
      className={`
    ${baseStyle} 
    ${variants[variant]} 
    ${className} 
    overflow-hidden
  `}
      {...props}
    >
      <div className="w-full flex justify-center items-center h-full group">
        <div className="text-xl h-6 flex flex-col overflow-hidden px-2 rounded-full">
        <div className="group-hover:-translate-y-[50%] text-sm duration-300 flex justify-center  flex-col">
          <h1 className="font-semibold flex items-center justify-between ">
            <span> {children}</span>{" "}
            <span className="text-xl pt-1"> </span>{" "}
          </h1>
          <h1 className="font-semibold flex items-center justify-between">
            <span> {children}</span>{" "}
            <span className="text-xl pt-1 "> </span>{" "}
          </h1>
        </div>
      </div>

      </div>
    </motion.button>
  );
};

export default Button;
