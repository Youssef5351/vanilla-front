import React, { useState, useEffect } from 'react';
import '../../index.css';

const EarthAnimation = () => {
  const [frontWidths, setFrontWidths] = useState([40.8266, 28.3266, 15.8266, 3.3266]);
  const [backWidths, setBackWidths] = useState([9.1734, 21.6734, 34.1734, 46.6734]);

  useEffect(() => {
    const widthInterval = setInterval(() => {
      setFrontWidths(prevWidths => prevWidths.map(w => w + (Math.random() - 0.5) * 2));
      setBackWidths(prevWidths => prevWidths.map(w => w + (Math.random() - 0.5) * 2));
    }, 1000);

    return () => {
      clearInterval(widthInterval);
    };
  }, []);

  return (
    <section className="section-globe">
      <div className="globe-wrapper">
        <div className="globe">
          <div className="overlay back">
            <svg className="w-full h-full" viewBox="0 0 502 502" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="251" cy="251" r="250" stroke="#000" />
              <ellipse cx="251" cy="251" rx="250" ry="70" stroke="#000" />
              <ellipse cx="251" cy="370.5" rx="216" ry="59.5" stroke="#000" />
              <path d="M374.646 468.332L374.893 468.767L375.005 468.703L375.073 468.592L374.646 468.332ZM127.354 468.332L126.927 468.592L126.995 468.703L127.107 468.767L127.354 468.332ZM374.398 467.898C338.008 488.646 295.889 500.5 251 500.5V501.5C296.067 501.5 338.356 489.598 374.893 468.767L374.398 467.898ZM251 500.5C206.111 500.5 163.992 488.646 127.602 467.898L127.107 468.767C163.644 489.598 205.933 501.5 251 501.5V500.5ZM127.781 468.072C126.277 465.604 125.5 463.074 125.5 460.5H124.5C124.5 463.285 125.342 465.992 126.927 468.592L127.781 468.072ZM125.5 460.5C125.5 455.135 128.883 449.937 135.204 445.134C141.518 440.336 150.685 435.994 162.058 432.338C184.797 425.029 216.243 420.5 251 420.5V419.5C216.169 419.5 184.615 424.037 161.752 431.386C150.323 435.06 141.038 439.445 134.599 444.337C128.169 449.224 124.5 454.681 124.5 460.5H125.5ZM251 420.5C285.757 420.5 317.203 425.029 339.942 432.338C351.315 435.994 360.482 440.336 366.796 445.134C373.117 449.937 376.5 455.135 376.5 460.5H377.5C377.5 454.681 373.831 449.224 367.401 444.337C360.962 439.445 351.677 435.06 340.248 431.386C317.385 424.037 285.831 419.5 251 419.5V420.5ZM376.5 460.5C376.5 463.074 375.723 465.604 374.219 468.072L375.073 468.592C376.658 465.992 377.5 463.285 377.5 460.5H376.5Z" fill="#000" />
              <path d="M127.354 33.6678L127.107 33.2334L126.995 33.2973L126.927 33.4075L127.354 33.6678ZM374.646 33.6678L375.073 33.4075L375.005 33.2973L374.893 33.2334L374.646 33.6678ZM127.602 34.1021C163.992 13.354 206.111 1.49999 251 1.49999L251 0.499989C205.933 0.499985 163.644 12.4015 127.107 33.2334L127.602 34.1021ZM251 1.49999C295.889 1.49999 338.008 13.354 374.398 34.1021L374.893 33.2334C338.356 12.4015 296.067 0.499993 251 0.499989L251 1.49999ZM374.219 33.928C375.723 36.3961 376.5 38.9258 376.5 41.5L377.5 41.5C377.5 38.7152 376.658 36.0076 375.073 33.4075L374.219 33.928ZM376.5 41.5C376.5 46.8651 373.117 52.0626 366.796 56.8663C360.482 61.6641 351.315 66.0063 339.942 69.6618C317.203 76.971 285.757 81.5 251 81.5L251 82.5C285.831 82.5 317.385 77.9627 340.248 70.6138C351.677 66.9403 360.962 62.5554 367.401 57.6625C373.831 52.7756 377.5 47.3187 377.5 41.5L376.5 41.5ZM251 81.5C216.243 81.5 184.797 76.971 162.058 69.6618C150.685 66.0063 141.518 61.6641 135.204 56.8663C128.883 52.0625 125.5 46.865 125.5 41.5L124.5 41.5C124.5 47.3187 128.169 52.7756 134.599 57.6625C141.038 62.5554 150.323 66.9403 161.752 70.6138C184.615 77.9627 216.169 82.5 251 82.5L251 81.5ZM125.5 41.5C125.5 38.9258 126.277 36.396 127.781 33.928L126.927 33.4075C125.342 36.0075 124.5 38.7152 124.5 41.5L125.5 41.5Z" fill="#000" />
              <ellipse cx="251" cy="130.5" rx="216" ry="59.5" stroke="#000" />
            </svg>
          </div>
          <div className="overlay front">
            {frontWidths.map((width, index) => (
              <div key={index} className={`overlay circle circle-${index + 1}`} style={{ width: `calc(${width}% + 0.2008px)` }}>
                <div className="overlay circle-inner"></div>
              </div>
            ))}
          </div>
          <div className="overlay front duplicate">
            {backWidths.map((width, index) => (
              <div key={index} className={`overlay circle circle-${index + 5}`} style={{ width: `calc(${width}% + 0.2008px)` }}>
                <div className="overlay circle-inner"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-wrapper">
  <h2>
    <div className="line">
      <div className="relative inline-block word">
        <div className="font-pp-condensed-black text-[#C6BE28] text-[158px] uppercase">WORLD'S</div>
      </div>
      <div className="relative inline-block word">
        <div className="font-pp-condensed-black text-[#C6BE28] text-[158px] uppercase">BEST</div>
      </div>
    </div>
    <div className="line">
      <div className="relative inline-block word">
        <div className="font-pp-condensed-black text-[#C6BE28] text-[158px] uppercase">ICE</div>
      </div>
      <div className="relative inline-block word">
        <div className="font-pp-condensed-black text-[#C6BE28] text-[158px] uppercase">CREAM</div>
      </div>
    </div>
  </h2>
</div>
      </div> 

    </section>
  );
};

export default EarthAnimation;
