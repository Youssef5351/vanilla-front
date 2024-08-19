import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const InfiniteScroll = () => {
  const sectionsRef = useRef([]);
  const containerRef = useRef();
  const scrollSpeed = 0.8;
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for down, -1 for up

  useEffect(() => {
    const sections = sectionsRef.current;
    const container = containerRef.current;

    const totalWidth = sections[0].offsetWidth * sections.length;
    const modifier = gsap.utils.wrap(-totalWidth, 0);

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none", duration: totalWidth / 50 },
      paused: true
    });

    tl.to(sections, {
      x: `-=${totalWidth}`,
      modifiers: {
        x: (x) => modifier(parseFloat(x)) + "px"
      }
    });

    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
    let lastScrollTime = Date.now();
    let animationPaused = false;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const currentTime = Date.now();
      const direction = scrollTop > lastScrollTop ? 1 : -1;
      const scrollDelta = Math.abs(scrollTop - lastScrollTop);
      const timeDelta = currentTime - lastScrollTime;
      const speed = scrollDelta / timeDelta;

      // Update scroll direction state
      setScrollDirection(direction);

      // Smoothly adjust the timeScale based on the speed of scrolling
      const newTimeScale = direction * Math.max(1, speed * 10); // 10 is an arbitrary factor to scale the speed
      gsap.to(tl, { timeScale: newTimeScale, duration: 0.5, ease: "power2.out" });

      lastScrollTop = scrollTop;
      lastScrollTime = currentTime;

      // If animation was paused due to lack of scroll, resume it
      if (animationPaused) {
        tl.resume();
        animationPaused = false;
      }
    };

    const onScroll = () => {
      handleScroll();
      requestAnimationFrame(() => {
        if (!animationPaused && (Date.now() - lastScrollTime) > 200) {  // 200 ms to pause animation
          tl.pause();
          animationPaused = true;
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    tl.play();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden w-full h-[150px] flex items-center justify-start bg-[#f3f3f3] mt-[100px] mb-[75px]" ref={containerRef}>
      {[...Array(20)].map((_, i) => (
        <section
          className="demo-text inline-block mx-4" // Adding margin-x to create space
          key={i}
          ref={el => (sectionsRef.current[i] = el)}
        >
          <div className="flex items-center text-4xl font-pp-extended-medium whitespace-nowrap">
            <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[2.3rem] mt-[-5px]" style={{ position: 'relative', transform: `rotate(${scrollDirection === 1 ? '270deg' : '90deg'}) scaleY(1)`, transition: 'transform 0.7s cubic-bezier(0.5, 0.5, 0, 1)' }}>
              <path d="M2.57144 10.4286V10.4286C7.77616 10.4286 12.0087 6.20471 12 1V1V1C11.9913 6.20471 16.2239 10.4286 21.4286 10.4286V10.4286" stroke="black" strokeWidth="2"></path>
              <path d="M12 23V1" stroke="black" strokeWidth="2"></path>
            </svg>
            Taste Change
          </div>
        </section>
      ))}
    </div>
  );
};

export default InfiniteScroll;
