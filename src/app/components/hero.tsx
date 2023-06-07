'use client';
import Image from 'next/image';
import { heroImg } from '../assets/images'

const Hero = () => {

    return ( 
        <section className="flex flex-col items-center justify-center">
            <div>
                <h1 className="shadow-2xl text-white pt-5 xs:text-6xl xxs:text-3xl">Cyber Sakura  </h1>
                <p className="px-3 mt-2 max-w-2xl lg:text-lg mb-8 text-gray-400 md:text-base xxs:text-sm sm:text-sm">
                    Thriving in Digital Tranquility: Cyber Sakura, Your Security Oasis, where peace of mind and protection flourish in the ever-changing digital landscape.
                </p>
                <div className="flex justify-center space-x-4 items-center">
                    <button className="border-solid border-gray-800 border-[3px] lg:text-lg bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 mb-3 sm:text-base">
                        Join us now
                    </button>
                    <button className="lg:text-lg hover:bg-gray-700 border-solid border-gray-800 border-[3px] text-white px-3 py-2 text-center mb-3 sm:text-base">
                        Request Demo
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center lg:p-12 sm:p-4 xs:max-w-none xxs:max-w-xs">
                <div className="border-gray-400 border-2 shadow-xl overflow-hidden">
                    <Image src={heroImg} alt="Logo" className="mx-auto " width={1200} />
                </div>
            </div>
        </section>
    );
};

export default Hero;