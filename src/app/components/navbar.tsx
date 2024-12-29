'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="text-gray-600 body-font bg-white shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <a className="title-font font-medium text-gray-900 text-2xl">Blogy</a>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? (
                <FiX size={30} className="text-gray-900" />
              ) : (
                <FiMenu size={30} className="text-gray-900" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex flex-col md:flex-row items-center text-lg md:space-x-8 w-full md:w-auto`}
          >
            <nav className="flex flex-col md:flex-row items-center md:space-y-0 space-y-2 mt-4 md:mt-0 gap-8">
              <Link
                href="/"
                className="hover:text-gray-900 block md:inline-block text-center"
              >
                Home
              </Link>
              
              <Link
                href="/contact"
                className="hover:text-gray-900 block md:inline-block text-center"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Login Button */}
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } md:block mt-4 md:mt-0 justify-center w-full md:w-auto`}
          >
            <button className="inline-flex items-center justify-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base w-full md:w-auto">
              Login
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
