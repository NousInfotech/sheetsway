import React from "react";

function Heading({ heading, description }) {
  return (
    <div className="flex w-full text-center justify-center items-center flex-col gap-8">
      <h1 className="text-7xl heading leading-[1.2] w-[70%]">{heading}</h1>
      <h2 className="text-xl w-[50%] text-gray-500">{description}</h2>
    </div>
  );
}
export function SubHeading({ heading, description }) {
  return (
    <div className="flex justify-between w-full items-end gap-32">
      <h1 className="text-7xl shrink-0 leading-[1.2] heading">{heading}</h1>
      <h2 className="text-xl text-gray-500">{description}</h2>
    </div>
  );
}

export default Heading;
