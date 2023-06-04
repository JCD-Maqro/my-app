'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { company1, company2, company4 } from '../assets/images';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      alt: '1',
      text: 'Cyber Sakura has been a game-changer for me. With its real-time threat detection, I feel confident and safe while browsing the internet. Its like having a personal security guard for my digital life.',
      name: 'John Kentucky',
      position: 'President',
      company: company1,
    },
    {
      alt: '2',
      text: 'I cant recommend Cyber Sakura enough. The secure cloud backup feature has saved me from losing important files multiple times. Its a lifesaver!',
      name: 'Jack Ronald',
      position: 'CEO',
      company: company2,
    },
    {
      alt: '3',
      text: 'Since using Cyber Sakura, Ive experienced a noticeable improvement in my online security. The password manager feature keeps my accounts secure, and the device protection gives me peace of mind. Highly satisfied!',
      name: 'Bill Harper',
      position: 'CEO',
      company: company4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <section className="items-center justify-center ">
      <div className="h-[400px] xxs:h-[400px] sm:h-[300px] md:h-[400px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`h-[300px] xxs:h-[300px] sm:h-[200px] md:h-[300px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] ${
              index === currentSlide ? '' : 'hidden'
            }`}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center">
               <div className="flex items-center justify-center  xxs:w-1/2 xs:w-1/4 sm:w-1/5 md:w-1/6 mt-4">
                 <Image src={slide.company} alt="logo" width={1000} height={500}/>
               </div>
               <div className="text-justify mt-4 xxs:text-sm xs:text-lg sm:text-xl md:text-2xl md:max-w-xl sm:max-w-md xs:max-w-[340px] xxs:max-w-[280px]">{slide.text}</div>
               <div className="mt-4 sm:text-xs md:text-sm mb-3">
                 <AccountCircleIcon sx={{ fontSize: 60 }} /> <span className="font-bold sm:text-sm md:text-base">{slide.name}</span> - {slide.position}
               </div>
             </div>
          </div>
        ))}

        {/* Left arrow */}
        <button
          className="xxs:opacity-0 xs:opacity-40 xs:hover:opacity-100 bg-gray-800 absolute top-1/2 left-2 transform-translate-y-1/2 text-white text-2xl px-2 py-0"
          onClick={handlePrevSlide}
        >
          &lt;
        </button>

        {/* Right arrow */}
        <button
          className="xxs:opacity-0 xs:opacity-40 xs:hover:opacity-100 bg-gray-800 absolute top-1/2 right-2 transform-translate-y-1/2 text-white text-2xl px-2 py-0"
          onClick={handleNextSlide}
        >
          &gt;
        </button>
        
      </div>

      <div className="flex justify-center my-3 ">
          {slides.map((_, index) => (
            <div
                  key={index}
                  className={`w-4 h-4 mx-1 rounded-full xs:opacity-0 xxs:opacity-100 ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'}`}
                  onClick={() => handleSlideChange(index)}
                ></div>
              ))}
        </div>
    </section>
  );
};

export default Carousel;