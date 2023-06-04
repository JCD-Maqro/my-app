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
  const imgOrder = isFlip ? 'sm:order-1 lg:mr-24 md:mr-12 sm:mr-0' : 'sm:order-2 lg:ml-24 md:ml-12 sm:ml-0';
  const conOrder = isFlip ? 'sm:order-2' : 'sm:order-1';

  return (
    // gap-32 lg:p-6 lg:inline-flex lg:flex-wrap lg:justify-center xxs:p-0
    <section className="bg-gray-800 p-6 grid justify-items-center sm:grid-flow-col xs:grid-flow-row xs:inline-grid w-[100%]">
      <div className={`${imgOrder} md:max-w-lg sm:max-w-md`}>
        <Image src={image} alt={title} height={450} />
      </div>
      <div className={`md:ax-w-lg sm:max-w-md text-left py-6 flex flex-col justify-items-center justify-center ${conOrder}`}>
        <h3 className="max-w-xs text-white md:text-3xl sm:text-xl xxs:text-lg font-bold md:mb-6 sm:mb-3 xs:mb-6 md:p-0 sm:px-6 md:text-left sm:text-left xs:text-center xxs:text-center">{title}</h3>
        <div className="text-white max-w-xs md:mb-4 md:text-left sm:mb-0 xs:mb-6 md:text-sm md:p-0 sm:px-6 sm:text-justify xs:text-justify xxs:w-fit xxs:text-justify xxs:text-xs">
          <p>{content}</p>
        </div>
        <div className="my-3 flex flex-wrap max-w-xs sm:justify-normal md:p-0 sm:px-6 xs:justify-center xxs:justify-center">
          <button className="bg-gray-700 hover:bg-gray-400 text-white md:text-base sm:text-sm px-3 py-2">Try now</button>
          <button className="hover:bg-gray-400 text-white md:text-base sm:text-sm px-3 py-2">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard;