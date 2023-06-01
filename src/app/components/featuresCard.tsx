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
  const imgOrder = isFlip ? 'md:order-1  lg:mr-24' : 'md:order-2  lg:ml-24';
  const conOrder = isFlip ? 'md:order-2' : 'md:order-1';

  return (
    <section className="w-[99%] bg-gray-800 gap-32 lg:p-6 lg:inline-flex lg:flex-wrap lg:justify-center xxs:p-0">
      <div className={`${imgOrder} xxs:m-0`}>
        <Image src={image} alt={title} height={500} className="mx-auto" />
      </div>
      <div className={`text-left p-6 flex flex-col justify-center ${conOrder}`}>
        <h3 className="text-white text-xl font-bold mb-4 md:text-left sm:text-center xxs:text-center">{title}</h3>
        <div className="text-white md:max-w-xs mb-4 md:text-left md:mb-0 md:text-sm xxs:w-fit xxs:text-center xxs:text-xs">
          <p>{content}</p>
        </div>
        <div className="my-3">
          <button className="bg-gray-700 hover:bg-gray-400 text-white text-xs px-3 py-2">Try now</button>
          <button className="hover:bg-gray-400 text-white text-xs px-3 py-1">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard;