import React from 'react'
import { IoSearch } from 'react-icons/io5';

import { images } from '../../../constants'

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
        <div className='mt-10 lg:w-1/2'>
            <h1 className='font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]'>Find web developer jobs for interns here.</h1>
            <p className='text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left'>
                Developer job details for interns are now available.
            </p>
            <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
                <div className='relative'>
                    <IoSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]' />
                    <input className='placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-2xl shadow-blue-500/20 md:py-4' 
                    type="text" 
                    placeholder='Search Jobs' />
                </div>
                <button className='w-full bg-aqua text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2'>Search</button>
            </div>
            <div className='flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7'>
                <span className='text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base'>Popular Tags:</span>
                <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base'>
                    <li className='rounded-lg bg-aqua bg-opacity-10 px-3 py-1.5 text-aqua font-semibold cursor-pointer'>Full Stack Developer</li>
                    <li className='rounded-lg bg-aqua bg-opacity-10 px-3 py-1.5 text-aqua font-semibold cursor-pointer'>Web Developer</li>
                    <li className='rounded-lg bg-aqua bg-opacity-10 px-3 py-1.5 text-aqua font-semibold cursor-pointer'>Backend Developer</li>
                </ul>
            </div>
        </div>
        <div className='hidden lg:block lg:1/2'>
            <img className='object-contain w-[600px] ml-4' src={images.Hero} alt="users are reading articles" />
        </div>
    </section>
  )
}

export default Hero