"use client"
import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import HeroSection from '@/components/hero'

const heroData = [
  {
    name: "Sigiriya",
    background: "/images/hero/sigiriya-background.png",
    top: "/images/hero/sigiriya.png",
    className_bg: "z-10 blur-[1.3px]",
    className_text: "z-40 absolute p-10 top-[-10%] md:top-[-7%] lg:top-[-5%]",
    className_top: "z-50 mt-10 md:mt-14 lg:mt-20",
  },
  {
    name: "Fishing",
    background: "/images/hero/fishing-background.png",
    top: "/images/hero/fishing-top.png",
    className_bg: "z-10 blur-[0px]",
    className_text: "z-40 absolute p-10 top-[10%]",
    className_top: "z-50 mt-0",
  },
  {
    name: "Colombo 1",
    background: "/images/hero/colombo-background-1.png",
    top: "/images/hero/colombo-top-1.png",
    className_bg: "z-10 blur-[0px]",
    className_text: "z-40 absolute p-10 top-[-7%] md:top-[0%]",
    className_top: "z-50 mt-0",
  },
  {
    name: "Colombo 2",
    background: "/images/hero/colombo-background-2.png",
    top: "/images/hero/colombo-top-2.png",
    className_bg: "z-10 blur-[0px]",
    className_text: "z-40 absolute p-10 top-[0%] md:top-[4%] lg:top-[7%]",
    className_top: "z-50 mt-0",
  },
  {
    name: "Elephants",
    background: "/images/hero/elephant-background.png",
    top: "/images/hero/elephant-top.png",
    className_bg: "z-10 blur-[0px]",
    className_text: "z-40 absolute p-10 top-[0%]",
    className_top: "z-50 mt-[14%] md:mt-[10%]",
  }
];

const AnimatedHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cycleKey, setCycleKey] = useState(0); // Forces animations to restart

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroData.length);
      setCycleKey((prev) => prev + 1); // Change key to force re-animation
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <HeroSection 
          key={cycleKey} // Forces re-render
          cycleKey={cycleKey} // Pass to HeroSection
          background={heroData[currentIndex].background}
          top={heroData[currentIndex].top}
          className_bg={heroData[currentIndex].className_bg}
          className_text={heroData[currentIndex].className_text}
          className_top={heroData[currentIndex].className_top}
        />
      </AnimatePresence>
    </div>
  )
}

export default AnimatedHero
