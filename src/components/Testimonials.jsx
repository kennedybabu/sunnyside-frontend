import React from 'react'
import Emily from './../assets/image-emily.jpg'
import Thomas from './../assets/image-thomas.jpg'
import Jennie from './../assets/image-jennie.jpg'



const Testimonials = () => {
  return (
    <div className='w-full h-full py-8 lg:h-[80vh]' name='projects'>
        {/* container */}
        <h2 className='text-xl uppercase text-header text-center text-gray-500 tracking-[5px] lg:mt-[30px] md:mb-[50px] lg:mb-[100px]'>Client Testimonials</h2>
        <div className='w-full h-full grid md:flex lg:px-[200px] '>
            <div className='pt-8 flex flex-col items-center text-center text-[#5a636c]'>
                <div className='py-8'>
                    <img  className='rounded-[50%] h-[80px]' src={Emily} alt="Merketing Director Emily.R" />
                </div>
                <p className='py-4 lg:py-[50px] max-w-[80%]'>We put our trust in Sunnyside and they delivered, 
                    making sure our needs were met and deadlines were always hit.
                </p>
                <h2 className='text-xl text-header py-2 text-[#23303e]'>Emily R.</h2>
                <small className='text-[#a7abae]'>Marketing Director</small>
            </div>

            <div className='flex pt-8 flex-col items-center text-center text-[#5a636c]'>
                <div className='py-8'>
                    <img  className='rounded-[50%] h-[80px]' src={Thomas} alt="Merketing Director Emily.R" />
                </div>
                <p className='py-4 lg:py-[50px] max-w-[80%]'>
                    Sunnyside's enthusiasm coupled with their 
                    keen interest in our brand's success made it 
                    a satisfying and enjoyable experience.
                </p>
                <h2 className='text-xl text-header py-2 text-[#23303e]'>Thomas S.</h2>
                <small className='text-[#a7abae]'>Chief Operating Officer</small>
            </div>

            <div className='flex pt-8 flex-col items-center text-center text-[#5a636c]'>
                <div className='py-8'>
                    <img  className='rounded-[50%] h-[80px]' src={Jennie} alt="Merketing Director Emily.R" />
                </div>
                <p className='py-4 lg:py-[50px] max-w-[80%]'>
                    Incredible end result! Our sales increased over 400% when we worked
                    with Sunnyside. Highly recommended.
                </p>
                <h2 className='text-xl text-header py-2 text-[#23303e]'>Jennie F.</h2>
                <small className='text-[#a7abae]'>Business Owner</small>
            </div>
        </div>
    </div>
  )
}

export default Testimonials