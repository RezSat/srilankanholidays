import React from 'react'
import Image from 'next/image'

const HeroSection = ({ name, top, background, className_bg, className_text, className_top }) => {
  return (
    <div className='relative w-full max-w-dvw mx-auto aspect-[16/9] overflow-hidden'>
      {/* Background Image */}
      <Image 
        src={background} 
        layout='fill'
        objectFit='cover'
        className={className_bg}
        alt="Background"
      />

      {/* Text Image */}
      <Image 
        src={'/images/hero/text.png'} 
        width={1366}
        height={768}
        objectFit='contain'
        className={className_text}
        alt="Text"
      />

      {/* Top Image */}
      <Image 
        src={top} 
        layout='fill'
        objectFit='contain'
        className={className_top}
        alt="Top Image"
      />
    </div>
  )
}

export default HeroSection
