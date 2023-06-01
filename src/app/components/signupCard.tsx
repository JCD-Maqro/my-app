import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { Features } from '../constants';

interface SignupCardProps {
  title: string;
  image: StaticImageData;
  content: string;
}

const SignupCard: FC<SignupCardProps> = ({ title, image, content }) => {


  return (
    <section className='flex flex-wrap justify-center m-4 xxs:m-1'>
      <div className='md:inline-flex grid grid-cols-1 md:grid-cols-2 items-center text-left text-xxs border-2 border-grey'>
        <div className=' max-w-[642px] col-span-1 md:order-2 sm:m-0 md:pb-0 sm:pb-3'>
          <Image src={image} alt="Feature 1" width={650} />
        </div>
        <div className='col-span-1 md:order-1 md:p-12 sm:p-3 xxs:p-3 md:max-w-md'>
          <h3 className="text-white md:text-4xl font-bold mb-4 sm:text-base xxs:text-base">{title}</h3>
          <p className="text-white mb-4 md:mb-0  md:text-sm xxs:text-xs">{content}</p>
          <button className="bg-gray-700 hover:bg-gray-400 p-3 text-white pt-2 px-4 mt-4 md:align-middle md:text-base sm:text-sm xxs:text-sm">Sign up</button>
        </div>
      </div>
    </section>
  );
};

export default SignupCard;