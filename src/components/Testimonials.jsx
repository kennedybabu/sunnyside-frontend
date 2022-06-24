import React from 'react'
import Emily from './../assets/image-emily.jpg'

const Testimonials = () => {
  return (
    <div className='w-full h-full py-8'>
        {/* container */}
        <h2 className='text-xl uppercase text-header text-center text-gray-500'>Client Testimonials</h2>
        <div className='w-full h-full grid '>
            <div className='flex flex-col items-center text-center text-[#5a636c]'>
                <div className='py-8'>
                    <img  className='rounded-[50%] h-[80px]' src={Emily} alt="Merketing Director Emily.R" />
                </div>
                <p className='py-4 max-w-[80%]'>We put our trust in Sunnyside and they delivered, 
                    making sure our needs were met and deadlines were always hit.
                </p>
                <h2 className='text-xl text-header py-2 text-[#23303e]'>Emily R.</h2>
                <small className='text-[#a7abae]'>Marketing Director</small>
            </div>
        </div>
    </div>
  )
}

export default Testimonials