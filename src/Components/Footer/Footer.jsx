import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
  const bodyRef = useRef(null);
  const isInView = useInView(bodyRef, { once: true, margin: "-20%" });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartAnimation(true);
    }
  }, [isInView]);

  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: i * 0.1 }
    })
  };

  const navItems = ['Home', 'Work', 'Services', 'About', 'Contact'];
  const connectItems = ['Instagram', 'LinkedIn'];
  const visitItems = ['Egypt, Cairo', 'Egypt, Ismailia', 'England, London', 'South Korea, Seoul'];

  return (
    <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-[25px] font-Inter font-semibold mb-4">(Navigate)</h2>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index} className="relative group overflow-hidden">
                  <motion.a
                    href="#"
                    className="relative text-[60px] font-semibold font-Inter leading-none inline-block"
                    custom={index}
                    variants={animation}
                    initial="initial"
                    animate={startAnimation && isInView ? "enter" : "initial"}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-full h-[0.3rem] bg-gray-800 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:h-[0.3rem]"></span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[25px] font-Inter font-semibold mb-4">(Connect)</h2>
            <ul className="space-y-2">
              {connectItems.map((item, index) => (
                <li key={index} className="relative group overflow-hidden">
                  <motion.a
                    href="#"
                    className="relative text-[60px] font-semibold font-Inter leading-none block"
                    custom={index + navItems.length}
                    variants={animation}
                    initial="initial"
                    animate={startAnimation && isInView ? "enter" : "initial"}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-full h-[0.3rem] bg-gray-800 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:h-[0.3rem]"></span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[25px] font-Inter font-semibold mb-4">(Visit us)</h2>
            <ul className="space-y-2" ref={bodyRef}>
              {visitItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="text-[30px] font-semibold font-Inter leading-normal overflow-hidden"
                  custom={index + navItems.length + connectItems.length}
                  variants={animation}
                  initial="initial"
                  animate={startAnimation && isInView ? "enter" : "initial"}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">All rights reserved©Flow 2024</p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:underline">Privacy Policy</a>
            <span className="mx-2 text-gray-500">/</span>
            <a href="#" className="text-sm text-gray-500 hover:underline">Terms</a>
          </div>
          <a href="#" className="mt-4 sm:mt-0 text-sm text-gray-500 hover:underline">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;