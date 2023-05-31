'use client';
import Image from 'next/image';
import { heroImg } from '../assets/images'
import { FC  } from "react";

interface Hero2CardProps {
    title: string;
}

const Hero:FC<Hero2CardProps> = ({title}) => {

    return (
        <section className="flex flex-col items-center justify-center h-auto w-auto xxs:text-xs text-center">
            <div className=' xxs:justify-center items-center'>
                <h1 className="shadow-2xl- md:text-3xl pt-10 text-white xxs:text-lg">{title}</h1>
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