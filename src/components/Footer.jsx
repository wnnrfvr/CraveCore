import React from 'react';
import { FaFacebook } from "react-icons/fa6";

import { FaSquareXTwitter } from "react-icons/fa6";

import { AiFillInstagram } from "react-icons/ai";

import { FaSquareThreads } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-2xl font-semibold">CraveCore</h2>
            <p className="text-lg">Spice it up</p>
            <div className="mt-2">
              <p className="text-sm">Email: cravecoreapp@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col sm:gap-0 lg:gap-20 sm:flex-row space-y-10 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-red-300 cursor-pointer">Suggestions</li>
                <Link to="/PrivacyPolicy">
                  <li className="hover:text-red-300 cursor-pointer">Privacy Policy</li>
                </Link>
                <li className="hover:text-red-300 cursor-pointer">About Us</li>
                <li className="hover:text-red-300 cursor-pointer">Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4 justify-center sm:justify-start mt-2">
                <a href="https://web.facebook.com/profile.php?id=61574865740487">
                  <p className="text-white text-2xl cursor-pointer hover:text-red-300">
                    <FaFacebook />
                  </p>
                </a>
                <a href="">
                  <p className="text-white text-2xl cursor-pointer hover:text-red-300">
                    <FaSquareXTwitter />
                  </p>
                </a>
                <a href="https://www.instagram.com/crave_core/">
                  <p className="text-white text-2xl cursor-pointer hover:text-red-300">
                    <AiFillInstagram />
                  </p>
                </a>
                <a href="https://www.threads.net/@crave_core">
                  <p className="text-white text-2xl cursor-pointer hover:text-red-300">
                  <FaSquareThreads />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-red-600 pt-4">
          <p className="text-sm">&copy; 2025 CraveCore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
