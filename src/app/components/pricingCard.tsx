'use client';
import { useState } from "react";
import { FC  } from "react";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from 'flowbite-react';
interface PricingCardProps {
    title: string;
    isMonthly: boolean;
}

const PricingCard: FC<PricingCardProps> = ({title, isMonthly}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const planPrice = isMonthly ? "/user/month" : "/user/year";
    let price = "Price Not Available";
    let isFeature4Line = "line-through decoration-gray-500"
    let isFeature5Line = "line-through decoration-gray-500"
    let buttonContent = "Upgrade"
    let buttonStyle = " text-gray-800 border-2 border-solid border-blue-600"
    let iconStyle = (
            <svg className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
    );

    let popularIcon = (
        <></>
    );

    let popularcard = "py-6";

    switch (title) {
        case 'Personal':
            price = isMonthly ? "149.99" : "1,199.99";
            iconStyle = (
            <svg className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
            )
            break;
        case 'Startup':
            price = isMonthly ? "499.99" : "4,799.99";
            isFeature4Line = "";
            isFeature5Line = "";
            buttonStyle = "bg-blue-600 text-white"
            popularIcon = (
                <p className='text-white bg-gray-800 rounded-full border-2 flex items-center justify-center px-2 h-7 w-auto text-xs'>
                    Popular 
                </p>
            )
            popularcard = "py-8";
            break;
        case 'Organization':
            price = isMonthly ? "1499.99" : "11,999.99";
            isFeature4Line = "";
            isFeature5Line = "";
            buttonContent = "Contact Sale"
            break;
        default:
            price = "Not Available"
    }

    return (
      <section className="m-2 ">
        <div className="max-w-[360px] border-2 border-solid border-gray-500">
            <div className={`${popularcard} bg-white shadow-md px-6 text-left`}>

                <div id="1" className="order-1">
                    <div className="flex flex-wrap justify-between mb-4">
                        <h5 className=" md:text-3xl font-extrabold text-gray-500 dark:text-gray-400 xxs:text-xl">
                            {title}
                        </h5>
                        {popularIcon}
                    </div>
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
                    <div role="list" className="my-7 space-y-2">
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
                            <span className="flex justify-center items-center md:text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 xxs:text-xs">
                                Manages passwords&nbsp;<Tooltip content="Protect your password as well" className="px-1"><InfoOutlinedIcon fontSize="small" /></Tooltip>
                            
                            </span>
                        </div>
                        <div className={`flex space-x-3 ${isFeature4Line}`}>
                            {iconStyle}
                            <span className=" text-base font-normal leading-tight text-gray-500 xxs:text-sm">
                                Parental Controls
                            </span>
                        </div>
                        <div className={`flex space-x-3 ${isFeature5Line}`}>
                            {iconStyle}
                            <span className="text-base font-normal leading-tight text-gray-500 xxs:text-sm">
                            Secure VPN to protect your privacy
                            </span>
                        </div>
                    </div>
                </div>

                <div id="3" className="order-3">
                    <button
                        type="button"
                        className={`inline-flex w-full justify-center ${buttonStyle} px-5 py-2.5 text-center text-sm font-medium hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900`}
                    >
                        {buttonContent}
                    </button>
                </div>
          </div>
        </div>
      </section>
      
    );
  };
  
  export default PricingCard;