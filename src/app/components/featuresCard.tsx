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
    <section className='grid grid-cols-1 m-10 md:grid-cols-2 md:flex justify-center items-center text-xxs'>
      <div className={`col-span-1 ${imgOrder} sm:m-0`}>
        <Image src={image} alt="Feature 1" width={600} height={400} className="mx-auto" />
      </div>
      <div className={`col-span-1 ${conOrder}`}>
        <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 mb-4 md:mb-0 md:text-gray-400 md:text-sm">{content}</p>
        <button className="bg-gray-700 hover:bg-gray-400 text-white rounded py-2 px-4 m-4 md:align-middle">Try now</button>
        <button className="hover:bg-gray-400 text-white rounded-r py-2 px-4 m-4 md:align-middle">Learn More</button>
      </div>
    </section>
  );
};

export default FeaturesCard;