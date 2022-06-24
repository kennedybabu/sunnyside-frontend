import React from 'react'
import Logo from '../assets/logo.svg'

const Nav = () => {
  return (
    <div className='absolute w-full top-0 left-0'>
        {/* container */}
        <div className='flex justify-between items-center p-4'>
            <div>
              <img src={Logo} alt="sunnyside logo" className='md:h-8'/>
            </div>
            <div className='hidden md:flex font-[Barlow] text-xl '>
                <ul className='flex'>
                    <li className='p-4 cursor-pointer'>About</li>
                    <li className='p-4 cursor-pointer'>Services</li>
                    <li className='p-4 cursor-pointer'>Projects</li>
                    <li className='p-4 cursor-pointer'>Contact</li>
                </ul>
            </div>
        </div>       
    </div>
  )
}

export default Nav