'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { company1, company2, company4 } from '../assets/images';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Carousel } from 'flowbite-react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CarouselData = () => {
  const slides = [
    {
      id: 1,
      alt: '1',
      text: 'Cyber Sakura has been a game-changer for me. With its real-time threat detection, I feel confident and safe while browsing the internet.',
      name: 'John Ken',
      position: 'President',
      company: company1,
    },
    {
      id: 2,
      alt: '2',
      text: 'I cant recommend Cyber Sakura enough. The secure cloud backup feature has saved me from losing important files multiple times.',
      name: 'Jack Ronald',
      position: 'CEO',
      company: company2,
    },
    {
      id: 3,
      alt: '3',
      text: 'Ive experienced a noticeable improvement in my online security. The password manager feature keeps my accounts secure.',
      name: 'Bill Harper',
      position: 'CEO',
      company: company1,
    },
    {
      id: 4,
      alt: '4',
      text: 'Ive experienced a noticeable improvement in my online security. The password manager feature keeps my accounts secure.',
      name: 'Jay Stark',
      position: 'CEO',
      company: company1,
    },
    {
      id: 5,
      alt: '5',
      text: 'Ive experienced a noticeable improvement in my online security. The password manager feature keeps my accounts secure.',
      name: 'Joe Henson',
      position: 'CEO',
      company: company1,
    },

  ];

  return (
    <section className="items-center justify-center ">
      <div className="h-[400px] xxs:h-[400px] sm:h-[300px] md:h-[400px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] relative">
      <Carousel 
        leftControl={<div className="p-3 text-center items-center bg-gray-700 bg-opacity-60 "><ArrowBackIosIcon className="text-white 2xl:text-[30px] md:text-[20px]"/> </div>}
        rightControl={<div className="p-3 text-center items-center bg-gray-700 bg-opacity-60 "><ArrowForwardIosIcon className="text-white 2xl:text-[30px] md:text-[20px]"/> </div>}
        indicators={false}>
        {slides.map((slide, index) => (
            <div id={`${slide.id}`} className="absolute inset-0 flex flex-col justify-center items-center text-black text-center">
              <div className="flex items-center justify-center  xxs:w-1/2 xs:w-1/4 sm:w-1/5 md:w-1/6 mt-4">
                <Image src={slide.company} alt="logo" height={500}/>
              </div>
              <div className="text-justify mt-4 xxs:text-sm xs:text-lg sm:text-xl md:text-2xl md:max-w-xl sm:max-w-[560px] xs:max-w-[380px] xxs:max-w-[250px]">{slide.text}</div>
              <div className="mt-4 sm:text-xs md:text-sm mb-3">
                <AccountCircleIcon sx={{ fontSize: 60 }} /> <span className="font-bold sm:text-sm md:text-base">{slide.name}</span> - {slide.position}
              </div>
            </div>
        ))}
        </Carousel>

        {/* Left arrow
        <button
          className="xxs:opacity-0 xs:opacity-0 sm:opacity-40 sm:hover:opacity-100 bg-gray-800 absolute top-1/2 left-2 transform-translate-y-1/2 text-white text-2xl px-2 py-0"
          onClick={handlePrevSlide}
        >
          &lt;
        </button>

        {/* Right arrow */}
        {/* <button
          className="xxs:opacity-0 xs:opacity-0 sm:opacity-40 sm:hover:opacity-100 bg-gray-800 absolute top-1/2 right-2 transform-translate-y-1/2 text-white text-2xl px-2 py-0"
          onClick={handleNextSlide}
        >
          &gt;
        </button> */} 
        
      </div>

      {/* <div className="flex justify-center my-3 ">
          {slides.map((_, index) => (
            <div
                  key={index}
                  className={`w-4 h-4 mx-1 rounded-full sm:opacity-0 xs:opacity-100 ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'}`}
                  onClick={() => handleSlideChange(index)}
                ></div>
              ))}
        </div> */}
    </section>
  );
};

export default CarouselData;