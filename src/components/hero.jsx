"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'


// Need to fix the parallax image otherwise the images are going off the alignments
const HeroSection = ({ background, top, className_bg, className_text, className_top, cycleKey }) => {
  const { scrollY } = useScroll();

  // Parallax effect
  const bgY = useTransform(scrollY, [0, 500], [0, -50]);
  const textY = useTransform(scrollY, [0, 500], [0, -100]);
  const topY = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <motion.div 
      key={cycleKey} // Ensures animations restart every cycle
      className="relative w-full max-w-dvw mx-auto aspect-[16/9] overflow-hidden"
      initial={{ x: '100%' }} 
      animate={{ x: '0%' }} 
      exit={{ x: '-100%' }} 
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Background Image (Parallax & Slide Animation) */}
      <motion.div style={{ y: bgY }} className={`absolute w-full h-full z-10 ${className_bg}`}>
        <Image 
          src={background} 
          layout="fill"
          objectFit="cover"
          className="blur-[1.3px]"
          alt="Background"
        />
      </motion.div>

      {/* Text Image (Falls from top) */}
      <motion.div 
        key={`text-${cycleKey}`} 
        style={{ y: textY }} 
        initial={{ y: '-100%', opacity: 0 }} 
        animate={{ y: '0%', opacity: 1 }} 
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`absolute w-full h-full z-40 ${className_text}`}
      >
        <Image 
          src={'/images/hero/text.png'} 
          width={1366}
          height={768}
          objectFit="contain"
          alt="Text"
        />
      </motion.div>

      {/* Top Image (Rises from bottom) */}
      <motion.div 
        key={`top-${cycleKey}`}
        style={{ y: topY }} 
        initial={{ y: '100%', opacity: 0 }} 
        animate={{ y: '0%', opacity: 1 }} 
        exit={{ y: '100%', opacity: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className={`absolute w-full h-full z-50 ${className_top}`}
      >
        <Image 
          src={top} 
          layout="fill"
          objectFit="contain"
          alt="Top Image"
        />
      </motion.div>
    </motion.div>
  )
}

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
    <div className="relative max-h-dvh">
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

