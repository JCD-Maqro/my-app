'use client';
import Image from 'next/image';
import { company1, company2, company3, company4, company5 } from '../assets/images/'

const TrustedBy = () => {
    return(
        <section className="p-8">
            <h5 className="sm:text-2xl xs:text-xl xxs:text-xl font-bold text-black">Trusted By</h5>
            <div className="flex flex-wrap justify-center justify-items-center p-3">
                <Image src={company1} width={200} height={150} alt="Company 1" className="mx-3 sm:my-3 xxs:my-3" />
                <Image src={company2} width={200} height={150} alt="Company 2" className="mx-3 sm:my-3 xxs:my-3" />
                <Image src={company3} width={200} height={150} alt="Company 3" className="mx-3 sm:my-3 xxs:my-3" />
                <Image src={company4} width={200} height={150} alt="Company 4" className="mx-3 sm:my-3 xxs:my-3" />
                <Image src={company5} width={200} height={150} alt="Company 5" className="mx-3 sm:my-3 xxs:my-3" />
            </div>
        </section>
    );
};

export default TrustedBy;