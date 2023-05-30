'use client';
import { sakura } from '../assets/images';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

const MoreBlog = () => {
    return(
        <section className="m-12">
            <h5 className="lg:text-2xl m-2 font-bold text-white md:text-sm xxs:text-xs">What`s new?</h5>
            <div className="flex flex-wrap justify-center gap-8 my-4 text-left">
                <div className="max-w-sm my-4">
                    <Link href="/">
                        <Image src={sakura} alt='sakura 1'/>
                        <Card  className='rounded-none'>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white xxs:text-base">
                                The Growing Threat Landscape: How Cyber Sakura Keeps You Safe Online
                            </h5>
                            <div className='flex flex-wrap justify-between'>
                                <p className="font-normal text-gray-700 dark:text-gray-400 p-2 items-end xxs:text-xs">
                                    23/05/2023
                                </p>
                                <p className='rounded-full border-2 justify-end sm:w-1/4 p-2 text-center items-end xxs:w-1/2 text-xs'>
                                    4 mins.   
                                </p>
                            </div>
                        </Card>
                    </Link>
                </div>
                <div className="max-w-sm my-4">
                    <Link href="/">
                        <Image src={sakura} alt='sakura 1'/>
                        <Card  className='rounded-none'>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white xxs:text-base">
                                Unveiling the Secrets of Cyber Sakura: Exploring the Powerhouse of Digital Security
                            </h5>
                            <div className='flex flex-wrap justify-between'>
                                <p className="font-normal text-gray-700 dark:text-gray-400 p-2 items-end xxs:text-xs">
                                    23/05/2023
                                </p>
                                <p className='rounded-full border-2 justify-end sm:w-1/4 p-2 text-center items-end xxs:w-1/2 text-xs'>
                                    4 mins.   
                                </p>
                            </div>
                        </Card>
                    </Link>
                </div>
                <div className="max-w-sm my-4">
                <Link href="/">
                        <Image src={sakura} alt='sakura 1' />
                        <Card  className='rounded-none'>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white xxs:text-base">
                            Mastering Digital Protection: Cyber Sakura's Guide to Online Security
                            </h5>
                            <div className='flex flex-wrap justify-between'>
                                <p className="font-normal text-gray-700 dark:text-gray-400 p-2 items-end xxs:text-xs">
                                    23/05/2023
                                </p>
                                <p className='rounded-full border-2 justify-end sm:w-1/4 p-2 text-center items-end xxs:w-1/2 text-xs'>
                                    4 mins.   
                                </p>
                            </div>
                        </Card>
                    </Link>
                </div>
            </div>
            <div className='flex flex-wrap justify-center'>
            <Link href="/"><button className="bg-gray-700 hover:bg-gray-400 text-white rounded py-2 px-4 m-4 md:align-middle xxs:text-xs">See more articles</button></Link>
            </div>
        </section>
    )
}

export default MoreBlog;