import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Importing images
import image1 from '../../assets/1.webp';
import image2 from '../../assets/2.webp';
import image3 from '../../assets/8.webp';
import image4 from '../../assets/4.webp';
import image5 from '../../assets/5.webp';
import image6 from '../../assets/8.webp';
import image7 from '../../assets/7.webp';
import image8 from '../../assets/8.webp';
import image9 from '../../assets/9.webp';
import image10 from '../../assets/10.webp';
import image11 from '../../assets/11.webp';
import image12 from '../../assets/11.webp';

const images = [
  image1, image2, image3, image4,
  image5, image6, image7, image8,
  image9, image10, image11, image12
];

export default function MaskScroll() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  // Apply spring physics to our parallax effects
  const springConfig = { stiffness: 300, damping: 30, mass: 1 };
  const ySmooth = useSpring(y, springConfig);
  const y2Smooth = useSpring(y2, springConfig);
  const y3Smooth = useSpring(y3, springConfig);
  const y4Smooth = useSpring(y4, springConfig);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="h-[30vh]"></div>
<h2 className='flex justify-center items-center text-[60px] mb-[34px] text-black'>Journals</h2>
      <div ref={gallery} className="h-[175vh] overflow-hidden bg-[rgb(45,45,45)]">
        <div className="relative -top-[12.5vh] h-[200vh] flex gap-[2vw] p-[2vw]">
          <Column images={images.slice(0, 3)} y={ySmooth} offset="-30%" />
          <Column images={images.slice(3, 6)} y={y2Smooth} offset="-70%" />
          <Column images={images.slice(6, 9)} y={y3Smooth} offset="-30%" />
          <Column images={images.slice(9, 12)} y={y4Smooth} offset="-60%" />
        </div>
      </div>
      <div className="h-[30vh]"></div>
    </main>
  );
}

const Column = ({ images, y, offset }) => {
  const imageHeight = `calc(33% - 10px)`; // Subtract 5px to account for the gap

  return (
    <motion.div
      className="relative h-full w-1/4 min-w-[250px] flex flex-col gap-[5px] whitespace-nowrap"
      style={{ y, top: offset }}
    >
      {images.map((src, i) => (
        <motion.div 
          key={i} 
          className="absolute w-full rounded-[1vw] overflow-hidden" 
          style={{ 
            top: `calc(${i} * (33% + 5px))`, // Add 5px to the top position for each image
            height: imageHeight
          }}
          initial={{ opacity: 1}}
          whileInView={{ opacity: 1}}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={src}
            alt={`Gallery image ${i + 1}`}
            className="object-cover w-full h-full"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
