'use client';
import Image from 'next/image';
import { heroImg } from '../assets/images'

const Hero = () => {

    return (
        <section className="flex flex-col items-center justify-center h-auto w-auto xxs:text-xs text-center">
            <div className=' xxs:justify-center items-center'>
                <h1 className="shadow-2xl- md:text-3xl pt-10 text-white xxs:text-lg">Thriving in Digital Tranquility:  </h1>
                <p className="bg-white rounded-full p-3 mt-2 uppercase font-extrabold lg:text-lg mb-8 text-gray-400 sm:text-xs">
                    Cyber Sakura, Your Security Oasis. 
                </p>
                <div className="flex flex-wrap justify-center space-x-4">
                    <button className="lg:text-lg bg-gray-800 hover:bg-gray-700 text-white font-bold px-3 py-2 rounded-md mb-3 sm:text-xs">
                        Join us
                    </button>
                    <button className="lg:text-lg bg-gray-800 hover:bg-gray-700 text-white font-bold px-3 py-2 rounded-md text-center mb-3 sm:text-xs">
                        Request Demo
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center lg:p-12 sm:p-4 xxs:w-[75%] mt-3">
                <div className="rounded-md border-gray-400 border-2 shadow-xl overflow-hidden">
                    <Image src={heroImg} alt="Logo" className="mx-auto " width={500} />
                </div>
            </div>
        </section>
    );
};

export default Hero;