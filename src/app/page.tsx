'use client';
import React from 'react'
import { Hero, Navbar, Footer, Trustedby, FeaturesCard, UserTestimonial, Pricing, SignupCard, MoreBlog } from './components'
import { feature1, feature2, feature3 } from './assets/images';   

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col justify-center text-center items-center'>
      {/* bg-blossom bg-fixed bg-fit bg-cover */}
      <div className=' w-[90vw] h-screen xxs:h-auto'> 
        <Hero />
        <div className='flex justify-center mb-32 px-6 xxs:mt-2'>
          <Trustedby />
        </div>
      </div>
      <div className='bg-bg2 text-center bg-cover bg-fit bg-fixed bg-no-repeat space-y-10 flex-col md:w-[75vw] p-6 sm:flex-row sm:flex-wrap sm:justify-center xxs:w-screen'>
        <FeaturesCard title={"Real-time Threat Detection"} image={feature1} content={" Stay protected with Cyber Sakura's real-time threat detection."} isFlip={false}  />
        <FeaturesCard title={"Secure Cloud Backup"} image={feature2} content={"Safeguard your files with Cyber Sakura's secure cloud backup."} isFlip={true}  />
        <UserTestimonial />
      </div>
      <div className='bg-bg1 text-center bg-cover bg-fit bg-fixed bg-no-repeat space-y-10 flex-col md:w-[75vw] p-6 sm:flex-row sm:flex-wrap sm:justify-center xxs:w-screen'>
        <Pricing />
        <SignupCard title={"Get Started!"} image={feature3} content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
        <MoreBlog />
      </div>
    </main>
  );
}
