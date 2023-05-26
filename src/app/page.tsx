'use client';
import React from 'react'
import { Hero, Navbar, Footer, Trustedby, FeaturesCard, UserTestimonial, Pricing, SignupCard, MoreBlog } from './components'
import { sakura } from './assets/images';   
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Home() {
  return (
    // // <div className="flex flex-col min-h-screen">
    // //     <div className="flex-grow justify-center items-center text-center animate-fade-in">
    // //       <Navbar />
    // //       <Hero />
    // //       <div className='flex-grow'
    // //             style={{
    // //               backgroundImage: `url(${bg2})`,
    // //               backgroundSize: 'cover',
    // //               }}>
    // //         <div className='bg-[#193D6A]'>
    // //          <Trustedby />
    // //           <FeaturesCard title={"Feature 1"} image={sakura} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} isFlip={false}/>
    // //           <FeaturesCard title={"Feature 2"} image={sakura} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} isFlip={true}/>
    // //         </div>
            
    // //         <UserTestimonial />
    // //         <Pricing />
    // //         <SignupCard title={"Get Started!"} image={sakura} content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
    // //         <MoreBlog />
    // //       </div>
    // //       <div>
    // //       </div>
    // //     </div>
    // //   <Footer />
    // // </div>

    // <div className='flex flex-col min-h-screen' id='mainDiv'>
    //   <Navbar />
    //   <div id='container' className='flex-grow'>
    //     <Parallax pages={5}>

    //       <ParallaxLayer>
    //         <Hero />
    //       </ParallaxLayer>

    //       <ParallaxLayer
    //         offset={1}>
    //         <Trustedby />
    //       </ParallaxLayer>

    //       <ParallaxLayer
    //         offset={2}>
    //         <FeaturesCard title={"Feature 1"} image={sakura} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} isFlip={false}/>
    //         <FeaturesCard title={"Feature 2"} image={sakura} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} isFlip={true}/>
    //       </ParallaxLayer>

    //       <ParallaxLayer
    //         offset={3}>
    //           <UserTestimonial />
    //           <Pricing />
    //       </ParallaxLayer>

    //       <ParallaxLayer
    //         offset={4}>
    //           <SignupCard title={"Get Started!"} image={sakura} content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
    //           <MoreBlog />
    //       </ParallaxLayer>
    //     </Parallax>
    //   </div>
    //   <Footer />
    // </div>
    <div className='flex flex-col min-h-screen'>
    <Navbar />
    <div className='min-h-screen flex flex-col justify-center text-center items-center bg-bg3 bg-fixed bg-no-repeat bg-cover'>
      <Hero />
      <div className='bg-slate-700 flex justify-center pb-12 mb-12 px-6'>
        <Trustedby />
      </div>
      <div className='bg-bg2 text-center bg-cover bg-fixed bg-no-repeat flex-col max-w-full p-6 sm:flex-row sm:flex-wrap sm:justify-center'>
        <FeaturesCard title={"Feature 1"} image={sakura} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} isFlip={false}  />
        <FeaturesCard title={"Feature 2"} image={sakura} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} isFlip={true}  />
        <UserTestimonial />
      </div>
      <div className='bg-bg1 bg-cover bg-fixed bg-no-repeat'>
        <Pricing />
        <SignupCard title={"Get Started!"} image={sakura} content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
        <MoreBlog />
      </div>
    </div>
    <Footer />
  </div>
  );
}
