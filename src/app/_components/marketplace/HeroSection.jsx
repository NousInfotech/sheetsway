"use client";
import React, { useState } from 'react';
import { ChevronDown, Facebook, Linkedin, Instagram, Phone } from 'lucide-react';
import Button from '../Button';
import { countries, businessTypes } from '@/data/input';
import { Nunito, Montserrat } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '900'], variable: '--font-nunito' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-montserrat' });

export default function HeroSection() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessType, setBusinessType] = useState(businessTypes[0]);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);

  const actionButtons = [
    { label: 'I need an Audit' },
    { label: 'I\'m an Auditor' }
  ];

  const socialLinks = [
    { icon: <Facebook className="text-white w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="text-white w-5 h-5" />, href: "#" },
    { icon: <Instagram className="text-white w-5 h-5" />, href: "#" },
    { icon: <div className="text-white w-5 h-5 font-bold text-sm flex items-center justify-center">t</div>, href: "#" },
  ];

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setCountryDropdownOpen(false);
  };

  const handleBusinessTypeSelect = (type) => {
    setBusinessType(type);
    setBusinessDropdownOpen(false);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const cleanValue = value.replace(/\D/g, '');
    setPhoneNumber(cleanValue);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-white z-40">
      {/* Main Content - Orange Section with Rounded Bottom */}
      <div className='w-full bg-gradient-to-b from-[#FF8C1A] to-[#FFB347] pb-20 rounded-b-[200px]'>
        <div className="w-full max-w-5xl mx-auto pt-16 px-6 flex flex-col items-center text-center">
          {/* Main Heading */}
          <h1 className={`text-5xl md:text-6xl font-bold leading-tight mb-2 ${montserrat.className}`} style={{ color: '#fff' }}>
            Find Your Auditor Online
          </h1>
          <h2 className={`text-4xl md:text-5xl font-bold leading-tight mb-6 ${montserrat.className}`}>
            <span style={{ color: '#1A237E' }}>Fast, Private, and Easy</span>
          </h2>
          {/* Subheading */}
          <p className={`text-xl mb-8 font-medium max-w-3xl ${nunito.className}`} style={{ color: '#3A3A3A' }}>
            {"Audit Firms Bid. Compare Quotes in Minutes. You Choose. It's That Simple."}
          </p>
          {/* Form Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 w-full max-w-5xl mx-auto">
            {/* Combined Business Type + Phone Input Container */}
            <div className={`bg-white rounded-lg shadow-lg flex items-center w-full md:w-[45%] h-14 relative ${nunito.className}`}>
              {/* Business Type Dropdown Section */}
              <div className="relative  items-center">
                <button
                  className="w-full h-14 px-4 flex items-center  text-left focus:outline-none hover:bg-gray-50 rounded-l-lg"
                  onClick={() => setBusinessDropdownOpen(!businessDropdownOpen)}
                  type="button"
                >
                  <span className="text-gray-700 text-base font-medium truncate">{businessType}</span>
                  <ChevronDown className="ml-2 text-gray-500 w-5 h-5 flex-shrink-0" />
                </button>
                {businessDropdownOpen && (
                  <ul className="absolute left-0 top-full mt-1 bg-white rounded-lg shadow-xl z-30 border border-gray-200 max-h-60 overflow-y-auto w-full min-w-80">
                    {businessTypes.map((type) => (
                      <li
                        key={type}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-left text-base first:rounded-t-lg last:rounded-b-lg transition-colors border-b border-gray-100 last:border-b-0"
                        onClick={() => handleBusinessTypeSelect(type)}
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Vertical Divider Line */}
              <div className="w-px h-8 bg-gray-300"></div>

              {/* Country Dropdown Section */}
              <div className="relative">
                <button
                  className="flex items-center px-4 py-3 focus:outline-none hover:bg-gray-50 h-14"
                  onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                  type="button"
                >
                 <img src={selectedCountry.flagUrl} alt={selectedCountry.name} width="30" height="20" className='mr-2'/>

                  <span className="text-gray-700 text-base font-medium mr-2">{selectedCountry.code}</span>
                  <ChevronDown className="text-gray-500 w-5 h-5" />
                </button>
                
                {countryDropdownOpen && (
                  <ul className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-xl z-40 border border-gray-200 w-80 max-h-60 overflow-y-auto">
                    {countries.map((country) => (
                      <li
                        key={country.code}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center text-base first:rounded-t-lg last:rounded-b-lg transition-colors border-b border-gray-100 last:border-b-0"
                        onClick={() => handleCountrySelect(country)}
                      >
                        <span className="text-lg mr-3">{country.flag}</span>
                        <span className="font-medium text-gray-700 mr-3 min-w-10">{country.code}</span>
                        <span className="text-gray-600 text-sm mr-3 min-w-12">{country.dialCode}</span>
                        <span className="text-gray-600 text-sm truncate">{country.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

             
              {/* Phone Number Input */}
              {/* <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="Enter phone number"
                className="flex-1 px-4 py-3 text-gray-700 text-base focus:outline-none rounded-r-lg bg-transparent placeholder-gray-500 h-14"
              /> */}
            </div>

            {/* List Audit Button */}
            <div className="w-full md:w-1/5">
              <Button 
                type="primary" 
                color="blue-800" 
                className={`w-full h-14 text-base font-semibold bg-[#1A237E] hover:bg-[#0D1333] text-white shadow-lg ${nunito.className}`}
              >
                List your Audit Now
              </Button>
            </div>
          </div>

          {/* Easy Online Audit Journey */}
          <div className={`text-xl font-medium mb-8 ${nunito.className}`} style={{ color: '#fff' }}>
            Start your <span className={`font-bold ${montserrat.className}`} style={{ color: '#FFD600' }}>Easy Online Audit</span> journey here
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
            {actionButtons.map((btn) => (
              <Button 
                key={btn.label}
                type="secondary" 
                className={`!bg-white !text-[#3A3A3A] !px-20 !py-4 !text-base !font-semibold !shadow-lg !hover:shadow-xl ${nunito.className}`}
                pill={true}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
 
      {/* Bottom Cards Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-6 mt-12">
        {/* Left Card - Need an Audit */}
        <div className={`rounded-2xl shadow-xl p-10 flex flex-col items-start lg:w-2/6 relative min-h-[400px] ${nunito.className}`} style={{ background: '#FF8C1A' }}>
          <div className={`font-bold text-2xl mb-3 ${montserrat.className}`} style={{ color: '#fff' }}>
            Need an Audit?
          </div>
          <div className={`text-lg mb-6 ${nunito.className}`} style={{ color: '#fff' }}>
            Let Auditors Come to You
          </div>
          <div className={`text-5xl font-bold mb-3 ${montserrat.className}`} style={{ color: '#fff' }}>10% off</div>
          <div className={`text-lg mb-8 ${nunito.className}`} style={{ color: '#fff' }}>with your initial sign-up</div>
          <Button 
            type="primary" 
            color="blue-800" 
            className={`w-full mb-8 h-12 text-lg font-semibold bg-[#1A237E] hover:bg-[#0D1333] text-white shadow-lg ${nunito.className}`}
          >
            Sign Up for Free
          </Button>
          <div className={`text-sm mb-6 ${nunito.className}`} style={{ color: '#fff' }}>
            Follow our pages for occasional promo codes & sweepstakes deals
          </div>
          <div className="flex gap-4 mt-auto">
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="bg-[#1A237E] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200">
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Card - Certified Auditors */}
        <div className={`bg-gradient-to-r from-[#1A237E] to-[#1976D2] rounded-2xl shadow-xl flex flex-col lg:flex-row items-center lg:w-3/4 p-10 gap-10 relative overflow-hidden min-h-[400px] ${nunito.className}`}>
          <div className="flex-1 text-center lg:text-left z-10">
            <div className={`font-medium text-lg mb-3 ${nunito.className}`} style={{ color: '#fff' }}>
              Pick from <span className={`font-bold ${montserrat.className}`} style={{ color: '#FFD600' }}>verified</span> and <span className={`font-bold ${montserrat.className}`} style={{ color: '#FFD600' }}>Trusted</span>
            </div>
            <div className={`text-4xl lg:text-5xl font-bold mb-6 leading-tight ${montserrat.className}`} style={{ color: '#fff' }}>
              CERTIFIED &<br/>
              REVIEWED AUDITORS
            </div>
            <div className={`text-lg mb-8 ${nunito.className}`} style={{ color: '#fff' }}>all in one place</div>
            <Button 
              type="primary" 
              color="orange-400" 
              className={`bg-[#FF8C1A] hover:bg-[#FFB347] text-white px-10 py-4 text-lg font-semibold shadow-lg ${nunito.className}`}
            >
              Find Your Auditor
            </Button>
            <div className={`text-base mt-4 ${nunito.className}`} style={{ color: 'rgba(255,255,255,0.8)' }}>Get 10% off your first listing</div>
          </div>
          <div className="flex-shrink-0 w-56 h-56 lg:w-64 lg:h-64 relative z-10">
            {/* <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
              alt="Professional auditor" 
              className="w-full h-full object-cover rounded-xl shadow-lg"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}