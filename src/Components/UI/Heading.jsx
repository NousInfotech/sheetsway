import React from "react";

function Heading({ heading, description }) {
  return (
    <div className="flex w-full text-center justify-center items-center flex-col sm:gap-8 gap-4">
      <h1 className="lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl text-3xl heading leading-[1.2] sm:w-[70%] w-[80%]">
        {heading}
      </h1>
      <h2 className="md:text-xl sm:text-base xs:text-sm text-xs md:max-w-screen-sm xs:max-w-screen-xs w-[85%] mx-auto text-zinc-500">
        {description}
      </h2>
    </div>
  );
}
export function SubHeading({ heading, description }) {
  return (
    <div className="flex justify-between w-full items-end gap-32">
      <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl shrink-0 leading-[1.2] heading">
        {heading}
      </h1>
      <h2 className="text-xl text-zinc-500">{description}</h2>
    </div>
  );
}

export default Heading;
