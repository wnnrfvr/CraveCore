import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaHeart } from "react-icons/fa";



const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='w-full bg-red-800 flex flex-col md:flex-row justify-between items-center shadow-lg'>
      <div className='w-full sm:w-full lg:w-0 px-6 py-2 flex justify-between items-center'>
        <Link to="/" className=''>
          <h1 className="text-lg md:text-3xl font-bold text-white flex items-center md:text-left"><FaHeart className='animate-pulse text-4xl mr-4'/>CraveCore</h1>
        </Link>
        
        <button 
          className='md:hidden text-white text-2xl focus:outline-none'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <MdClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      
      <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex mt-4 md:mt-0 w-full md:w-auto flex-col md:flex-row  text-white font-semibold items-center md:pr-5`}>
        <Link to="/PrivacyPolicy" className='hover:bg-white transition duration-300 px-5 py-4 hover:text-red-800 w-full md:w-auto text-center'>
          <li className='cursor-pointer py-2 md:py-0' onClick={() => setIsMenuOpen(false)}>Privacy Policy</li>
        </Link>
        <Link to="/ChildProtection" className='hover:bg-white transition duration-300 px-5 py-4 hover:text-red-800 w-full md:w-auto text-center'>
          <li className='cursor-pointer py-2 md:py-0' onClick={() => setIsMenuOpen(false)}>Child Protection</li>
        </Link>
        <a href='https://play.google.com/store/apps/details?id=com.wnnrfvr.cravecore&hl=en' to="/ChildProtection" className='bg-white transition duration-300 px-2 py-1 rounded-full ml-5 text-red-800 w-full md:w-auto text-center'>
          <li className='cursor-pointer py-2 md:py-0' onClick={() => setIsMenuOpen(false)}>Get app now</li>
        </a>
      </ul>
    </nav>
  )
}

export default Navigation