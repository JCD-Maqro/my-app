import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { Features } from '../constants';

interface FeaturesCardProps {
  title: string;
  image: StaticImageData;
  content: string;
  isFlip: boolean;
}

const FeaturesCard: FC<FeaturesCardProps> = ({ title, image, content, isFlip }) => {
  const imgOrder = isFlip ? 'md:order-1 pb-3 lg:mr-24' : 'md:order-2 pb-3 lg:ml-24';
  const conOrder = isFlip ? 'md:order-2' : 'md:order-1';

  return (
    <section className=' m-3 p-3 lg:flex justify-center gap-[30px] items-center text-xxs xxs:gap-0 xxs:p-0 xxs:m-0 xxs:my-3'>
      <div className={`${imgOrder} xxs:m-0 `}>
        <Image src={image} alt={`${title}`} height={350} className="mx-auto rounded-lg" />
      </div>
      <div className={`text-left bg-gray-800 p-6 flex flex-col justify-center rounded-lg  ${conOrder}`}>
        <h3 className="text-white text-xl font-bold mb-4 xxs:text-center">{title}</h3>
        <div className="text-gray-300 md:max-w-xs mb-4 md:text-left md:mb-0 md:text-gray-400 md:text-sm xxs:w-fit xxs:text-center xxs:text-xs">
          <p>{content}</p>
        </div>
        <div className='flex justify-center text-center xxs:text-xs mx-3'>
          <button className="bg-gray-700 hover:bg-gray-400 text-white rounded py-2 px-4 m-4 md:align-middle md:text-sm xxs:text-[10px]">Try now</button>
          <button className="hover:bg-gray-400 text-white rounded-r py-2 px-4 m-4 md:align-middle md:text-sm xxs:text-[10px]">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard;