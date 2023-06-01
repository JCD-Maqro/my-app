'use client';
import Image from 'next/image';
import { company1, company2, company3, company4, company5 } from '../assets/images/'

const TrustedBy = () => {
    return(
        <section className="p-8">
            <h5 className="lg:text-2xl font-bold text-black md:text-xl sm:text-lg xxs:text-lg">Trusted By</h5>
            <div className="grid md:grid-cols-5 gap-3 justify-center items-center justify-items-center p-3 sm:grid-flow-row xxs:grid-flow-row">
                <Image src={company1} width={150} height={150} alt="Company 1" className="mx-5 sm:my-3 xxs:my-3" />
                <Image src={company2} width={150} height={150} alt="Company 2" className="mx-5 sm:my-3 xxs:my-3" />
                <Image src={company3} width={150} height={150} alt="Company 3" className="mx-5 sm:my-3 xxs:my-3" />
                <Image src={company4} width={150} height={150} alt="Company 4" className="mx-5 sm:my-3 xxs:my-3" />
                <Image src={company5} width={150} height={150} alt="Company 5" className="mx-5 sm:my-3 xxs:my-3" />
            </div>
        </section>
    );
};

export default TrustedBy;