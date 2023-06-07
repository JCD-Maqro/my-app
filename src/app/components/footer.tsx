'use client';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import { Dropdown } from "flowbite-react";
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image';
import { logo } from '../assets/images/';
import Link from 'next/link';
import { Dropdown } from "@nextui-org/react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Footer = () => {
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
    <footer className="bg-gray-800 md:pb-8 md:pt-28 sm:pb-4 sm:pt-12 xxs:pb-2 xxs:pt-6">
      <div className="lg:px-24 md:px-12 sm:px-8 xs:px-4 ">
        <div className='flex justify-center items-center'>
            <div className="grid sm:gap-5 sm:grid-cols-3 md:grid-cols-6 md:m-0 sm:m-6 max-w-7xl">
                <div className="col-span-1 max-w-xs mx-3 mb-1">
                <span className="flex items-center text-white font-bold text-xl cursor-pointer">
                    <Link href={"/"}>
                    <div className="flex items-center ml-2">
                        <Image src={logo} alt="Logo" className="mr-2" width={70} height={70} />
                    </div>
                    Cyber Sakura
                    </Link>
                </span>
                </div>
                <div className="col-span-1 max-w-xs mx-3 mb-1">
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
                <div className="col-span-1 max-w-xs mx-3 mb-1">
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
                <div className="col-span-1 max-w-xs mx-3 mb-1">
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
                <div className="sm:col-span-2 xs:col-span-2 max-w-xs mx-3 mb-1">
                <h3 className="text-white text-lg">Subscribe to our newsletter</h3>
                <p className="text-gray-400 mb-4">For product announcements and exclusive insights</p>
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
        </div>
        <div className='mx-auto text-center max-w-7xl'>
            <hr className="border-gray-500 my-8"/>
            <div className="grid sm:grid-flow-col xs:grid-flow-row">
                <div className='col-span-1 m-3 flex justify-start items-center'>
                    <div className="inline-flex bg-gray-700 p-1 text-sm font-medium text-white">
                        <Dropdown>
                            <Dropdown.Button style={ButtonStyle} iconRight={<KeyboardArrowDownIcon className='ml-5'/>}>English</Dropdown.Button>
                            <Dropdown.Menu aria-label="Static Actions">
                                <Dropdown.Item>Tagalog</Dropdown.Item>
                                <Dropdown.Item>Japanese</Dropdown.Item>
                                <Dropdown.Item>Chinese</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className='col-span-1 m-3 md:p-3 sm:p-0 items-center flex md:justify-center sm:justify-start'>
                    <div className="text-white">
                        <span className='text-center'>&copy; 2023 CyberSakura, Inc. · Privacy · Terms · Sitemap</span>
                    </div>
                </div>
                <div className='col-span-1 m-3 flex md:justify-end items-center sm:justify-start'>
                    <div className="text-white">
                        <FacebookRoundedIcon fontSize='large' />
                        <LinkedInIcon fontSize='large' />
                        <YouTubeIcon fontSize='large' />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;