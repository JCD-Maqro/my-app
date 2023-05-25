'use client';
import Image from 'next/image';
import { carousel1, logo } from '../assets/images';
import { Carousel } from 'flowbite-react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const carousel = () => {
    return (
        <section className="items-center justify-center">
            <h3 className="text-white lg:text-3xl font-bold m-3 sm:text-sm">User Testimonials</h3>
            <div className="h-[600px] sm:h-64 xl:h-80 2xl:h-[700px] object-contain">
                <Carousel leftControl=" " rightControl=" ">
                    <div className="h-[600px] sm:h-64 xl:h-80 2xl:h-[700px]">
                        <Image src={carousel1} alt="1" className="object-cover h-[600px] sm:h-64 xl:h-80 2xl:h-[700px]" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                            <div className="flex flex-wrap items-center justify-center sm:w-1/8 mt-4">
                                <Image
                                src={logo}
                                alt="logo"
                                width={100}
                                height={100}
                                />
                            </div>
                            <div className="mt-4 text-center lg:text-lg xxs:text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec sapien non mauris eleifend euismod.
                            </div>
                            <div className="mt-4 text-center lg:text-lg xxs:text-xs mb-3">
                                <AccountCircleIcon /> <span className="font-bold text-center">John Kentucky</span> - President
                            </div>
                        </div>
                    </div>
                    <div className="h-[600px] sm:h-64 xl:h-80 2xl:h-[700px]">
                        <Image src={carousel1} alt="2" className="object-cover h-[600px] sm:h-64 xl:h-80 2xl:h-[700px]" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                            <div className="flex flex-wrap items-center justify-center sm:w-1/8 mt-4">
                                <Image
                                src={logo}
                                alt="logo"
                                width={100}
                                height={100}
                                />
                            </div>
                            <div className="mt-4 text-center lg:text-lg xxs:text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec sapien non mauris eleifend euismod.
                            </div>
                            <div className="mt-4 text-center lg:text-lg xxs:text-xs mb-3">
                                <AccountCircleIcon /> <span className="font-bold text-center">Jack Ronald</span> - CEO
                            </div>
                        </div>
                    </div>
                    <div className="h-[600px] sm:h-64 xl:h-80 2xl:h-[700px]">
                        <Image src={carousel1} alt="3" className="object-cover h-[600px] sm:h-64 xl:h-80 2xl:h-[700px]" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                            <div className="flex flex-wrap items-center justify-center sm:w-1/8 mt-4">
                                <Image
                                src={logo}
                                alt="logo"
                                width={100}
                                height={100}
                                />
                            </div>
                            <div className="mt-4 text-center lg:text-lg xxs:text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec sapien non mauris eleifend euismod.
                            </div>
                            <div className="mt-4 text-center lg:text-lg xxs:text-xs mb-6">
                                <AccountCircleIcon /> <span className="font-bold text-center">Bill Harper</span> - CEO
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default carousel;