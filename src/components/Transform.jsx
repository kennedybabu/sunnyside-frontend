import React from 'react'

const Transform = () => {
  return (
    <div className='w-full h-full lg:h-[70vh]' name='about'>
        {/* container */}
        <div className='grid h-full w-full md:grid-cols-2'>
            <div className='lg:px-[50px] order-2 md:order-1 text-center md:text-start w-full h-[50vh] lg:h-[70vh] flex flex-col  justify-center px-2 text-gray-800'>
                <h1 className='text-4xl lg:text-5xl mx-auto lg:mx-0 max-w-[80%] lg:max-w-[70%] text-header'>Transform your brand</h1>
                <p className='text-[16px] lg:text-xl max-w-[80%] mx-auto lg:mx-0 py-2 lg:py-8 text-gray-800'>We are full-service creative agency specializing in helping brands grow
                    fast. Engage your clients through compelling visuals that do most of the 
                    marketing for you.
                </p>
                <a href="#" className=' lg:mx-0 uppercase text-header hover:underline decoration-[2px] decoration-yellow-400'>Learn more</a>
            </div>
            <div className='transform-img w-full h-[50vh] lg:h-[70vh] order-1'>
                    
            </div>
        </div>
    </div>
  )
}

export default Transform