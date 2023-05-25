'use client';
import Image from 'next/image';
import { sakura } from '../assets/images'

const Hero = () => {

    return (
        <section className="flex flex-col items-center justify-center h-auto w-auto mb-12 xxs:text-xs text-center">
            <h1 className="md:text-3xl font-bold mb-8 pt-10 text-white xxs:text-xs">Welcome to the Hero Page</h1>
            <p className="lg:text-lg text-gray-500 sm:text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec sapien non mauris eleifend euismod. 
            </p>
            <p className="lg:text-lg text-gray-500 sm:text-xs">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium 
            </p>
            <p className="lg:text-lg text-gray-500 mb-8 sm:text-xs">
                urna at tincidunt congue.
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
                <button className="lg:text-lg bg-gray-800 hover:bg-gray-700 text-white font-bold px-3 py-2 rounded-md mb-3 sm:text-xs">
                    Join us
                </button>
                <button className="lg:text-lg hover:bg-gray-700 text-white font-bold px-3 py-2 rounded-md text-center mb-3 sm:text-xs">
                    Request Demo
                </button>
            </div>
            <div className="flex items-center lg:p-12 sm:p-4">
                <div className="max-w-6xl rounded-md overflow-hidden">
                    <Image src={sakura} alt="Logo" className="mx-auto" width={1200} height={800} />
                </div>
            </div>
        </section>
    );
};

export default Hero;