'use client';
import React, { useState } from 'react';
import { PricingCard } from '../components';

const Pricing: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('monthly');

    const handleTabChange = (tab:string) => {
      setActiveTab(tab);
    };
  
    return (
      <section className='flex flex-wrap justify-center text-center'>
        <div className="my-12">
          <h5 className="lg:text-2xl m-3 font-bold text-white md:text-sm">Pricing</h5>
          <p className="lg:text-md text-white md:text-sm xxs:text-xs">Secure Your Digital Harmony at an Unbeatable Value:</p>
          <p className="lg:text-md text-white md:text-sm xxs:text-xs">Explore Cyber Sakura</p>
          <p className="lg:text-md mb-8 text-white md:text-sm xxs:text-xs">Pricing Plans Today!</p>
          <div className="inline-flex text-center justify-center border-8 border-solid border-gray-900 sm:m-3">
              <div className={`cursor-pointer inline-block py-2 px-4 text-gray-300 ${activeTab === 'monthly' ? 'bg-gray-700' : 'bg-gray-900'}`} onClick={() => handleTabChange('monthly')}>
                Monthly
              </div>
              <div className={`cursor-pointer inline-block py-2 px-4 text-gray-300 ${activeTab === 'yearly' ? 'bg-gray-700' : 'bg-gray-900'}`} onClick={() => handleTabChange('yearly')}>
                Yearly
              </div>
            </div>
          <div className="flex flex-wrap justify-center text-center">
            <div className="flex lg:flex-row text-left m-3 md:flex-col xs:flex-col xxs:flex-col">
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