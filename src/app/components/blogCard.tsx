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
              <h5 className="font-bold leading-[0px] text-gray-900 dark:text-white md:text-base xxs:text-sm">
                  {title}
              </h5>
              <div className='flex justify-between my-3 p-2'>
                <div>
                  <p className="flex justify-center items-center font-normal text-gray-700 dark:text-gray-400 p-1 sm:text-sm xs:text-[12px]">
                        {date}
                  </p>
                </div>
                <div>
                  <p className='flex border-2 border-gray-400 rounded-xl justify-center p-1 xs:text-[12px]'>
                      {duration}   
                  </p>
                </div>
              </div>
          </div>
      </Link>
    </div>
  );
};

export default BlogCard;