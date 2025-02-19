import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

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

export default HeroSection
