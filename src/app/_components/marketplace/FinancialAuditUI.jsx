import React from 'react';
import { Nunito} from 'next/font/google';
import Stats from './Stats';
import SecuritySection from './Security';
import { LeftSection, RightSection } from './FinancialAudit';
const nunito = Nunito({ subsets: ['latin'] });

// Main Component
const FinancialAuditUI = () => {
  return (
    <div className={`${nunito.className} min-h-screen bg-gray-50 relative`}>  
 
      {/* Audit section on top */}
      <div className="relative z-10  mx-auto  py-12">
        <div className="bg-white rounded-b-[150px] shadow-lg overflow-hidden z-10">
          <div className="p-4 sm:p-6 md:p-8 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
              <div 
                className="absolute -right-4 top-12 sm:top-16 lg:top-24 w-2/3 h-2/3 opacity-20 sm:opacity-30 -z-0 hidden md:block"
                style={{
                  backgroundImage: "url('https://sheetsway-nine.vercel.app/sec-2/Vector%20Smart%20Object.png')",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
              />
              <LeftSection />
              <RightSection />
            </div>
            <Stats/>
          </div>
        </div>
      </div>
           {/* SecuritySection as a hero background */}
           <div className="relative left-1/2 -bottom-0 w-full max-w-full -translate-x-1/2 z-0" style={{height: 520}}>
        <div className="relative w-full h-full">
          {/* Top white curve */}
          <div className="absolute -top-10 left-0 w-full h-10 bg-white rounded-b-[50%] z-10" />
          <div className="relative w-full h-full">
            <SecuritySection />
          </div>
         
        </div>
      </div>
      
    </div>
  );
};

export default FinancialAuditUI;