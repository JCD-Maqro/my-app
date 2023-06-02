'use client';
import { sakura } from '../assets/images';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogCard } from '../components';

const MoreBlog = () => {
    return(
        <section className="m-12 xxs:m-3 flex flex-col justify-items-center items-center">
            <h5 className="m-2 font-bold text-white md:text-4xl xxs:text-3xl">What`s new?</h5>
            <p className="md:max-w-md sm:max-w-sm xs:max-w-xs text-left text-base m-2 text-white">Stay up to date with the latest trends, insights, and advancements in cybersecurity with our informative blog section.</p>
            <div className="flex flex-wrap justify-center gap-8 my-4 text-left">
                {/* card 1 */}
                <BlogCard 
                    title='Security Potential: How Cyber Sakura Keeps You Safe Online to reach inner peace' 
                    image={sakura} 
                    tag='Digital Security' 
                    date='23/05/2023' 
                    duration=' 4 minutes '
                />

                {/* card 2 */}
                <BlogCard 
                    title='Unveiling the Secrets of Cyber Sakura: Exploring the Powerhouse of Digital Security' 
                    image={sakura} 
                    tag='Digital Security' 
                    date='23/05/2023' 
                    duration=' 4 minutes '
                />

                {/* card 3 */}
                <BlogCard 
                    title='Mastering Digital Protection: Cyber Sakuras Guide to Online Security and Oasis' 
                    image={sakura} 
                    tag='Digital Security' 
                    date='23/05/2023' 
                    duration=' 4 minutes '
                />
            </div>

            <div className='flex flex-wrap justify-center'>
                <Link href="/blog">
                    <button className="bg-gray-700 hover:bg-gray-400 text-white py-2 px-4 m-4 md:align-middle text-sm">See more articles</button>
                </Link>
            </div>
        </section>
    )
}

export default MoreBlog;