import { Nunito } from 'next/font/google';
import React from 'react';
import Button from '../Button'; // Adjust path if needed
import { ArrowBigLeftDash, ArrowBigRight } from 'lucide-react';

const nunito = Nunito({ subsets: ['latin'] });

const RetailSection = () => {
  return (
    <div className={`relative overflow-visible bg-orange-300 ${nunito.className}`}>
      <div className="max-w-6xl mx-auto px-6 py-6 relative flex items-center ">
        {/* Left Content */}
        <div className="w-full lg:w-[65%] z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight text-white">
            Retail, Hospitality & Service Companies
          </h2>
          <div className='flex flex-row gap-4'>
          <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed opacity-95 max-w-lg text-black">
            From restaurants to salons to multi-location shops, online, retail and any business or service, we connect you with auditors who understand seasonal sales, staff turnover, and inventory-heavy operations. Your business{" <span className='font-bold'>isn't standard</span>, and your audit shouldn't be either."}
          </p>
          <div className='flex flex-row gap-4 mt-4'>
          <Button className="!bg-white !text-orange-500 !px-8 !py-3 !rounded-full !font-semibold !hover:bg-gray-50 !transition-colors !duration-200 !text-lg !shadow-2xl max-h-12">
            Learn More <ArrowBigRight className='w-6 h-6'/>
          </Button>
          </div>
          </div>
        </div>
        {/* Right Side - Illustration */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 z-20">
          <img
            src="/path/to/your/retail-illustration.png" // Replace with your actual image path
            alt="Retail Illustration"
            className="w-[320px] h-[180px] object-contain drop-shadow-xl "
            style={{
              // Optionally add a border or torn effect here
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RetailSection;