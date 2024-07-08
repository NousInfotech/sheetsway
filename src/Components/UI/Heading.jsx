import React from "react";

function Heading({ heading, description }) {
  return (
    <div className="flex text-center justify-center items-center flex-col gap-8">
      <h1 className="text-7xl heading leading-[1.2] w-[70%]">{heading}</h1>
      <h2 className="text-xl w-[50%] text-gray-500">{description}</h2>
    </div>
  );
}
export function SubHeading({ heading, description }) {
  return (
    <div className="flex items-end gap-8">
      <h1 className="text-7xl leading-[1.2] w-full heading">{heading}</h1>
      <h2 className="text-xl w-full text-gray-500">{description}</h2>
    </div>
  );
}

export default Heading;
