'use client';
import React, { useState } from 'react';
import { PricingCard } from '../components';

const Pricing: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('monthly');

    const handleTabChange = (tab:string) => {
      setActiveTab(tab);
    };
  
    return (
      <section className='flex justify-center text-center'>
        <div className="my-3">
          <h5 className="m-3 font-bold text-white sm:text-4xl xs:text-3xl xxs:text-xl">Pricing</h5>
          <div className="flex flex-wrap justify-center">
            <p className="text-white sm:text-lg xs:text-base md:max-w-lg sm:max-w-md xs:max-w-sm xxs:max-w-[200px] mb-3">Secure Your Digital Harmony at an Unbeatable Value: Explore Cyber Sakura Pricing Plans Today!</p>
          </div>
          <div className="inline-flex text-center justify-center border-8 border-solid border-gray-900 sm:m-3">
              <div className={`cursor-pointer inline-block py-2 px-4 text-gray-300 ${activeTab === 'monthly' ? 'bg-gray-700' : 'bg-gray-900'}`} onClick={() => handleTabChange('monthly')}>
                Monthly
              </div>
              <div className={`cursor-pointer inline-block py-2 px-4 text-gray-300 ${activeTab === 'yearly' ? 'bg-gray-700' : 'bg-gray-900'}`} onClick={() => handleTabChange('yearly')}>
                Yearly
              </div>
            </div>
          <div>
            <div className="flex flex-wrap justify-center text-left">
              {activeTab === 'monthly' && (
                <>
                  <PricingCard title="Personal" isMonthly={true} />
                  <PricingCard title="Family" isMonthly={true} />
                  <PricingCard title="Organization" isMonthly={true} />
                </>
              )}
              {activeTab === 'yearly' && (
                <>
                  <PricingCard title="Personal" isMonthly={false} />
                  <PricingCard title="Family" isMonthly={false} />
                  <PricingCard title="Organization" isMonthly={false} />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Pricing;