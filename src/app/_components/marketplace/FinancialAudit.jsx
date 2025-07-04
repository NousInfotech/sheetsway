import React from 'react';


// Left Section Component
const steps = [
  "Post your audit budget.",
  "Receive quotes.",
  "Compare live offers.",
  "Choose your auditor."
];
export const LeftSection = () => {
    return (
      <div className="flex-1 space-y-6 sm:space-y-8">
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight md:mb-12">
            Get Your Financial Audit<br />
            Done Remotely. <span className="text-blue-600">Fully Online.</span>
          </h1>
        </div>
        <div className="space-y-2">
          {steps.map((step, idx) => (
            <div
              key={step}
              className="bg-white rounded-xl px-4 py-3 sm:px-6 sm:py-4 shadow-lg max-w-full sm:max-w-[302px]"
              style={{
                boxShadow: "0 2px 12px 0 rgba(59,130,246,0.10), 0 1.5px 8px 0 rgba(59,130,246,0.08)"
              }}
            >
              <span className="text-lg sm:text-xl lg:text-2xl text-gray-800 font-medium">{step}</span>
            </div>
          ))}
          <div className="pt-2">
            <div className="bg-[#16C60C] text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold text-base sm:text-lg md:text-2xl shadow-lg text-center w-fit z-10">
              Sit back - we handle the rest.
            </div>
          </div>
          <div className="pt-4">
            <button className="bg-white text-gray-700 font-medium px-4 py-2 sm:px-6 sm:py-2 rounded-full shadow-sm hover:shadow-md transition text-sm sm:text-base">
              Learn How  -&gt;
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  // Right Section Component  
  export const RightSection = () => {
    return (
      <div className="flex-1 relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[450px]">
        {/* Main card stack inspired by Magic UI */}
      </div>
    );
  };