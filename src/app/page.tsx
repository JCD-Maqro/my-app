import React from 'react'
import { Hero, Navbar, Footer, Trustedby, FeaturesCard, UserTestimonial, Pricing, SignupCard, MoreBlog } from './components'
import { sakura } from './assets/images';   
// import { Parallax, ParallaxLayer } from 'react-spring';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow justify-center items-center text-center animate-fade-in">
        <Hero />
        <Trustedby />
        <FeaturesCard title={"Feature 1"} image={sakura} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} isFlip={false}/>
        <FeaturesCard title={"Feature 2"} image={sakura} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} isFlip={true}/>
        <UserTestimonial />
        <Pricing />
        <SignupCard title={"Get Started!"} image={sakura} content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
        <MoreBlog />
      </div>
      <Footer />
    </div>
  );
}
