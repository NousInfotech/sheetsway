import React from 'react'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
  export default function Stats() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <span className={`${montserrat.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900`}>100</span>
            <span className={`${montserrat.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900`}>+</span>
          </div>
          <div className="text-gray-600 text-sm sm:text-base">
            <div className="font-semibold">Certified Auditors ready to</div>
            <div>take on your audit</div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <span className={`${montserrat.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900`}>4.8</span>
          </div>
          <div className="text-gray-600 text-sm sm:text-base">
            <div className="font-semibold">Auditors rated 4.8*</div>
            <div>or higher by real clients</div>
          </div>
        </div>
        
        <div className="text-center sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-center mb-2">
            <span className={`${montserrat.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900`}>2000</span>
            <span className={`${montserrat.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900`}>+</span>
          </div>
          <div className="text-gray-600 text-sm sm:text-base">
            <div className="font-semibold">Audit Requests</div>
            <div>Completed Fully Online</div>
          </div>
        </div>
      </div>
    );
  };
  

