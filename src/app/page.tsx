'use client';
import React from 'react'
import { Hero, Trustedby, FeaturesCard, UserTestimonial, Pricing, SignupCard, MoreBlog } from './components'
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
      <div className='bg-bg2 text-center bg-cover bg-fit bg-fixed bg-no-repeat md:w-[75vw] p-6 sm:flex-row sm:flex-wrap sm:justify-center xxs:w-screen'>
          <FeaturesCard 
            title={"Real-time Threat Detection"} 
            image={feature1} 
            content={"Cyber Sakura's advanced security algorithms constantly monitor your devices, networks, and online activities, detecting and neutralizing potential threats in real time. With our cutting-edge technology, you can browse, download, and connect with confidence, knowing that Cyber Sakura has your back."} 
            isFlip={true}  
          />
          <FeaturesCard
            title={"Secure Cloud Backup"}
            image={feature2}
            content={"Protect your valuable files and memories with Cyber Sakura's secure cloud backup feature. Safeguard your important documents, photos, videos, and other digital assets by securely storing them in the cloud. Even if your device is compromised or experiences a hardware failure, you can easily restore your data and resume with peace of mind."}
            isFlip={false}
          />
          <div className='w-auto bg-bg4 p-3 justify-center items-center flex'>
            <div id='carousel' className='md:w-[50%] xxs:w-screen'>
              <UserTestimonial />
            </div>
          </div>
          
      </div>
      <div className='bg-bg1 text-center bg-cover bg-fit bg-fixed bg-no-repeat space-y-10 flex-col md:w-[75vw] p-6 sm:flex-row sm:flex-wrap sm:justify-center xxs:w-screen'>
        <Pricing />
        <SignupCard title={"Get Started!"} image={feature3} content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
        <MoreBlog />
      </div>
    </main>
  );
}
