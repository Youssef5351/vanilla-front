import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import "../../index.css";
import iceCream from "../../assets/iceCream.mp4";

const phrases = [
  "Shaping Tomorrow's",
  "Digital Landscape with",
  "Unmatched Creativity",
  "and Precision."
];

const LandingPage = () => {
  const videoRef = useRef(null);
  const isVideoInView = useInView(videoRef, { once: true });
  const bodyRef = useRef(null);
  const isInView = useInView(bodyRef, { once: true });
  const [startAnimation, setStartAnimation] = useState(false);
  const [startFlowAnimation, setStartFlowAnimation] = useState(false);
  const [showCursor, setShowCursor] = useState(false); // State to manage cursor visibility
  const cursorX = useMotionValue(window.innerWidth / 2 - 450);
  const cursorY = useMotionValue(window.innerHeight * 0.4);
  const springConfig = { damping: 55, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);



  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 700);

    const flowTimer = setTimeout(() => {
      setStartFlowAnimation(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(flowTimer);
    };
  }, []);

  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] }
    })
  };

  const flowAnimation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 * i }
    })
  };

  const videoAnimation = {
    initial: { opacity: 0, x: -700 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 1.7 }
    }
  };

  return (
    <div className='LandingPage relative h-screen overflow-hidden bg-white'>
      <motion.div 
        ref={videoRef}
        className="absolute top-0 left-0 w-1/2 h-full z-0 overflow-hidden"
        variants={videoAnimation}
        initial="initial"
        animate={isVideoInView ? "animate" : "initial"}
        onAnimationComplete={() => setShowCursor(true)} // Show cursor after video animation completes
      >
        <div className="relative w-[145%] h-full overflow-hidden">
          <video 
            src={iceCream}
            className="absolute top-0 left-0 w-[400%] h-full object-cover"
            style={{ transform: 'translateX(-30%)' }}
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute bottom-0 right-0 w-[70%] h-[35%] bg-white origin-bottom-left z-20"></div>
        </div>
      </motion.div>

      <div className='relative z-30 h-full flex flex-col justify-end items-end pr-10 pb-20'>
        <div ref={bodyRef} className="text-[50px] tracking-[-0.025em] leading-[1.2] mb-[30px] mr-[30px]">
          {phrases.map((phrase, index) => (
            <div key={index} className="overflow-hidden">
              <motion.p
                custom={index}
                variants={animation}
                initial="initial"
                animate={startAnimation && isInView ? "enter" : "initial"}
                className="m-1 font-medium"
              >
                {phrase}
              </motion.p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[240px] right-[630px] w-[22%] h-[35%] bg-white z-20"></div>

        <div className='text-[291px] mb-[-170px] mr-[-50px] font-brigends font-medium mt-[-4rem] text-black'>
          {["C", "O", "N", "E"].map((letter, index) => (
            <motion.h1
              key={index}
              className='relative inline-block'
              initial="initial"
              animate={startFlowAnimation && isInView ? "enter" : "initial"}
              variants={flowAnimation}
              custom={index}
            >
              {letter}
            </motion.h1>
          ))}
        </div>
      </div>
{/* 
      {showCursor && ( // Conditionally render cursor based on `showCursor` state
        <motion.a
          href={iceCream}
          className="absolute text-center text-white text-[20px] z-20 mix-blend-exclusion"
          style={{
            position: 'fixed',
            left: cursorXSpring,
            top: cursorYSpring,
            transform: 'translate(-50%, -50%)',
            textDecoration: 'none',
            cursor: 'pointer',
            pointerEvents: 'none'  // Ensures the link doesn't interfere with other elements
          }}
        >
          Play Video<br />(00:11)
        </motion.a>
      )} */}
    </div>
  );
}

export default LandingPage;
