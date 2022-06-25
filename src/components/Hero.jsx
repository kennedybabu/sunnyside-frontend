import React from 'react'
import Arrow from '../assets/icon-arrow-down.svg'
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className='h-screen w-full hero'>
        {/* container */}
        <div className='flex items-center justify-center h-full w-full flex-col'>
                <h2 className='text-header text-3xl md:text-6xl uppercase text-[Fraunces] text-white'>We are creatives</h2>
                <div className='pt-[50px] pointer cursor-pointer'>
                  <Link to='about' smooth={true}>
                    <img src={Arrow} alt="arrow down svg" />
                  </Link>
                </div>
        </div>
    </div>
  )
}

export default Hero