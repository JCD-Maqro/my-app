// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { bg4, logo } from '../assets/images';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     {
//       image: bg4,
//       alt: '1',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec sapien non mauris eleifend euismod.',
//       name: 'John Kentucky',
//       position: 'President',
//     },
//     {
//       image: bg4,
//       alt: '2',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec sapien non mauris eleifend euismod.',
//       name: 'Jack Ronald',
//       position: 'CEO',
//     },
//     {
//       image: bg4,
//       alt: '3',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec sapien non mauris eleifend euismod.',
//       name: 'Bill Harper',
//       position: 'CEO',
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const handleSlideChange = (index:number) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section className="items-center justify-center">
//       <div className="h-[600px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] relative">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`h-[600px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ${
//               index === currentSlide ? '' : 'hidden'
//             }`}
//           >
//             <Image src={slide.image} alt={slide.alt} className="object-cover h-full" layout="fill" />
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold text-center">
//             <h3 className="text-white lg:text-3xl font-bold m-3 text-sm sm:text-base md:text-lg">User Testimonials</h3>
//               <div className="flex items-center justify-center w-1/4 sm:w-1/5 md:w-1/6 mt-4">
//                 <Image src={logo} alt="logo" width={100} height={100} />
//               </div>
//               <div className="mt-4 text-sm sm:text-base md:text-lg">{slide.text}</div>
//               <div className="mt-4 text-sm sm:text-base md:text-lg mb-3">
//                 <AccountCircleIcon /> <span className="font-bold">{slide.name}</span> - {slide.position}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center mt-4">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`w-4 h-4 mx-1 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-300'}`}
//             onClick={() => handleSlideChange(index)}
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Carousel;

'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { logo } from '../assets/images';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      alt: '1',
      text: '"Cyber Sakura has been a game-changer for me. With its real-time threat detection, I feel confident and safe while browsing the internet. Its like having a personal security guard for my digital life.',
      name: 'John Kentucky',
      position: 'President',
    },
    {
      alt: '2',
      text: 'I cant recommend Cyber Sakura enough. The secure cloud backup feature has saved me from losing important files multiple times. Its a lifesaver!',
      name: 'Jack Ronald',
      position: 'CEO',
    },
    {
      alt: '3',
      text: 'Since using Cyber Sakura, Ive experienced a noticeable improvement in my online security. The password manager feature keeps my accounts secure, and the device protection gives me peace of mind. Highly satisfied!',
      name: 'Bill Harper',
      position: 'CEO',
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
    <section className="items-center justify-center">
      <div className="h-[600px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`h-[600px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ${
              index === currentSlide ? '' : 'hidden'
            }`}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold text-center">
            <h3 className="text-white lg:text-3xl font-bold m-3 text-sm sm:text-base md:text-lg">User Testimonials</h3>
               <div className="flex items-center justify-center w-1/4 sm:w-1/5 md:w-1/6 mt-4">
                 <Image src={logo} alt="logo" width={100} height={100} />
               </div>
               <div className="mt-4 text-sm sm:text-base md:text-lg">{slide.text}</div>
               <div className="mt-4 text-sm sm:text-base md:text-lg mb-3">
                 <AccountCircleIcon /> <span className="font-bold">{slide.name}</span> - {slide.position}
               </div>
             </div>
          </div>
        ))}

        {/* Left arrow */}
        <button
          className="opacity-40 hover:opacity-100 bg-gray-800 absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-2xl  rounded-full p-2"
          onClick={handlePrevSlide}
        >
          &lt;
        </button>

        {/* Right arrow */}
        <button
          className="opacity-40 hover:opacity-100 bg-gray-800 absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-2xl rounded-full p-2"
          onClick={handleNextSlide}
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-center ">
        {slides.map((_, index) => (
          <div
                key={index}
                className={`w-4 h-4 mx-1 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-300'}`}
                onClick={() => handleSlideChange(index)}
              ></div>
            ))}
      </div>
    </section>
  );
};

export default Carousel;