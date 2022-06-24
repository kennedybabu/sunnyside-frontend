import React from 'react'

const Transform = () => {
  return (
    <div className='w-full h-screen md:h-[70vh]'>
        {/* container */}
        <div className='grid h-full w-full md:grid-cols-2'>
            <div className='order-2 text-center w-full h-full flex flex-col  justify-center px-2 text-gray-800'>
                <h1 className='text-4xl mx-auto max-w-[80%] text-header'>Transform your brand</h1>
                <p className='text-[16px] max-w-[80%] mx-auto py-2 text-gray-800'>We are full-service creative agency specializing in helping brands grow
                    fast. Engage your clients through compelling visuals that do most of the 
                    marketing for you.
                </p>
                <a href="#" className='uppercase text-header'>Learn more</a>
            </div>
            <div className='transform-img w-full h-[50vh] order-1'>
                    
            </div>
        </div>
    </div>
  )
}

export default Transform