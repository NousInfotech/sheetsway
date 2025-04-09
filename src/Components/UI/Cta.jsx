"use client"
import { useOpenBookADemo } from "@/app/BookADemoModal";
import { Button } from "@mantine/core";
import Image from "next/image";
import React from "react";

function Cta() {
  const call = useOpenBookADemo()
  return (
    <div className="flex relative justify-center gap-16 py-56 flex-col items-center text-center">
      <div className="flex flex-col items-center gap-16">
        <h1 className="heading text-7xl">
          <strong className="italic bg-orange-100 text-theme px-4">
            Sheetsway
          </strong>{" "}
          <br />
          is for every Audit need.
        </h1>
        <Button onClick={call} className="px-12 w-fit text-base" size="xl">
          Try for Free
        </Button>
      </div>
      <div>
        <Image
          width={1000}
          height={1000}
          className="absolute h-full object-cover z-[-1] opacity-5 top-0 left-0 w-full"
          src="/back.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Cta;
