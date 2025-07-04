"use client";
import React, { useState } from 'react';
import { ChevronDown, Facebook, Linkedin, Instagram, Phone } from 'lucide-react';
import Button from '../Button';

// Country data with flags and dial codes
const countries = [
    { code: 'MT', name: 'Malta', flagUrl: 'https://flagcdn.com/mt.svg', dialCode: '+356' },
    { code: 'US', name: 'United States', flagUrl: 'https://flagcdn.com/us.svg', dialCode: '+1' },
    { code: 'GB', name: 'United Kingdom', flagUrl: 'https://flagcdn.com/gb.svg', dialCode: '+44' },
    { code: 'CA', name: 'Canada', flagUrl: 'https://flagcdn.com/ca.svg', dialCode: '+1' },
    { code: 'AU', name: 'Australia', flagUrl: 'https://flagcdn.com/au.svg', dialCode: '+61' },
    { code: 'DE', name: 'Germany', flagUrl: 'https://flagcdn.com/de.svg', dialCode: '+49' },
    { code: 'FR', name: 'France', flagUrl: 'https://flagcdn.com/fr.svg', dialCode: '+33' },
    { code: 'IT', name: 'Italy', flagUrl: 'https://flagcdn.com/it.svg', dialCode: '+39' },
    { code: 'ES', name: 'Spain', flagUrl: 'https://flagcdn.com/es.svg', dialCode: '+34' },
    { code: 'NL', name: 'Netherlands', flagUrl: 'https://flagcdn.com/nl.svg', dialCode: '+31' },
    { code: 'BE', name: 'Belgium', flagUrl: 'https://flagcdn.com/be.svg', dialCode: '+32' },
    { code: 'CH', name: 'Switzerland', flagUrl: 'https://flagcdn.com/ch.svg', dialCode: '+41' },
    { code: 'AT', name: 'Austria', flagUrl: 'https://flagcdn.com/at.svg', dialCode: '+43' },
    { code: 'NO', name: 'Norway', flagUrl: 'https://flagcdn.com/no.svg', dialCode: '+47' },
    { code: 'SE', name: 'Sweden', flagUrl: 'https://flagcdn.com/se.svg', dialCode: '+46' },
    { code: 'DK', name: 'Denmark', flagUrl: 'https://flagcdn.com/dk.svg', dialCode: '+45' },
    { code: 'FI', name: 'Finland', flagUrl: 'https://flagcdn.com/fi.svg', dialCode: '+358' },
    { code: 'IE', name: 'Ireland', flagUrl: 'https://flagcdn.com/ie.svg', dialCode: '+353' },
    { code: 'PT', name: 'Portugal', flagUrl: 'https://flagcdn.com/pt.svg', dialCode: '+351' },
    { code: 'GR', name: 'Greece', flagUrl: 'https://flagcdn.com/gr.svg', dialCode: '+30' },
   
    { code: 'CY', name: 'Cyprus', flagUrl: 'https://flagcdn.com/cy.svg', dialCode: '+357' },
    { code: 'LU', name: 'Luxembourg', flagUrl: 'https://flagcdn.com/lu.svg', dialCode: '+352' },
    { code: 'IS', name: 'Iceland', flagUrl: 'https://flagcdn.com/is.svg', dialCode: '+354' },
    { code: 'PL', name: 'Poland', flagUrl: 'https://flagcdn.com/pl.svg', dialCode: '+48' },
    { code: 'CZ', name: 'Czech Republic', flagUrl: 'https://flagcdn.com/cz.svg', dialCode: '+420' },
    { code: 'SK', name: 'Slovakia', flagUrl: 'https://flagcdn.com/sk.svg', dialCode: '+421' },
    { code: 'HU', name: 'Hungary', flagUrl: 'https://flagcdn.com/hu.svg', dialCode: '+36' },
    { code: 'SI', name: 'Slovenia', flagUrl: 'https://flagcdn.com/si.svg', dialCode: '+386' },
    { code: 'HR', name: 'Croatia', flagUrl: 'https://flagcdn.com/hr.svg', dialCode: '+385' },
    { code: 'BG', name: 'Bulgaria', flagUrl: 'https://flagcdn.com/bg.svg', dialCode: '+359' },
    { code: 'RO', name: 'Romania', flagUrl: 'https://flagcdn.com/ro.svg', dialCode: '+40' },
    { code: 'EE', name: 'Estonia', flagUrl: 'https://flagcdn.com/ee.svg', dialCode: '+372' },
    { code: 'LV', name: 'Latvia', flagUrl: 'https://flagcdn.com/lv.svg', dialCode: '+371' },
    { code: 'LT', name: 'Lithuania', flagUrl: 'https://flagcdn.com/lt.svg', dialCode: '+370' },
    { code: 'JP', name: 'Japan', flagUrl: 'https://flagcdn.com/jp.svg', dialCode: '+81' },
    { code: 'KR', name: 'South Korea', flagUrl: 'https://flagcdn.com/kr.svg', dialCode: '+82' },
    { code: 'CN', name: 'China', flagUrl: 'https://flagcdn.com/cn.svg', dialCode: '+86' },
    { code: 'IN', name: 'India', flagUrl: 'https://flagcdn.com/in.svg', dialCode: '+91' },
    { code: 'SG', name: 'Singapore', flagUrl: 'https://flagcdn.com/sg.svg', dialCode: '+65' },
    { code: 'HK', name: 'Hong Kong', flagUrl: 'https://flagcdn.com/hk.svg', dialCode: '+852' },
    { code: 'AE', name: 'UAE', flagUrl: 'https://flagcdn.com/ae.svg', dialCode: '+971' },
    { code: 'SA', name: 'Saudi Arabia', flagUrl: 'https://flagcdn.com/sa.svg', dialCode: '+966' },
    { code: 'IL', name: 'Israel', flagUrl: 'https://flagcdn.com/il.svg', dialCode: '+972' },
    { code: 'TR', name: 'Turkey', flagUrl: 'https://flagcdn.com/tr.svg', dialCode: '+90' },
    { code: 'EG', name: 'Egypt', flagUrl: 'https://flagcdn.com/eg.svg', dialCode: '+20' },
    { code: 'ZA', name: 'South Africa', flagUrl: 'https://flagcdn.com/za.svg', dialCode: '+27' },
    { code: 'BR', name: 'Brazil', flagUrl: 'https://flagcdn.com/br.svg', dialCode: '+55' },
    { code: 'MX', name: 'Mexico', flagUrl: 'https://flagcdn.com/mx.svg', dialCode: '+52' },
    { code: 'AR', name: 'Argentina', flagUrl: 'https://flagcdn.com/ar.svg', dialCode: '+54' },
    { code: 'RU', name: 'Russia', flagUrl: 'https://flagcdn.com/ru.svg', dialCode: '+7' },
    { code: 'UA', name: 'Ukraine', flagUrl: 'https://flagcdn.com/ua.svg', dialCode: '+380' },
  ];
  

