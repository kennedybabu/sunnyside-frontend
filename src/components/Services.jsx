import React from 'react'

const Services = () => {
  return (
    <div>
         <div className='grid h-full w-full md:grid-cols-2'>
            <div className='md:h-[50vh] lg:h-[70vh] graphic w-full h-screen  text-cyan-700 flex flex-col justify-end pb-[60px] items-center text-center px-2'>
                <h3 className='text-header text-3xl'>Graphic Design</h3>
                <p className='py-2 Barlow max-w-[350px]'>Great design makes you memorable. We deliver
                    artwork that underscores your brand message
                    and captures potential clients' attention.
                </p>
            </div>
            <div className='md:h-[50vh] lg:h-[70vh] photography w-full h-screen text-blue-800 flex flex-col justify-end pb-[60px] items-center text-center px-2'>
            <h3 className='text-header text-3xl'>Photography</h3>
                <p className='py-2 Barlow max-w-[350px]'>
                  Increase your credibiity by getting the most stunning, high-quality photos that improve 
                  your business image.                    
                </p>
            </div>            
        </div>
    </div>
  )
}

export default Services