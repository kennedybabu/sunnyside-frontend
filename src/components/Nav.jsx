import React, {useState} from 'react'
import Logo from '../assets/logo.svg'
import {AiOutlineBars} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'

const Nav = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => setNav(!nav)

    console.log(nav)

  return (
    <div className='absolute w-full top-0 left-0'>
        {/* container */}
        <div className='flex justify-between items-center p-4'>
            <div>
              <img src={Logo} alt="sunnyside logo" className='md:h-8'/>
            </div>
            <div className='hidden md:flex font-[Barlow] text-xl text-[white]'>
                <ul className='flex'>
                    <li className='px-4 py-2 cursor-pointer hover:bg-[white] hover:text-[#154458] hover:rounded-[30px] duration-100'>About</li>
                    <li className='px-4 py-2 cursor-pointer hover:bg-[white] hover:text-[#154458] hover:rounded-[30px] duration-100'>Services</li>
                    <li className='px-4 py-2 cursor-pointer hover:bg-[white] hover:text-[#154458] hover:rounded-[30px] duration-100'>Projects</li>
                    <li className='px-4 py-2 cursor-pointer hover:bg-[white] hover:text-[#154458] hover:rounded-[30px] duration-100'>Contact</li>
                </ul>
            </div>

            {/* menu toggler */}
            <div className='md:hidden' onClick={handleNav}>
                {nav ? <AiOutlineBars className='text-xl text-white'/> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul className={nav ? 'hidden' :  'md:hidden absolute top-[80px] bg-white flex h-[30vh] flex-col w-[80%] left-1/2 transform -translate-x-1/2 items-center py-4'}>
                <li className='px-4 py-2 cursor-pointer hover:bg-[orange] rounded-[30px]'>About</li>
                <li className='px-4 py-2 cursor-pointer hover:bg-[orange] '>Services</li>
                <li className='px-4 py-2 cursor-pointer hover:bg-[orange] '>Projects</li>
                <li className='px-4 py-2 cursor-pointer hover:bg-[orange] '>Contact</li>
            </ul>
        </div>       
    </div>
  )
}

export default Nav