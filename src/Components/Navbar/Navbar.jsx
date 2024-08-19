import React, { useEffect, useState, useRef } from "react";
import "../../index.css";
import { Link } from 'react-router-dom';
import beautify from "../../assets/1r.png";
import newLogo from "../../assets/2r.png";

const menuItems = [
  { name: 'Home', href: '/', backgroundColorClass: 'bg-FA5C40' },
  { name: 'About', href: '/about', backgroundColorClass: 'bg-33FF57' },
  { name: 'Projects', href: '/projects', backgroundColorClass: 'bg-5733FF' },
  { name: 'Contact', href: '/contact', backgroundColorClass: 'bg-33B8FF' },
];

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
  
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`nav-wrapper ${scrolled ? 'scrolled' : 'hidden'}`}>
        <div
          onClick={() => setIsActive(!isActive)}
          className={`menu-button left-0 w-20 h-20 rounded-full border border-black oling cursor-pointer flex items-center justify-center relative group z-[50] ${scrolled ? 'scrolled' : ''} ${isActive ? 'active' : ''}`}
        >
          <div className={`w-8 h-6 relative bg-transparent ${isActive ? 'burger-active' : ''}`}>
            <span className="menu-span absolute w-full h-high bg-black top-six transition-all duration-500"></span>
            <span className="menu-span absolute w-full h-high bg-black bottom-2 transition-all duration-500"></span>
          </div>
          <span className="absolute text-base font-medium font-Inter text-black cursor-pointer ml-nine transition-transform duration-300 transform group-hover:-translate-x-12">
            Menu
          </span>
        </div>
        <div className="flex justify-center items-center">
          <a href="/">
            <img
              src={newLogo}
              className={`h-half adding top-0 ml-mm rounded-full transition-all duration-500 ease-in-out ${scrolled ? 'scrolled opacity-100 scale-100' : 'opacity-0 scale-40'}`}
              alt="Logo"
            />
          </a>
        </div>
        <div className={`flex justify-end transform6456 ${scrolled ? 'scrolled' : ''}`}>
  <button
    onClick={() => window.location.href = '/signup'}
    className={`px-8 py-3 hardy rounded-7px border-1 border-[#D0D0D0] hover-button group overflow-hidden absolute mt-[40px] hover:border-transparent transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}
  >
    <span className="block transition-transform duration-300 ease-custom transform group-hover:-translate-y-full hover:border-none">
      Sign Up
    </span>
    <span className="absolute inset-0 flex items-center justify-center text-white bg-orange1 rounded-7px transform translate-y-full transition-transform duration-300 ease-custom group-hover:translate-y-0 overflow-hidden">
      <span className="whitespace-nowrap animate-scroll">
        <span className="inline-block">
          {Array(15).fill("Sign Up ").map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </span>
        <span className="inline-block">
          {Array(15).fill("Sign Up ").map((text, index) => (
            <span key={index + 10}>{text}</span>
          ))}
        </span>
      </span>
    </span>
  </button>
</div>

      </div>
  
<div
          className={`fixed top-0 left-0 right-0 bottom-0 h-screen w-[105%] bg-[#eeeeee] z-40 flex items-center justify-center overflow-hidden transition-transform duration-750 ${
            isActive ? 'translate-x-0' : '-translate-x-full'
          }`}
        >

          <div className="text-black flex flex-col items-start">
          <div
          onClick={() => setIsActive(!isActive)}
          className={`menu-button left-0 w-20 h-20 rounded-full border border-black cursor-pointer flex items-center justify-center relative group z-[50] ${scrolled ? 'scrolled' : ''} ${isActive ? 'active' : ''}`}
        >
          <div className={`w-8 h-6 relative bg-transparent ${isActive ? 'burger-active' : ''}`}>
            <span className="menu-span absolute w-full h-high bg-black top-six transition-all duration-500"></span>
            <span className="menu-span absolute w-full h-high bg-black bottom-2 transition-all duration-500"></span>
          </div>
          <span className="absolute text-base font-medium font-Inter text-black cursor-pointer ml-nine transition-transform duration-300 transform group-hover:-translate-x-12">
            Menu
          </span>
        </div>
            {menuItems.map((item, i) => (
              <button
                key={i}
                className={`text-55px mb-6 ml-80 font-Inter font-medium hover-button relative group ${item.backgroundColorClass} transition-all duration-800 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Link
                  to={item.href}
                  className="hover-text text-55px inline-block transition-all duration-500 ease-in-out relative"
                >
                  {item.name}
                  <span className="scroll-text" aria-hidden="true">
                    <span className="scroll-text-inner">
                      {Array(9).fill(item.name).map((name, index) => (
                        <span key={index} className="scroll-text-item">{name}</span>
                      ))}
                    </span>
                    <span className="scroll-text-inner">
                      {Array(9).fill(item.name).map((name, index) => (
                        <span key={index + 9} className="scroll-text-item">{name}</span>
                      ))}
                    </span>
                  </span>
                </Link>
              </button>
            ))}
          </div>
        </div> 

    </>
  );
}


// --------------------------------------------------------------------------------------------------------------------------
        {/* <div
          className={`fixed top-[-20px] left-[-20px] right-0 bottom-0 h-screen w-[105%] bg-[#eeeeee] z-40 flex items-center justify-center overflow-hidden transition-transform duration-750 ${
            isActive ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="text-black flex flex-col items-start">
            {menuItems.map((item, i) => (
              <button
                key={i}
                className={`text-55px mb-6 ml-80 font-Inter font-medium hover-button relative group ${item.backgroundColorClass} transition-all duration-800 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Link
                  to={item.href}
                  className="hover-text text-55px inline-block transition-all duration-500 ease-in-out relative"
                >
                  {item.name}
                  <span className="scroll-text" aria-hidden="true">
                    <span className="scroll-text-inner">
                      {Array(9).fill(item.name).map((name, index) => (
                        <span key={index} className="scroll-text-item">{name}</span>
                      ))}
                    </span>
                    <span className="scroll-text-inner">
                      {Array(9).fill(item.name).map((name, index) => (
                        <span key={index + 9} className="scroll-text-item">{name}</span>
                      ))}
                    </span>
                  </span>
                </Link>
              </button>
            ))}
          </div>
        </div> */}

        // -------------------------------------
              {/* Menu overlay */}
      {/* <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`fixed inset-y-0 left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isActive ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <nav className="p-96">
            <ul className="bg-red-500">
              {menuItems.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.href}
                    className={`block p-2 rounded ${item.backgroundColorClass} text-white transition-colors duration-200`}
                    onClick={() => setIsActive(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div> */}