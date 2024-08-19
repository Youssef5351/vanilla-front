import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "../../index.css";

const SmoothScroll = ({ children }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const scroller = {
      target: scrollContainerRef.current,
      ease: 0.4,
      endY: 0,
      y: 0,
      resizeRequest: 1,
      scrollRequest: 0,
    };

    let requestId = null;

    gsap.set(scroller.target, {
      rotation: 0.01,
      force3D: true,
    });

    const updateScroller = () => {
      const resized = scroller.resizeRequest > 0;

      if (resized) {
        const height = scroller.target.clientHeight;
        body.style.height = `${height}px`;
        scroller.resizeRequest = 0;
      }

      const scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

      scroller.endY = scrollY;
      scroller.y += (scrollY - scroller.y) * scroller.ease;

      if (Math.abs(scrollY - scroller.y) < 0.1 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
      }

      gsap.to(scroller.target, {
        y: -scroller.y,
        ease: 'power2.out',
        overwrite: 'auto',
        duration: 0.8,
      });

      requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    };

    const onScroll = () => {
      scroller.scrollRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    };

    const onResize = () => {
      scroller.resizeRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    };

    updateScroller();
    window.addEventListener('resize', onResize);
    document.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('scroll', onScroll);
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className="scroll-container">
      {children}
    </div>
  );
};

export default SmoothScroll;
