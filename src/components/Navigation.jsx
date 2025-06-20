// Navigation.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Removed react-icons imports as they caused compilation issues.
// Replaced with inline SVGs or unicode characters for broader compatibility.


const Navigation = () => {
  // State to manage the open/close status of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='w-full bg-red-800 flex flex-col md:flex-row justify-between items-center shadow-lg rounded-b-lg'> {/* Added rounded corners */}
      <div className='w-full sm:w-full lg:w-auto px-6 py-2 flex justify-between items-center'>
        {/* Logo/Site Title */}
        <Link to="/" className='flex items-center'>
          {/* Replaced FaHeart with an inline SVG */}
          <h1 className="text-lg md:text-3xl font-bold text-white flex items-center">
            <svg
              className='animate-pulse text-4xl mr-4 text-red-300'
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '2.5rem', height: '2.5rem' }} // Explicitly set size
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              ></path>
            </svg>
            CraveCore
          </h1>
        </Link>
        
        {/* Hamburger Menu Button for Mobile */}
        <button 
          className='md:hidden text-white text-3xl focus:outline-none p-2 rounded-md hover:bg-red-700 transition duration-300' // Increased size and added hover effect
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {/* Replaced GiHamburgerMenu and MdClose with inline SVGs */}
          {isMenuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>
      
      {/* Navigation Links */}
      {/* The menu hides/shows based on isMenuOpen state and screen size */}
      <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex mt-4 md:mt-0 w-full md:w-auto flex-col md:flex-row text-white font-semibold items-center md:pr-5 pb-4 md:pb-0`}> {/* Added pb-4 for bottom padding on mobile */}
        
        {/* Privacy Policy Link */}
        <Link 
          to="/PrivacyPolicy" 
          className='hover:bg-white transition duration-300 px-5 py-4 hover:text-red-800 w-full md:w-auto text-center rounded-md md:rounded-none' // Added rounded corners
          onClick={() => setIsMenuOpen(false)} // Close menu on click
        >
          <li className='cursor-pointer py-2 md:py-0'>Privacy Policy</li>
        </Link>
        
        {/* Child Protection Link */}
        <Link 
          to="/ChildProtection" 
          className='hover:bg-white transition duration-300 px-5 py-4 hover:text-red-800 w-full md:w-auto text-center rounded-md md:rounded-none' // Added rounded corners
          onClick={() => setIsMenuOpen(false)} // Close menu on click
        >
          <li className='cursor-pointer py-2 md:py-0'>Child Protection</li>
        </Link>

        {/* New: Data Deletion Request Link */}
        <Link
          to="/DataDeletionRequest"
          className='hover:bg-white transition duration-300 px-5 py-4 hover:text-red-800 w-full md:w-auto text-center rounded-md md:rounded-none'
          onClick={() => setIsMenuOpen(false)}
        >
          <li className='cursor-pointer py-2 md:py-0'>Data Deletion</li>
        </Link>

        {/* New: Report Bug Link */}
        <Link
          to="/BugReport"
          className='hover:bg-white transition duration-300 px-5 py-4 hover:text-red-800 w-full md:w-auto text-center rounded-md md:rounded-none'
          onClick={() => setIsMenuOpen(false)}
        >
          <li className='cursor-pointer py-2 md:py-0'>Report Bug</li>
        </Link>

        {/* New: Become a Writer Link */}
        <Link
          to="/BecomeWriter"
          className='hover:bg-white transition duration-300 px-5 py-4 hover:text-red-800 w-full md:w-auto text-center rounded-md md:rounded-none'
          onClick={() => setIsMenuOpen(false)}
        >
          <li className='cursor-pointer py-2 md:py-0'>Become a Writer</li>
        </Link>
        
        {/* Get App Now Button (External Link) */}
        {/* Note: `to` prop on <a> tag is not standard React Router. It should be `href` */}
        <a 
          href='https://play.google.com/store/apps/details?id=com.wnnrfvr.cravecore&hl=en' 
          className='bg-white transition duration-300 px-4 py-2 rounded-full ml-0 md:ml-5 text-red-800 w-auto text-center mt-4 md:mt-0 shadow-md hover:shadow-lg transform hover:scale-105' // Adjusted styling and added transform
          target="_blank" // Open in new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
          onClick={() => setIsMenuOpen(false)} // Close menu on click
        >
          <li className='cursor-pointer'>Get App Now</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navigation;
