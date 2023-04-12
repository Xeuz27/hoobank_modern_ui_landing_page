import React from "react";
import {motion} from 'framer-motion'

const item = {
  hidden: { opacity: 0},
  show: { opacity: 1},
};

const Button = ({ styles }) => (
  <motion.button 
  initial="hidden"
      variants={item}
      animate='show'
  type="button" 
  className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Get Started
  </motion.button>
);

export default Button;
