import React from 'react'
import Arrow from '../assets/icon-arrow-down.svg'

const Hero = () => {
  return (
    <div className='h-screen w-full hero'>
        {/* container */}
        <div className='flex items-center justify-center h-full w-full flex-col'>
                <h2 className='text-header text-3xl md:text-6xl uppercase text-[Fraunces] text-white'>We are creatives</h2>
                <div className='pt-[50px] pointer cursor-pointer'>
                    <img src={Arrow} alt="arrow down svg" />
                </div>
        </div>
    </div>
  )
}

export default Hero