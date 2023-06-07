'use client';
import React from 'react';
import { Hero, Trustedby, FeaturesCard, UserTestimonial, Pricing, SignupCard, MoreBlog } from './components';
import { feature1, feature2, sakura } from './assets/images';  
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col justify-center justify-items-center text-center items-center'>
      {/* bg-blossom bg-fixed bg-fit bg-cover */}
      <div className='max-w-7xl h-screen xxs:h-auto'> 
        <div className="pb-[150px]">
          <Hero />
        </div>
        <div className='justify-center inline-flex bg-white mb-32 xxs:mt-2'>
          <Trustedby />
        </div>
      </div>
      <div className='bg-bg2 text-center bg-cover bg-fit bg-fixed bg-no-repeat flex justify-center w-[90vw] py-6 '>
        <div className='w-full flex-col flex justify-center items-center'>
          <div className='max-w-7xl my-3'>
              <FeaturesCard 
                title={"Real-time Threat Detection"} 
                image={feature1} 
                content={"Cyber Sakura's advanced security algorithms constantly monitor your devices, networks, and online activities, detecting and neutralizing potential threats in real time. With our cutting-edge technology, you can browse, download, and connect with confidence, knowing that Cyber Sakura has your back."} 
                isFlip={false}  
              />
          </div>
          <div className='max-w-7xl my-3'>
            <FeaturesCard 
              title={"Secure Cloud Backup"}
              image={feature2}
              content={"Protect your valuable files and memories with Cyber Sakura's secure cloud backup feature. Safeguard your important documents, photos, videos, and other digital assets by securely storing them in the cloud. Even if your device is compromised or experiences a hardware failure, you can easily restore your data and resume with peace of mind."}
              isFlip={true}
            />
          </div>
          
          <div className='my-6 bg-gray-200 p-3 py-6 justify-center items-center flex w-full'>
            <div id='carousel' className='md:max-w-4xl sm:max-w-3xl xs:max-w-xl xxs:w-screen'>
              <UserTestimonial />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-bg1 text-center bg-cover bg-fit bg-fixed bg-no-repeat space-y-10 flex-col p-6 sm:flex-row sm:flex-wrap sm:justify-center w-[90vw]'>
        <div className='py-8'>
          <Pricing />
        </div>
        <div className='py-8'>
        {/* "/sakura-hero-img.webp" */}
          <SignupCard title={"Get Started!"} image={sakura} content={'Get Started with Cyber Sakura: Secure Your Digital World and Experience Unparalleled Protection. Safeguard your data, defend against threats, and embrace digital tranquility.'} />
        </div>
        <div className='py-8'>
          <MoreBlog />
        </div>
      </div>
    </main>

    
    // <main className='min-h-screen flex flex-col justify-center text-center items-center'>
    //   <section className='scroll-section-outer'>
    //     <div>
    //       <div className='scroll-section-inner'>
    //         <div>

    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </main>
  );
}
