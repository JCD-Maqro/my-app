'use client';
import React from 'react'
import { Hero, Trustedby, FeaturesCard, UserTestimonial, Pricing, SignupCard, MoreBlog } from './components'
import { feature1, feature2, sakura } from './assets/images';  
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col justify-center text-center items-center'>
      {/* bg-blossom bg-fixed bg-fit bg-cover */}
      <div className=' w-[90vw] h-screen xxs:h-auto'> 
        <div className="pb-[150px]">
          <Hero />
        </div>
        <div className='justify-center inline-flex bg-white mb-32 xxs:mt-2'>
          <Trustedby />
        </div>
      </div>
      <div className='bg-bg2 text-center bg-cover bg-fit bg-fixed bg-no-repeat md:w-[99vw] py-6 sm:flex-row sm:flex-wrap sm:justify-center sm:w-screen xxs:w-screen'>
          <div className='my-3'>
            <FeaturesCard 
              title={"Real-time Threat Detection"} 
              image={feature1} 
              content={"Cyber Sakura's advanced security algorithms constantly monitor your devices, networks, and online activities, detecting and neutralizing potential threats in real time. With our cutting-edge technology, you can browse, download, and connect with confidence, knowing that Cyber Sakura has your back."} 
              isFlip={false}  
            />
          </div>
          <div className='my-3'>
            <FeaturesCard 
              title={"Secure Cloud Backup"}
              image={feature2}
              content={"Protect your valuable files and memories with Cyber Sakura's secure cloud backup feature. Safeguard your important documents, photos, videos, and other digital assets by securely storing them in the cloud. Even if your device is compromised or experiences a hardware failure, you can easily restore your data and resume with peace of mind."}
              isFlip={true}
            />
          </div>
          
          <div className='my-6 w-auto bg-gray-200 p-3 py-6 justify-center items-center flex'>
            <div id='carousel' className='md:w-[60%] xxs:w-screen'>
              <UserTestimonial />
            </div>
          </div>
      </div>
      <div className='bg-bg1 text-center bg-cover bg-fit bg-fixed bg-no-repeat space-y-10 flex-col md:w-[75vw] p-6 sm:flex-row sm:flex-wrap sm:justify-center xxs:w-screen'>
        <Pricing />
        <SignupCard title={"Get Started!"} image={sakura} content={'Get Started with Cyber Sakura: Secure Your Digital World and Experience Unparalleled Protection. Safeguard your data, defend against threats, and embrace digital tranquility.'} />
        <MoreBlog />
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
