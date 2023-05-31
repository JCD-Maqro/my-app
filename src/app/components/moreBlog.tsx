'use client';
import { sakura } from '../assets/images';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

const MoreBlog = () => {
    return(
        <section className="m-12 xxs:m-3">
            <h5 className="lg:text-2xl m-2 font-bold text-white md:text-sm xxs:text-xs">What`s new?</h5>
            <div className="flex flex-wrap justify-center gap-8 my-4 text-left">
                
                {/* card 1 */}
                <div className="max-w-[300px] my-4 border-gray-600 border-solid border-[5px] rounded-lg">
                    <Link href="/">
                        <Image src={sakura} alt='sakura 1'/>
                        <Card  className='rounded-none'>
                            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white xxs:text-xs">
                                The Growing Threat Landscape: How Cyber Sakura Keeps You Safe Online
                            </h5>
                            <div className='flex flex-wrap justify-between'>
                                <p className="font-normal text-gray-700 dark:text-gray-400 p-2 items-end xxs:text-[10px]">
                                    23/05/2023
                                </p>
                                <p className='rounded-full border-2 justify-end sm:w-1/4 p-2 text-center items-end xxs:w-1/2 text-[10px]'>
                                    4 mins.   
                                </p>
                            </div>
                        </Card>
                    </Link>
                </div>

                {/* card 2 */}
                <div className="max-w-[300px] my-4 border-gray-600 border-solid border-[5px] rounded-lg">
                    <Link href="/">
                        <Image src={sakura} alt='sakura 1'/>
                        <Card  className='rounded-none'>
                            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white xxs:text-xs">
                                Unveiling the Secrets of Cyber Sakura: Exploring the Powerhouse of Digital Security
                            </h5>
                            <div className='flex flex-wrap justify-between'>
                                <p className="font-normal text-gray-700 dark:text-gray-400 p-2 items-end xxs:text-[10px]">
                                    23/05/2023
                                </p>
                                <p className='rounded-full border-2 justify-end sm:w-1/4 p-2 text-center items-end xxs:w-1/2 text-[10px]'>
                                    4 mins.   
                                </p>
                            </div>
                        </Card>
                    </Link>
                </div>

                {/* card 3 */}
                <div className="max-w-[300px] my-4 border-gray-600 border-solid border-[5px] rounded-lg">
                <Link href="/">
                        <Image src={sakura} alt='sakura 1' />
                        <Card  className='rounded-none'>
                            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white xxs:text-xs">
                            Mastering Digital Protection: Cyber Sakura's Guide to Online Security and Oasis
                            </h5>
                            <div className='flex flex-wrap justify-between'>
                                <p className="font-normal text-gray-700 dark:text-gray-400 p-2 items-end xxs:text-[10px]">
                                    23/05/2023
                                </p>
                                <p className='rounded-full border-2 justify-end sm:w-1/4 p-2 text-center items-end xxs:w-1/2 text-[10px]'>
                                    4 mins.   
                                </p>
                            </div>
                        </Card>
                    </Link>
                </div>
            </div>
            <div className='flex flex-wrap justify-center'>
                <Link href="/blog"><button className="bg-gray-700 hover:bg-gray-400 text-white rounded py-2 px-4 m-4 md:align-middle xxs:text-xs">See more articles</button></Link>
            </div>

            {/* section 2
            <div className="flex flex-wrap justify-center gap-8 my-4 text-left">
                
        
                <div className="max-w-[300px] my-4 border-gray-600 border-solid border-[5px] rounded-lg">
                    <Link href="/">
                        <Image src={sakura} alt='sakura 1'/>
                        <Card  className='rounded-none'>
                            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white xxs:text-xs">
                                The Growing Threat Landscape: How Cyber Sakura Keeps You Safe Online
                            </h5>
                            <div className='flex flex-wrap justify-between'>
                                <p className="font-normal text-gray-700 dark:text-gray-400 p-2 items-end xxs:text-[10px]">
                                    23/05/2023
                                </p>
                                <p className='rounded-full border-2 justify-end sm:w-1/4 p-2 text-center items-end xxs:w-1/2 text-[10px]'>
                                    4 mins.   
                                </p>
                            </div>
                        </Card>
                    </Link>
                </div>

   
                <div className="max-w-[300px] my-4 border-gray-600 border-solid border-[5px] rounded-lg">
                    <Link href="/">
                        <Image src={sakura} alt='sakura 1'/>
                        <Card  className='rounded-none'>
                            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white xxs:text-xs">
                                Unveiling the Secrets of Cyber Sakura: Exploring the Powerhouse of Digital Security
                            </h5>
                            <div className='flex flex-wrap justify-between'>
                                <p className="font-normal text-gray-700 dark:text-gray-400 p-2 items-end xxs:text-[10px]">
                                    23/05/2023
                                </p>
                                <p className='rounded-full border-2 justify-end sm:w-1/4 p-2 text-center items-end xxs:w-1/2 text-[10px]'>
                                    4 mins.   
                                </p>
                            </div>
                        </Card>
                    </Link>
                </div>

              
                <div className="max-w-[300px] my-4 border-gray-600 border-solid border-[5px] rounded-lg">
                <Link href="/">
                        <Image src={sakura} alt='sakura 1' />
                        <Card  className='rounded-none'>
                            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white xxs:text-xs">
                            Mastering Digital Protection: Cyber Sakura's Guide to Online Security and Oasis
                            </h5>
                            <div className='flex flex-wrap justify-between'>
                                <p className="font-normal text-gray-700 dark:text-gray-400 p-2 items-end xxs:text-[10px]">
                                    23/05/2023
                                </p>
                                <p className='rounded-full border-2 justify-end sm:w-1/4 p-2 text-center items-end xxs:w-1/2 text-[10px]'>
                                    4 mins.   
                                </p>
                            </div>
                        </Card>
                    </Link>
                </div>
            </div> */}
        </section>
    )
}

export default MoreBlog;