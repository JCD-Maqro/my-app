'use client';
import Image from 'next/image';
import { heroImg } from '../assets/images'

const Hero = () => {

    return (
        <section className="flex flex-col items-center justify-center h-auto w-auto xxs:text-xs text-center">
            <div className=' xxs:justify-center items-center'>
                <h1 className="shadow-2xl md:text-6xl pt-10 text-white xxs:text-lg">Cyber Sakura  </h1>
                <p className="px-3 mt-2 max-w-4xl lg:text-lg mb-8 text-gray-400 md:text-base xxs:text-xs sm:text-xs">
                    Thriving in Digital Tranquility: Cyber Sakura, Your Security Oasis, where peace of mind and protection flourish in the ever-changing digital landscape.
                </p>
                <div className="flex justify-center space-x-4 items-center">
                    <button className="lg:text-lg bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 mb-3 sm:text-xs">
                        Join us now
                    </button>
                    <button className="lg:text-lg hover:bg-gray-700 border-solid border-gray-800 border-[3px] text-white px-3 py-2 text-center mb-3 sm:text-xs">
                        Request Demo
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center lg:p-12 sm:p-4 md:w-auto xxs:w-screen mt-3">
                <div className="border-gray-400 border-2 shadow-xl overflow-hidden">
                    <Image src={heroImg} alt="Logo" className="mx-auto " width={1400} />
                </div>
            </div>
        </section>
    );
};

export default Hero;