'use client';
import Image from 'next/image';
import testImage from '../assets/images/cybersakuralogo.png'

const TrustedBy = () => {
    return(
        <section className='lg:mt-12 sm:mt-6'>
            <h5 className="lg:text-2xl font-bold mb-8 text-white md:text-sm">Trusted By</h5>
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                <Image src={testImage} width={150} height={150} alt="Company 1" />
                <Image src={testImage} width={150} height={150} alt="Company 2" />
                <Image src={testImage} width={150} height={150} alt="Company 3" />
                <Image src={testImage} width={150} height={150} alt="Company 4" />
                <Image src={testImage} width={150} height={150} alt="Company 5" />
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;