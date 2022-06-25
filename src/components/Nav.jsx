import React, {useState} from 'react'
import Logo from '../assets/logo.svg'
import {AiOutlineBars} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'
import { Link } from "react-scroll";


const Nav = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => setNav(!nav)   

  return (
    <div className='absolute w-full top-0 left-0'>
        {/* container */}
        <div className='flex justify-between items-center p-4'>
            <div>
              <img src={Logo} alt="sunnyside logo" className='md:h-8'/>
            </div>
            <div className='hidden md:flex font-[Barlow] text-xl text-[white]'>
                <ul className='flex'>
                    <Link to='about' smooth={true}><li className='m-4 py-2 px-4 cursor-pointer hover:bg-[white] hover:text-[#154458] hover:rounded-[30px] duration-100'>About</li></Link>
                    <Link to='services' smooth={true}><li className='m-4  py-2 px-4 cursor-pointer hover:bg-[white] hover:text-[#154458] hover:rounded-[30px]  duration-100'>Services</li></Link>
                    <Link to='projects' smooth={true}><li className='m-4  py-2 px-4 cursor-pointer hover:bg-[white] hover:text-[#154458] hover:rounded-[30px]  duration-100'>Projects</li></Link>
                    <Link to='contact' smooth={true}><li className='m-4  py-2 px-4 cursor-pointer hover:bg-[white] hover:text-[#154458] hover:rounded-[30px]  duration-100'>Contact</li></Link>
                </ul>
            </div>

            {/* mobile-menu toggler */}
            <div className='text-xl text-white md:hidden cursor-pointer' onClick={handleNav}>
                {nav ? <AiOutlineBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul id='mobile' className={nav ? 'hidden' :  'md:hidden absolute top-[50px] bg-white flex h-[40vh] flex-col w-[90%] left-1/2 transform -translate-x-1/2 items-center pt-[50px] justify-center'}>
                <li className='px-4 py-2 cursor-pointer hover:bg-[yellow] rounded-[30px] hover:uppercase hover:text-[#154458]'>About</li>
                <li className='px-4 py-2 cursor-pointer hover:bg-[yellow]  rounded-[30px] hover:uppercase hover:text-[#154458]'>Services</li>
                <li className='px-4 py-2 cursor-pointer hover:bg-[yellow]  rounded-[30px] hover:uppercase hover:text-[#154458]'>Projects</li>
                <li className='px-4 py-2 cursor-pointer hover:bg-[yellow]  rounded-[30px] hover:uppercase hover:text-[#154458]'>Contact</li>
            </ul>
        </div>       
    </div>
  )
}

export default Nav