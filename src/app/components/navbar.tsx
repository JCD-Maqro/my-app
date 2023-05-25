'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dropdown } from 'flowbite-react';
import Image from 'next/image';
import { logo } from '../assets/images/';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('bg-gray-800');
      } else {
        setColor('transparent');
      }
    };

    window.addEventListener('scroll', changeColor);

    return () => {
      // Clean up the event listener on unmount
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <nav className={`sticky top-0 ${color}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="flex items-center text-white font-bold text-xl cursor-pointer">
                <div className="flex items-center ml-2">
                  <Image src={logo} alt="Logo" className="mr-2" width={70} height={70} />
                </div>
                Cyber Sakura
              </span>
            </Link>
          </div>
          <div className="hidden sticky top-0 md:flex md:items-center">
            <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              <Dropdown label="Features" inline={true}>
                <Dropdown.Item>Feature 1</Dropdown.Item>
                <Dropdown.Item>Feature 2</Dropdown.Item>
                <Dropdown.Item>Feature 3</Dropdown.Item>
              </Dropdown>
            </div>
            <Link href="/pricing">
              <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Pricing</div>
            </Link>
            <Link href="/about">
              <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</div>
            </Link>
            <Link href="/contact">
              <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</div>
            </Link>
            <Link href="/blog">
              <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Blog</div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center">
            <Link href="/signin">
              <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sign in</div>
            </Link>
            <Link href="/signup">
              <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sign up</div>
            </Link>
          </div>
          <div className="flex md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none" onClick={toggleMenu}>
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M19 11H5v-1h14v1zm0 4H5v-1h14v1zm0-8H5V6h14v1z" />
                ) : (
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 6H20V5H4v1zm0 4h16v-1H4v1zm0 4h16v-1H4v1z" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center mt-2">
              <Link href="/pricing">
                <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Pricing</div>
              </Link>
              <Link href="/about">
                <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</div>
              </Link>
              <Link href="/contact">
                <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</div>
              </Link>
              <Link href="/blog">
                <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Blog</div>
              </Link>
              <Link href="/signin">
                <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sign in</div>
              </Link>
              <Link href="/signup">
                <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sign up</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;