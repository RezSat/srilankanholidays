import React from 'react'
import HeroSection from '@/components/hero'

function page() {
  return (
    <div>
      <HeroSection
        name="Sigiriya"
        background={'/images/hero/sigiriya-background.png'}
        top={'/images/hero/sigiriya.png'}
        className_bg="z-10 blur-[1.3px]"
        className_text="z-40 absolute p-10 top-[-10%] md:top-[-7%] lg:top-[-5%]"
        className_top="z-50 mt-10 md:mt-14 lg:mt-20"
      />
      <HeroSection
        name="Fishing"
        background={'/images/hero/fishing-background.png'}
        top={'/images/hero/fishing-top.png'}
        className_bg="z-10 blur-[0px]"
        className_text="z-40 absolute p-10 top-[10%] md:top-[%] lg:top-[%]"
        className_top="z-50 mt-0 md:mt-0 lg:mt-0"
      />
      <HeroSection
        name="Colombo 1"
        background={'/images/hero/colombo-background-1.png'}
        top={'/images/hero/colombo-top-1.png'}
        className_bg="z-10 blur-[0px]"
        className_text="z-40 absolute p-10 top-[-7%] md:top-[0%] lg:top-[0%]"
        className_top="z-50 mt-0 md:mt-0 lg:mt-0"
      />
      <HeroSection
        name="Colombo 2"
        background={'/images/hero/colombo-background-2.png'}
        top={'/images/hero/colombo-top-2.png'}
        className_bg="z-10 blur-[0px]"
        className_text="z-40 absolute p-10 top-[0%] md:top-[4%] lg:top-[7%]"
        className_top="z-50 mt-0 md:mt-0 lg:mt-0"
      />
      <HeroSection
        name="Elephants"
        background={'/images/hero/elephant-background.png'}
        top={'/images/hero/elephant-top.png'}
        className_bg="z-10 blur-[0px]"
        className_text="z-40 absolute p-10 top-[0%] md:top-[0%] lg:top-[0%]"
        className_top="z-50 mt-[14%] md:mt-[10%] lg:mt-[10%]"
      />
    </div>
  )
}

export default page