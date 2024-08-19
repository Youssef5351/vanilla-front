'use client'
import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase = "All our ice creams are crafted with premium ingredients, made with care to deliver the finest quality and flavor in every scoop.";

const FabricSection = () => {
  const letterRefs = useRef([]);
  const container = useRef(null);
  const labelRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timer = setTimeout(() => {
      createAnimation();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const createAnimation = () => {
    const letters = gsap.utils.toArray(letterRefs.current);
    gsap.set(letters, { opacity: 0.2 });

    letters.forEach((letter, index) => {
      gsap.to(letter, {
        scrollTrigger: {
          trigger: container.current,
          start: `top+=${index * 5} center`,
          end: `top+=${(index + 1) * 5} center`,
          scrub: 0.1,
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        duration: 0.1,
        ease: "none",
      });
    });

    gsap.from(labelRef.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: "33% center",
        scrub: true,
      },
      y: 50,
      opacity: 0,
    });

    gsap.from(buttonRef.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "33% center",
        end: "66% center",
        scrub: true,
      },
      y: 50,
      opacity: 0,
    });
  };

  const splitLetters = (phrase) => {
    return phrase.split("").map((char, i) => {
      if (char === " ") {
        return <span key={i} className="inline-block" style={{ width: '0.5em' }}>&nbsp;</span>;
      }
      return (
        <span
          key={i}
          ref={(el) => { letterRefs.current[i] = el; }}
          className="inline-block transition-opacity duration-[300]"
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div ref={container} className="relative h-screen">
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 bg-[#D0D28E]">
        <div
          ref={labelRef}
          className="border-1 border-white bg-transparent text-white font-DMSans font-semibold px-3 py-1 rounded-full mb-4"
        >
          Our Fabrics
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center max-w-3xl leading-tight font-Inter text-white">
          {splitLetters(phrase)}
        </h2>
        <button
          ref={buttonRef}
          className="mt-8 bg-transparent text-white px-6 py-2 border-b-1 border-white font-semibold"
        >
          ALL FABRICS
        </button>
      </div>
    </div>
  );
};

export default FabricSection;