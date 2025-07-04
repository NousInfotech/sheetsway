import { Nunito } from 'next/font/google';
import React from 'react';
const nunito = Nunito({ subsets: ['latin'] });
const AuditComponent = () => {
  const services = [
    {
      title: "Freelancers & Micro Businesses",
      description: "In some cases, even small entities need audits. We'll guide you through what's required and match you with a cost-effective solution.",
      alt: "Person with laptop - Freelancer illustration",
      image: "https://undraw.co/api/illustrations/1c93ee97-7d40-4690-b6d8-26c57e2485c6",
      color: "text-orange-500"
    },
    {
      title: "Small Businesses",
      description: "Need an annual financial audit for compliance? We make it easy, fast, and affordable to get started.",
      alt: "Business presentation chart - Small business illustration",
      image: "https://undraw.co/api/illustrations/717d10fc-522e-4dfc-a287-c3c25f67b8c7",
      color: "text-orange-500"
    },
    {
      title: "Medium & Large Companies",
      description: "Get matched with the right auditor to meet your regulatory or board-level financial audit requirements.",
      alt: "Bar charts and graphs - Company analytics illustration",
      image: "https://undraw.co/api/illustrations/88ed8e77-c3fb-4879-9154-b5cdb703a429",
      color: "text-orange-500"
    },
    {
      title: "International Entities with Local Obligations",
      description: "If you operate in Europe and need country-specific financial audit, we'll connect you with local licensed providers.",
      alt: "Globe with continents - International business illustration",
      image: "https://undraw.co/api/illustrations/aa58ae94-3254-4e67-ace8-9f4a0143c7f1",
      color: "text-orange-500"
    },
    {
      title: "Backlogged or Late Filings",
      description: "Fell behind on last year's audit? We'll help you catch up quickly and professionally.",
      alt: "Person at desk with clock - Time management illustration",
      image: "https://undraw.co/api/illustrations/fc44e361-df7f-46fc-bbd9-95d715d17715",
      color: "text-orange-500"
    }
  ];

  return (
    <div className={`min-h-screen bg-gray-50 font-sans mt-28 rounded-t-[150px] ${nunito.className}`}>
      {/* Main Audit Section */}
      <div className="flex items-center justify-center pt-10">
        <div className="w-full mx-auto">
          <div 
            className="bg-white overflow-hidden"
            style={{
              borderTopLeftRadius: '150px',
              borderTopRightRadius: '150px',
            }}
          >
            {/* Header Section */}
            <div className="text-center pt-16 pb-12 px-6">
              <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
                Do You Need an Audit?
              </h1>
              <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-normal">
               {" If you're asking the question, we've probably got the answer."}
              </p>
            </div>

            {/* Services Grid */}
            <div className="px-6 pb-16 mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 max-w-6xl mx-auto">
                {services.map((service, index) => (
                  <div key={index} className="text-left">
                    {/* Image */}
                    <div className="mb-6 flex justify-start">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-20 h-20 object-contain rounded-lg"
                      />
                    </div>
                    
                    {/* Title */}
                    <h3 className={`text-base font-bold mb-4 ${service.color}`}>
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default AuditComponent;