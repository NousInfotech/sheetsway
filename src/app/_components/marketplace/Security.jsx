import React from 'react';
import { Shield, Lock, ShieldCheck, FileText } from 'lucide-react';

// Security Features Data
const securityFeatures = [
  {
    icon: <Shield className="w-6 h-6 text-orange-400" />,
    title: "Anonymous Audit Listings by Default"
  },
  {
    icon: <Lock className="w-6 h-6 text-orange-400" />,
    title: "GDPR-Compliant File Storage & Control"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
    title: "End-to-End Encryption on all data"
  },
  {
    icon: <FileText className="w-6 h-6 text-orange-400" />,
    title: "Keep Track of Every File Change"
  }
];

const SecuritySection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden -mt-48 pt-32">
   
      
      <div className="relative z-10 container mx-auto px-6 py-52">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto -mt-28">
          {/* Left Section */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <div className="px-3 py-2 flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">S</span>
                </div>
                <span className="text-lg font-bold text-white">SheetsWay</span>
                <span className="text-gray-100 text-sm">Audit Place</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-orange-400">Your Security,</span>
                <br />
                <span className="text-white">Taken Seriously</span>
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed">
               {" We protect your audit data like it's our own,"}
                <br />
                from your first upload to final report.
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-orange-500 hover:bg-orange-50 font-semibold text-lg px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More →
            </button>
          </div>

          {/* Right Section - Security Features */}
          <div className="flex-1 max-w-lg w-full">
            <div 
              className="bg-blue-500/20 backdrop-blur-sm rounded-3xl p-6 border-2 border-orange-400/30 relative"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.3) 100%)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Inner border effect */}
              <div className="absolute inset-2 border border-orange-400/20 rounded-2xl pointer-events-none"></div>
              
              <div className="relative z-10 space-y-6">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-400/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-orange-400/30">
                      {feature.icon}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-white text-lg font-semibold leading-tight">
                        {feature.title}
                      </h3>
                    </div>
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

export default SecuritySection;