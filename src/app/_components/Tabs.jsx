// import React from "react";
// import useMobile from "@/hooks/useMobile";

// export default function Tabs({ tabs, currImg, setCurrImg }) {
//   const [isMobile] = useMobile(600);

//   return (
//     <div className="grid grid-cols-[1fr_3rem_1fr] justify-center items-center">
//       {/* Left Side - Timeline */}
//       {/* <div className="flex flex-col w-1/2 pl-6 relative justify-between gap-y-6"> */}
//       <div className="flex flex-col relative justify-between gap-y-6 font-sans">
//         <div className="absolute left-[11px] top-0 bottom-0 w-[1.5px] border-l-1 border border-gray-300"></div>
//         {tabs.map((tab, index) => (
//           <div key={index} className="relative flex items-center">
//             {/* Timeline Dots (Fixed Position) */}
//             <div className="w-1.5 h-1.5 bg-gray-600 rounded-full absolute left-2 top-1/2 transform -translate-y-1/2"></div>
//             {/* Button Text (Fixed Height to Prevent Movement) */}
//             <button
//               onClick={() => setCurrImg(index)}
//               className={`ml-10 text-left cursor-pointer font-semibold sm:text-sm text-[10px] transition-all duration-300 ${
//                 index === currImg ? " text-theme" : "text-gray-600 "
//               }`}
//             >
//               {tab.btnText}
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="h-full w-0.5 bg-gray-300"></div>

//       {/* Right Side - Content */}
//       {/* <div className="flex flex-col w-2/3 items-center px-6 border-l border-gray-300 pl-6"> */}
//       <div className="flex flex-col items-center ">
//         <div className="bg-white z-20 mb-2 p-2 rounded-lg shadow-[0px_1px_10px_rgba(255,140,0,0.4)]">
//           {tabs[currImg].icon}
//         </div>
//         <div className="text-center">
//           <h3 className=" md:text-lg sm:text-sm text-xs font-sans font-semibold mb-1 text-gray-800">
//             {tabs[currImg].primaryText}
//           </h3>
//           <p className="lg:text-xs sm:text-left text-[10px] text-gray-500">
//             {isMobile
//               ? tabs[currImg].secondaryText.split(".")[0]
//               : tabs[currImg].secondaryText}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import useMobile from "@/hooks/useMobile";

export default function Tabs({ tabs, currImg, setCurrImg }) {
  const [isMobile] = useMobile(600);

  return (
    <div className="bg-white grid grid-cols-[1fr_1fr] justify-center items-center p-4 sm:p-6 w-[100%] sm:w-[85%] md:w-[65%] absolute sm:-bottom-14 -bottom-24 left-1/2 transform -translate-x-1/2 rounded-2xl outline-2 outline outline-white outline-offset-8 shadow-[0px_1px_40px_rgba(0,0,0,0.4)]">
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/Background pattern.png')",
          opacity: 0.15,
        }}
      ></div>

      <div className="flex flex-col relative justify-between gap-y-4 font-sans">
        <div className="absolute left-[11px] top-0 bottom-0 w-[1.5px] border-l-1 border border-gray-300"></div>
        {tabs.map((tab, index) => (
          <div key={index} className="relative flex items-center">
            {/* Timeline Dots (Fixed Position) */}
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full absolute left-2 top-1/2 transform -translate-y-1/2"></div>
            {/* Button Text (Fixed Height to Prevent Movement) */}
            <button
              onClick={() => setCurrImg(index)}
              className={`ml-10 text-left cursor-pointer font-semibold sm:text-sm text-[10px] transition-all duration-300 ${
                index === currImg ? " text-theme" : "text-gray-600 "
              }`}
            >
              {tab.btnText}
            </button>
          </div>
        ))}
      </div>

      <div className="h-24 w-0.5 bg-gray-300 fixed left-[45%]"></div>

      <div className="flex flex-col items-center font-sans">
        <div className="bg-white z-20 mb-2 p-2 rounded-lg shadow-[0px_1px_10px_rgba(255,140,0,0.4)]">
          {tabs[currImg].icon}
        </div>
        <div className="text-center">
          <h3 className=" md:text-lg sm:text-sm text-xs  font-semibold mb-1 text-gray-800">
            {tabs[currImg].primaryText}
          </h3>
          <p className="lg:text-xs text-[10px] text-gray-500">
            {isMobile
              ? tabs[currImg].secondaryText.split(".")[0]
              : tabs[currImg].secondaryText}
          </p>
        </div>
      </div>
    </div>
  );
}
