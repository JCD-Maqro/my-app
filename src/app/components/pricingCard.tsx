'use client';
import { FC  } from "react";

interface PricingCardProps {
    title: string;
    isMonthly: boolean;
}

const PricingCard: FC<PricingCardProps> = ({title, isMonthly}) => {
    const planPrice = isMonthly ? "/month" : "/year";
    let price = "Price Not Available";
    let isFeature4Blue = "text-gray-400 dark:text-gray-500"
    let isFeature4Line = "line-through decoration-gray-500"
    let isFeature5Blue = "text-gray-400 dark:text-gray-500"
    let isFeature5Line = "line-through decoration-gray-500"
    let isFeature6Blue = "text-gray-400 dark:text-gray-500"
    let isFeature6Line = "line-through decoration-gray-500"
    let isFeature7Blue = "text-gray-400 dark:text-gray-500"
    let isFeature7Line = "line-through decoration-gray-500"
    let numDevice = "0"

    switch (title) {
        case 'Personal':
            price = isMonthly ? "149.99" : "1,199.99";
            numDevice = "5"
            break;
        case 'Family':
            price = isMonthly ? "499.99" : "4,799.99";
            isFeature4Blue = "text-blue-600 dark:text-blue-500";
            isFeature4Line = "";
            isFeature5Blue = "text-blue-600 dark:text-blue-500";
            isFeature5Line = "";
            numDevice = "15"
            break;
        case 'Organization':
            price = isMonthly ? "1499.99" : "11,999.99";
            isFeature4Blue = "text-blue-600 dark:text-blue-500";
            isFeature4Line = "";
            isFeature5Blue = "text-blue-600 dark:text-blue-500";
            isFeature5Line = "";
            isFeature6Blue = "text-blue-600 dark:text-blue-500";
            isFeature6Line = "";
            isFeature7Blue = "text-blue-600 dark:text-blue-500";
            isFeature7Line = "";
            numDevice = "100"
            break;
        default:
            price = "Not Available"
    }

    
    return (
      <section className="m-3">
        <div className="lg:max-w-xs md:max-w-screen text-center xs:max-w-screen">
            <div className="bg-white shadow-md rounded-lg p-6 text-left">

                <div id="1" className="order-1">
                    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 xxs:text-base">
                        {title}
                    </h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold xxs:text-xl">
                            $
                        </span>
                        <span className="text-5xl font-extrabold tracking-tight xxs:text-xl">
                            {price}
                        </span>
                        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400 xxs:text-lg">
                            {planPrice}
                        </span>
                    </div>
                </div>

                <div id="2" className="order-2">
                    <div role="list" className="my-7 space-y-5">
                        <div className="flex space-x-3">
                            <svg className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 xxs:text-sm">
                            {numDevice} Devices
                            </span>
                        </div>
                        <div className="flex space-x-3">
                            <svg className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-xs text-left font-normal leading-tight text-gray-500 dark:text-gray-400">
                            Antivirus, malware, ransomware & spyware protection
                            </span>
                        </div>
                        <div className="flex space-x-3">
                            <svg className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 xxs:text-sm">
                            Protects and manages passwords
                            </span>
                        </div>
                        <div className={`flex space-x-3 ${isFeature4Line}`}>
                            <svg className={`h-5 w-5 shrink-0 ${isFeature4Blue}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 xxs:text-sm">
                            Parental Controls
                            </span>
                        </div>
                        <div className={`flex space-x-3 ${isFeature5Line}`}>
                            <svg className={`h-5 w-5 shrink-0 ${isFeature5Blue}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 xxs:text-sm">
                            Secure VPN to protect your privacy
                            </span>
                        </div>
                        <div className={`flex space-x-3 ${isFeature6Line}`}>
                            <svg className={`h-5 w-5 shrink-0 ${isFeature6Blue}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-xs text-left font-normal leading-tight text-gray-500">
                            Anti-track and Ad-blocker to stop third parties from collecting your data
                            </span>
                        </div>
                        <div className={`flex space-x-3 ${isFeature7Line}`}>
                            <svg className={`h-5 w-5 shrink-0 ${isFeature7Blue}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 xxs:text-sm">
                            24×7 phone & email support
                            </span>
                        </div>
                    </div>
                </div>

                <div id="3" className="order-3">
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                    >
                        Choose plan
                    </button>
                </div>
          </div>
        </div>
      </section>
      
    );
  };
  
  export default PricingCard;