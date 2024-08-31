import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import imj from "../../assets/2r.png" 

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

  const navItems = ['Home', 'Work', 'Services'];
  const connectItems = ['Instagram', 'LinkedIn'];
  const visitItems = ['Egypt, Cairo', 'Egypt, Ismailia', 'England, London', 'South Korea, Seoul'];

  return (
    <footer className="bg-[#fae6b6] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Website Logo Section */}
          <div className="relative flex items-center justify-center">
            <img src={imj} alt="Logo" className="h-[100px]" />
<h2 className='text-[40px]'>Vanilla</h2>
            <div className="hidden md:block absolute right-0 top-0 h-full w-[1px] bg-black"></div>
          </div>

          {/* Connect Section with Nav Items */}
          <div className="relative">
            <h2 className="text-[25px] font-Inter font-semibold mb-4">(Connect)</h2>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index} className="relative group overflow-hidden block ">
                  <motion.a
                    href="#"
                    className="relative text-[50px] font-semibold font-Inter leading-none inline-block"
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
            <div className="hidden md:block absolute right-0 top-0 h-full w-[1px] bg-black"></div>
          </div>

          {/* Visit Us Section */}
          <div className="relative">
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

        <hr className='bg-black w-full h-[1px]' />

        <div className="mt-8 pt-8flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">All rights reserved©Vanilla 2024</p>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className='text-[45px] mr-[765px] mt-[-21px]' width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5Z"/></svg> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
