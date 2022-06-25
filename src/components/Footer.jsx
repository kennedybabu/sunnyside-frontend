import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram, BsTwitter, BsPinterest} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='h-[50vh] w-full bg-[#97dac6] text-[#27775f]' name='contact'>
        {/* container */}
        <div className='flex flex-col pt-[50px] items-center justify-center h-full'>
            <h3 className='Barlow barlow-bold text-3xl lg:text-4xl'>sunnyside</h3>
            <div className='flex items-center list-none'>
                <li className='py-8 m-4 lg:m-6 hover:text-white  cursor-pointer' >About</li>
                <li className='py-8 m-4 lg:m-6 hover:text-white  cursor-pointer'>Services</li>
                <li className='py-8 m-4 lg:m-6 hover:text-white  cursor-pointer'>Projects</li>
            </div>
            <div className='flex items-center justify-center w-full'>
                <div className='px-4'>
                    <FaFacebookSquare className='text-xl hover:text-white cursor-pointer'/>
                </div>
                <div className='px-4'>
                    <BsInstagram className='text-xl hover:text-white  cursor-pointer'/>
                </div>
                <div className='px-4'> 
                    <BsTwitter className='text-xl hover:text-white  cursor-pointer'/>
                </div>
                <div className='px-4'>
                    <BsPinterest className='text-xl hover:text-white  cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default Footer