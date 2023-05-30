'use client';
import Image from 'next/image';
import { sakura, blossoms } from '../assets/images'

const Hero = () => {

    return (
        <section className="flex flex-col items-center justify-center h-auto w-auto xxs:text-xs text-center">
            <div className='bg-halfmoon bg-cover xxs:justify-center items-center'>
                <h1 className="shadow-2xl- md:text-3xl font-bold pt-10 text-white xxs:text-lg">Thriving in Digital Tranquility:  </h1>
                <p className="bg-white px-3 uppercase font-extrabold lg:text-lg mb-8 text-pink-400 sm:text-xs">
                    Cyber Sakura, Your Security Oasis. 
                </p>
                <div className="flex flex-wrap justify-center space-x-4">
                    <button className="lg:text-lg bg-gray-800 hover:bg-gray-700 text-white font-bold px-3 py-2 rounded-md mb-3 sm:text-xs">
                        Join us
                    </button>
                    <button className="lg:text-lg hover:bg-gray-700 text-white font-bold px-3 py-2 rounded-md text-center mb-3 sm:text-xs">
                        Request Demo
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center lg:p-12 sm:p-4 xxs:w-[75%] mt-3">
                <div className="rounded-md overflow-hidden">
                    <Image src={sakura} alt="Logo" className="mx-auto" width={1200} height={800} />
                </div>
            </div>
        </section>
    );
};

export default Hero;