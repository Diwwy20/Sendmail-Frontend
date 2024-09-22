import React from 'react'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-dark-hard'>
        <footer className='container mx-auto px-5 '>
            <div className='flex flex-col justify-center items-center py-3'>
              <div className='bg-primary text-white p-3 rounded-full'>
                <FaHeart className='w-7 h-auto text-pink-500' />
              </div>
              <p className='font-bold italic text-dark-light'>
                Copyright &#169; {new Date().getFullYear()}. Crafted with love.
              </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer