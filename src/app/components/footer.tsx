'use client';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Dropdown } from "flowbite-react";
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image';
import logoImage from '../assets/images/cybersakuralogo.png';


const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 flex-shrink-0">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/6 mb-1    ">
                    <span className="flex items-center text-white font-bold text-xl cursor-pointer">
                        <div className="flex items-center ml-2">
                            <Image src={logoImage} alt="Logo" className="mr-2" width={70} height={70} />
                        </div>
                        Cyber Sakura
                    </span>
                </div>
                <div className="w-full lg:w-1/6 mb-1">
                    <h3 className="text-white text-lg mb-2">Product</h3>
                    <ul className="text-gray-400">
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Features</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/6 mb-1">
                    <h3 className="text-white text-lg mb-2">Resources</h3>
                    <ul className="text-gray-400">
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Blog</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">User guides</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Webinars</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/6 mb-1">
                    <h3 className="text-white text-lg mb-2">Company</h3>
                    <ul className="text-gray-400">
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">About</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-white">Join us</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:w-2/6 mb-1">
                    <h3 className="text-white text-lg mb-2">Subscribe to our newsletter</h3>
                    <p className="text-gray-400 mb-4">For product announcement and exclusive insights</p>
                    <div className="flex flex-col md:flex-row md:items-center">
                        <div className="relative mb-2 md:mb-0 md:mr-2">
                            <input
                            type="email"
                            className="w-full rounded-l py-2 px-4 pl-10 bg-gray-700 text-gray-100"
                            placeholder="Input your email"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <EmailIcon className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <hr className="border-gray-700 my-8" /> 
            <div className="flex flex-wrap justify-between items-center">
            <div className="bg-gray-700 px-3 py-2 rounded-md text-sm font-medium w-25 sm:w-auto mb-3 sm:mb-0 text-white">
                <Dropdown label="English" inline={true}>
                    <Dropdown.Item>
                        Others
                    </Dropdown.Item>
                </Dropdown>
            </div>
                <div className="w-full sm:w-auto mb-3 text-white">
                    <span>&copy; 2023 CyberSakura, Inc. · Privacy · Terms · Sitemap</span>
                </div>
                <div className="w-full sm:w-auto mb-3 text-white">
                    <FacebookIcon />
                    <LinkedInIcon />
                    <YouTubeIcon />
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;