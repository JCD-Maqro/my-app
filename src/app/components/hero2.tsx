'use client';
import Image from 'next/image';
import { heroImg } from '../assets/images'
import { FC  } from "react";

interface Hero2CardProps {
    title: string;
    content: string;
}

const Hero:FC<Hero2CardProps> = ({title, content}) => {

    return (
        <section className="flex flex-col items-center justify-center h-auto w-auto xxs:text-xs text-center">
            <div className=' xxs:justify-center items-center'>
                <h1 className="shadow-2xl md:text-6xl pt-10 text-white xxs:text-lg">{title}  </h1>
                <p className="px-3 mt-2 max-w-4xl lg:text-lg mb-3 text-gray-400 md:text-base xxs:text-xs sm:text-xs">
                    {content}
                </p>
            </div>
            <div className="flex items-center justify-center lg:px-12 lg:pb-12 lg:pt-2 sm:p-4 md:w-auto xxs:w-screen mt-3">
                <div className="border-gray-400 border-2 shadow-xl overflow-hidden">
                    <Image src={heroImg} alt="Logo" className="mx-auto " width={1400} />
                </div>
            </div>
        </section>
    );
};

export default Hero;