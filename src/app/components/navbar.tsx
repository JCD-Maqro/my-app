'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dropdown } from "@nextui-org/react";
import Image from 'next/image';
import { logo } from '../assets/images/';
import { usePathname } from 'next/navigation';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {

  const router = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const handleNav = () => {
    setNav(!nav);
  };

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

  const ButtonStyle = {
    borderRadius: "0px",
    backgroundColor: "transparent",
    color:"white",
    opacity: "0.9",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "24px",
    display: "flex",
    justifyContent: "space-between"
  }

  return (
    <nav className={`z-[999] sticky top-0 ${color}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center">
            <Link href="/">
              <span className="flex items-center text-white font-bold text-xl cursor-pointer">
                <div className="flex items-center ml-2">
                  <Image src={logo} alt="Logo" className="mr-2" width={70} height={70} />
                </div>
              </span>
            </Link>
          </div>
          <div className="hidden sticky top-0 md:flex md:items-center">
            <div className="text-gray-300 hover:bg-gray-500 text-sm font-medium">
              <Dropdown>
                <Dropdown.Button style={ButtonStyle} iconRight={<KeyboardArrowDownIcon fontSize='large'/>}>Features</Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions">
                  <Dropdown.Item><Link href="features/feature1">Password Manager</Link></Dropdown.Item>
                  <Dropdown.Item><Link href="features/feature2">File Security</Link></Dropdown.Item>
                  <Dropdown.Item><Link href="features/feature3">Device Protection</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Link href="/pricing">
              <div className={`text-gray-300 hover:bg-gray-500 px-3 py-2 text-sm font-medium ${router === '/pricing' ? 'bg-gray-700' : ''}`}>Pricing</div>
            </Link>
            <Link href="/about">
                <div className={`text-gray-300 hover:bg-gray-500 px-3 py-2 text-sm font-medium ${router === '/about' ? 'bg-gray-700' : ''}`}>About</div>
            </Link>
            <Link href="/contact">
              <div className={`text-gray-300 hover:bg-gray-500 px-3 py-2 text-sm font-medium ${router === '/contact' ? 'bg-gray-700' : ''}`}>Contact</div>
            </Link>
            <Link href="/blog">
              <div className={`text-gray-300 hover:bg-gray-500 px-3 py-2 text-sm font-medium ${router === '/blog' ? 'bg-gray-700' : ''}`}>Blog</div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center">
            <Link href="/user/signin">
              <div className={`text-gray-300 hover:bg-gray-500 px-3 py-2 text-sm font-medium ${router === '/signin' ? 'bg-gray-700' : ''}`}>Sign in</div>
            </Link>
            <Link href="/user/signup">
              <div className={`text-gray-300 bg-gray-700 hover:bg-gray-500 px-3 py-2 text-sm font-medium ${router === '/signup' ? 'bg-gray-700' : ''}`}>Sign up</div>
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
              <div className="mx-2 text-gray-300 hover:bg-gray-700 px-1 py-2 rounded-md text-sm font-medium">
                <Dropdown>
                  <Dropdown.Button style={ButtonStyle} iconRight={<KeyboardArrowDownIcon fontSize='large'/>}>Features</Dropdown.Button>
                  <Dropdown.Menu aria-label="Static Actions">
                    <Dropdown.Item><Link href="features/feature1">Password Manager</Link></Dropdown.Item>
                    <Dropdown.Item><Link href="features/feature2">File Security</Link></Dropdown.Item>
                    <Dropdown.Item><Link href="features/feature3">Device Protection</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Link href="/pricing">
                <div className={`mx-2 text-gray-300 hover:bg-gray-700 px-1 py-2 rounded-md text-sm font-medium ${router === '/pricing' ? 'bg-gray-700' : ''}`}>Pricing</div>
              </Link>
              <Link href="/about">
                  <div className={`mx-2 text-gray-300 hover:bg-gray-700 px-1 py-2 rounded-md text-sm font-medium ${router === '/about' ? 'bg-gray-700' : ''}`}>About</div>
              </Link>
              <Link href="/contact">
                <div className={`mx-2 text-gray-300 hover:bg-gray-700 px-1 py-2 rounded-md text-sm font-medium ${router === '/contact' ? 'bg-gray-700' : ''}`}>Contact</div>
              </Link>
              <Link href="/blog">
                <div className={`mx-2 text-gray-300 hover:bg-gray-700 px-1 py-2 rounded-md text-sm font-medium ${router === '/blog' ? 'bg-gray-700' : ''}`}>Blog</div>
              </Link>
              <Link href="/user/signin">
                <div className={`mx-2 text-gray-300 hover:bg-gray-700 px-1 py-2 rounded-md text-sm font-medium ${router === '/signin' ? 'bg-gray-700' : ''}`}>Sign in</div>
              </Link>
              <Link href="/user/signup">
                <div className={`mx-2 text-gray-300 hover:bg-gray-700 px-1 py-2 rounded-md text-sm font-medium ${router === '/signup' ? 'bg-gray-700' : ''}`}>Sign up</div>
              </Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;