const businessTypes = [
  'Startup or Solo Business (<10 staff)',
  'Small Business (10-50 staff)',
  'Medium Business (50-250 staff)',
  'Large Enterprise (250+ staff)',
];

export default function HeroSection() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessType, setBusinessType] = useState(businessTypes[0]);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);

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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-gray-50" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Main Content - Orange Section with Rounded Bottom */}
      <div className='w-full bg-gradient-to-b from-orange-400 to-orange-500 pb-20 rounded-b-[80px]'>
        <div className="w-full max-w-5xl mx-auto pt-16 px-6 flex flex-col items-center text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-2">
            Find Your Auditor Online
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-blue-900">Fast, Private, and Easy</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl text-gray-700 mb-8 font-medium max-w-3xl">
            Audit Firms Bid. Compare Quotes in Minutes. You Choose. It's That Simple.
          </p>

          {/* Form Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 w-full max-w-5xl mx-auto">
            {/* Combined Business Type + Phone Input Container */}
            <div className="bg-white rounded-lg shadow-lg flex items-center w-full md:w-[45%] h-14 relative">
              
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
                className="w-full h-14 text-base font-semibold bg-blue-800 hover:bg-blue-900 text-white shadow-lg"
              >
                List your Audit Now
              </Button>
            </div>
          </div>

          {/* Easy Online Audit Journey */}
          <div className="text-xl text-white font-medium mb-8">
            Start your <span className="font-bold">Easy Online Audit</span> journey here
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
            <Button 
              type="secondary" 
              className="bg-white text-gray-700 px-20 py-4 text-base font-semibold shadow-lg hover:shadow-xl"
              pill={true}
            >
              I need an Audit
            </Button>
            <Button 
              type="secondary" 
              className="bg-white text-gray-700 px-20 py-4 text-base font-semibold shadow-lg hover:shadow-xl"
              pill={true}
            >
              I'm an Auditor
            </Button>
          </div>
        </div>
      </div>
 
      {/* Bottom Cards Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-6 mt-12">
        {/* Left Card - Need an Audit */}
        <div className="bg-orange-400 rounded-2xl shadow-xl p-10 flex flex-col items-start lg:w-2/5 relative min-h-[400px]">
          <div className="text-white font-bold text-2xl mb-3">
            Need an Audit?
          </div>
          <div className="text-white text-lg mb-6">
            Let Auditors Come to You
          </div>
          <div className="text-5xl font-bold text-white mb-3">10% off</div>
          <div className="text-white text-lg mb-8">with your initial sign-up</div>
          <Button 
            type="primary" 
            color="blue-800" 
            className="w-full mb-8 h-12 text-lg font-semibold bg-blue-800 hover:bg-blue-900 text-white shadow-lg"
          >
            Sign Up for Free
          </Button>
          <div className="text-white text-sm mb-6">
            Follow our pages for occasional promo codes & sweepstakes deals
          </div>
          <div className="flex gap-4 mt-auto">
            <a href="#" className="bg-blue-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200">
              <Facebook className="text-white w-5 h-5" />
            </a>
            <a href="#" className="bg-blue-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200">
              <Linkedin className="text-white w-5 h-5" />
            </a>
            <a href="#" className="bg-blue-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200">
              <Instagram className="text-white w-5 h-5" />
            </a>
            <a href="#" className="bg-blue-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="text-white w-5 h-5 font-bold text-sm flex items-center justify-center">t</div>
            </a>
          </div>
        </div>

        {/* Right Card - Certified Auditors */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center lg:w-3/5 p-10 gap-10 relative overflow-hidden min-h-[400px]">
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="text-white font-medium text-lg mb-3">
              Pick from <span className="text-yellow-300 font-bold">verified</span> and <span className="text-yellow-300 font-bold">Trusted</span>
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              CERTIFIED &<br/>
              REVIEWED AUDITORS
            </div>
            <div className="text-white text-lg mb-8">all in one place</div>
            <Button 
              type="primary" 
              color="orange-400" 
              className="bg-orange-400 hover:bg-orange-500 text-white px-10 py-4 text-lg font-semibold shadow-lg"
            >
              Find Your Auditor
            </Button>
            <div className="text-white/80 text-base mt-4">Get 10% off your first listing</div>
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