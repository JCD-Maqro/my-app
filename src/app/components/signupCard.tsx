import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { Features } from '../constants';

interface SignupCardProps {
  title: string;
  image: string;
  content: string;
}

const SignupCard: FC<SignupCardProps> = ({ title, image, content }) => {

  return (
    <section className='flex flex-wrap justify-center m-4 xxs:m-1'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center text-left text-xxs border-2 border-grey'>
        <div className='h-full max-w-[600px] col-span-1 md:order-2 sm:m-0 md:pb-0 sm:pb-3'>
          <div id='imageStyle' className='w-full h-full'>
            <img src={`${image}`} alt={`${title}`}/>
          </div>
        </div>
        <div className='flex flex-col md:order-1 p-12 max-w-[600px] xxs:flex xxs:justify-ites-centerm'>
          <h3 className=" text-white md:text-4xl font-bold mb-4 xxs:text-4xl">{title}</h3>
          <p className=" text-white mb-4 md:mb-0 text-sm ">{content}</p>
          <div> 
            <button className="md:w-auto sm:w-full xs:w-full xxs:w-full bg-gray-700 hover:bg-gray-400 px-4 py-2 text-white mt-4 md:align-middle text-base">Sign up</button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SignupCard;