'use client';
import Image from 'next/image';
import { company1, company2, company3, company4, company5 } from '../assets/images/'

const TrustedBy = () => {
    return(
        <section>
            <h5 className="lg:text-2xl font-bold text-white p-8 md:text-sm">Trusted By</h5>
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 ">
                <Image src={company1} width={150} height={150} alt="Company 1" />
                <Image src={company2} width={150} height={150} alt="Company 2" />
                <Image src={company3} width={150} height={150} alt="Company 3" />
                <Image src={company4} width={150} height={150} alt="Company 4" />
                <Image src={company5} width={150} height={150} alt="Company 5" />
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;