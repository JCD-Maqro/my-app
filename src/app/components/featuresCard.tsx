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
    <section className='grid grid-cols-1 m-3 md:grid-cols-2 md:flex justify-center items-center text-xxs'>
      <div className={`${imgOrder} sm:m-0`}>
        <Image src={image} alt={`${title}`} width={600} height={400} className="mx-auto rounded-lg" />
      </div>
      <div className={`bg-gray-800 p-6 flex flex-col justify-center rounded-lg  ${conOrder}`}>
        <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 mb-4 md:mb-0 md:text-gray-400 md:text-sm xxs:text-xs">{content}</p>
        <div className='flex justify-center text-center xxs:text-xs mx-3'>
          <button className="bg-gray-700 hover:bg-gray-400 text-white rounded py-2 px-4 m-4 md:align-middle md:text-sm xxs:text-[10px]">Try now</button>
          <button className="hover:bg-gray-400 text-white rounded-r py-2 px-4 m-4 md:align-middle md:text-sm xxs:text-[10px]">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard;