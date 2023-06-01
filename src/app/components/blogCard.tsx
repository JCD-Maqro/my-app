import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import Link from 'next/link';

interface blogCardProps {
  title: string;
  image: StaticImageData;
  tag: string;
  date: string;
  duration: string;
}

const BlogCard: FC<blogCardProps> = ({ title, image, tag, date, duration }) => {

  return (
    <div className="max-w-[350px]">
      <Link href="/">
          <Image src={image} alt='sakura 1'/>
          <div className='bg-white p-4 max-h-[350px]'>
              <p className='text-xs py-2'>{tag}</p>
              <h5 className="font-bold leading-[0px] text-gray-900 dark:text-white md:text-sm xxs:text-xs">
                  {title}
              </h5>
              <div className='flex flex-wrap justify-between'>
                  <p className="font-normal text-gray-700 dark:text-gray-400 py-2 items-end md:text-sm sm:text-xs xxs:text-[10px]">
                      {date}
                  </p>
                  <p className='inline-flex rounded-full border-2 justify-center md:w-1/3 sm:w-1/4 py-1 text-center items-end md:text-sm sm:text-xs xxs:w-1/2 xxs:pb-w xxs:text-[10px]'>
                      {duration}   
                  </p>
              </div>
          </div>
      </Link>
    </div>
  );
};

export default BlogCard;