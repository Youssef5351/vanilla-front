import React from "react";
import morrisons from "../../assets/morrisons.svg";
import NafNaf from "../../assets/Naf-naf.svg";
import newLook from "../../assets/new-look.svg";
import Next from "../../assets/Next.svg";
import sainsburys from "../../assets/sainsburys.svg";
import shopDirect from "../../assets/shop-direct.svg";
import Tesco from "../../assets/Tesco.svg";

const Providers = () => {
  const logos = [
    { src: morrisons, alt: "Morrisons" },
    { src: NafNaf, alt: "NafNaf" },
    { src: newLook, alt: "New Look" },
    { src: Next, alt: "Next" },
    { src: sainsburys, alt: "Sainsbury's" },
    { src: shopDirect, alt: "Shop Direct" },
    { src: Tesco, alt: "Tesco" },
  ];

  return (
    <section className="relative overflow-hidden pt-40 bg-white">
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-36 h-full "></div>
      <div className="absolute top-0 right-0 w-36 h-full "></div>

      {/* Scrolling container */}
      <div className="flex overflow-hidden">
        <div className="flex animate-slide gap-20">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative w-40 h-40 group"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain filter grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Providers;
