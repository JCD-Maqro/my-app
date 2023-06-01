'use client';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Dropdown } from "flowbite-react";
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image';
import { logo } from '../assets/images/';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-gray-800 md:pb-8 md:pt-28 sm:pb-4 sm:pt:12 xxs:pb-2 xxs:pt-6">
        <div className="mx-auto md:px-24 sm:px-12 xxs:px-3">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/6 mb-1    ">
                    <span className="flex items-center text-white font-bold text-xl cursor-pointer">
                        <Link href={"/"}>
                            <div className="flex items-center ml-2">
                                <Image src={logo} alt="Logo" className="mr-2" width={70} height={70} />
                            </div>
                            Cyber Sakura
                        </Link>
                    </span>
                </div>
                <div className="w-full lg:w-1/6 mb-1">
                    <h3 className="text-white text-lg mb-2">Product</h3>
                    <ul className="text-gray-400">
                        <li className="mb-2">
                            <Link href={"/features"} className="hover:text-white">Features</Link>
                        </li>
                        <li className="mb-2">
                            <Link href={"/pricing"} className="hover:text-white">Pricing</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/6 mb-1">
                    <h3 className="text-white text-lg mb-2">Resources</h3>
                    <ul className="text-gray-400">
                        <li className="mb-2">
                            <Link href={"/blog"} className="hover:text-white">Blog</Link>
                        </li>
                        <li className="mb-2">
                            <Link href={"/user/user-guide"} className="hover:text-white">User guides</Link>
                        </li>
                        <li className="mb-2">
                            <a href={"/blog/webinar"} className="hover:text-white">Webinars</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/6 mb-1">
                    <h3 className="text-white text-lg mb-2">Company</h3>
                    <ul className="text-gray-400">
                        <li className="mb-2">
                            <Link href={"/about"} className="hover:text-white">About</Link>
                        </li>
                        <li className="mb-2">
                            <Link href={"/user/signup"} className="hover:text-white">Join us</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:w-2/6 mb-1">
                    <h3 className="text-white text-lg">Subscribe to our newsletter</h3>
                    <p className="text-gray-400 mb-4">For product announcement and exclusive insights</p>
                    <div className="flex flex-col md:flex-row md:items-center">
                        <div className="relative">
                            <input
                            type="email"
                            className="w-full py-2 px-4 pl-10 bg-gray-700 text-gray-100"
                            placeholder="Input your email"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <EmailIcon className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                        <button className="bg-blue-500 border-solid border-blue-500 border-[2.5px] hover:bg-blue-600 text-white py-2 px-4">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <hr className="border-gray-700 my-8" /> 
            <div className="flex flex-wrap justify-between items-center">
            <div className="bg-gray-700 px-3 py-2 text-sm font-medium w-25 sm:w-auto mb-3 sm:mb-0 text-white">
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
                    <FacebookRoundedIcon fontSize='large'/>
                    <LinkedInIcon fontSize='large' />
                    <YouTubeIcon  fontSize='large'/>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;