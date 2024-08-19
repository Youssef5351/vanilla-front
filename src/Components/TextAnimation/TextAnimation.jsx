'use client'
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase = "Indulge in our premium ice cream crafted with the finest ingredients, offering a delightful variety of flavors and textures.";

export default function Home() {
  const letterRefs = useRef([]);
  const container = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timer = setTimeout(() => {
      createAnimation();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const createAnimation = () => {
    const letters = gsap.utils.toArray(letterRefs.current);
    gsap.set(letters, { opacity: 0.2 }); // Set initial state to very light gray

    gsap.to(letters, {
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: "bottom center",
        scrub: 0.5, // Reduced from 1 to 0.5 for faster response to scrolling
      },
      opacity: 1,
      ease: "power2.out", // Changed to power2 for a slightly quicker ease
      duration: 0.8, // Reduced from 1.3 to 0.8
      stagger: 0.03, // Significantly reduced from 1 to 0.03 for much faster letter reveal
    });
  };


  const splitLetters = (phrase) => {
    return phrase.split("").map((char, i) => {
      // Return a space element with fixed width if the character is a space
      if (char === " ") {
        return <span key={i} className="inline-block" style={{ width: '0.4em' }}>&nbsp;</span>;
      }
      return (
        <span
          key={i}
          ref={(el) => { letterRefs.current[i] = el; }}
          className="inline-block transition-opacity duration-500 ease-in-out text-6xl font-medium"
        >
          {char}
        </span>
      );
    });
  };

  return (
    <main ref={container} className="relative flex flex-col justify-center min-h-screen bg-white text-black p-8">
      <div className="relative flex flex-wrap items-center">
        <div className="max-w-5xl text-[50px] text-[#464141] flex flex-wrap items-center ml-[20rem]">
          {splitLetters(phrase)}
        </div>
        <div ref={borderRef} className='absolute top-0 left-0 mt-2 ml-20 px-3 py-1 bg-transparent border-1 border-black rounded-full inline-flex justify-center items-center transition-all duration-700 hover:bg-black hover:text-white'>
          About Us
        </div>
      </div>
    </main>
  );
}
