'use client';
import React from 'react'
import { Hero, Navbar, Footer, Trustedby, FeaturesCard, UserTestimonial, Pricing, SignupCard, MoreBlog } from './components'
import { sakura } from './assets/images';   


export default function Home() {
  return (
    <div className='flex flex-col min-h-screen bg-bg3 bg-fixed bg-no-repeat bg-cover'>
      <Navbar />
    <div className='min-h-screen flex flex-col justify-center text-center items-center'>
      <div className='bg-blossom bg-fixed bg-fit bg-cover w-[90vw] h-screen xxs:h-auto'>
        <Hero />
        <div className='flex justify-center mb-32 px-6 xxs:mt-2'>
          <Trustedby />
        </div>
      </div>
      <div className='bg-bg2 text-center bg-cover bg-fit bg-fixed bg-no-repeat flex-col md:w-[50vw] p-6 sm:flex-row sm:flex-wrap sm:justify-center xxs:w-screen'>
        <FeaturesCard title={"Feature 1"} image={sakura} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} isFlip={false}  />
        <FeaturesCard title={"Feature 2"} image={sakura} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} isFlip={true}  />
        <UserTestimonial />
      </div>
      <div className='bg-bg1 bg-cover bg-fixed bg-no-repeat md:w-[50vw] xxs:w-screen'>
        <Pricing />
        <SignupCard title={"Get Started!"} image={sakura} content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
        <MoreBlog />
      </div>
    </div>
    <Footer />
  </div>
  );
}
