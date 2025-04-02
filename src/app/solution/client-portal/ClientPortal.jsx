"use client";

import AnimatedTextPortal from "@/app/_components/AnimatedTextPortal";
import Button from "@/app/_components/Button";
import FadeUpAnimation from "@/app/_components/FadeUpAnimation";
import FeaturesPortal from "@/app/_components/FeaturesPortal";
import ImageDetailsPortal from "@/app/_components/ImageDetailsPortal";
import ImageTab from "@/app/_components/ImageTab";
import ShowSection from "@/app/_components/ShowSection";
import {
  enhancedCollection,
  features,
  images,
  tabs,
} from "@/app/_constants/client-portal-data";
import useInterval from "@/hooks/useInterval";

export default function ClientPortal() {
  const [currImg, setCurrImg] = useInterval(0, images.length, 7000);

  return (
    <div className="min-h-screen mt-5">
      {/** */}
      <FadeUpAnimation className="text-center mb-14 flex flex-col gap-2 relative z-30">
        <AnimatedTextPortal
          headingText="Client Portal"
          paraText="Empower your clients with a dedicated portal for managing audit-related tasks, including document uploads, query responses, and real-time progress tracking, ensuring client satisfaction as a priority."
        />

        <div className="flex w-[30%] mx-auto justify-evenly relative z-20">
          <Button type="secondary">Try For Free</Button>
          <Button type="primary">Book a Demo</Button>
        </div>
      </FadeUpAnimation>

      <ImageTab
        currImg={currImg}
        images={images}
        setCurrImg={setCurrImg}
        tabs={tabs}
      />

      {/** */}
      <ImageDetailsPortal
        data={enhancedCollection}
        headingtext="Enhanced Collaboration"
        paraText="Facilitate collaboration between auditors and clients with integrated
                tools for KYC management and shared document libraries, ensuring
                efficient and effective audit processes."
      />

      {/** */}
      <FeaturesPortal
        headingText="Boost Client-Auditor Interaction with Our Portal Tools."
        paraText=" Sheetsway’s Client Portal is equipped with features designed to
                  facilitate effective audit collaboration. From document uploads to
                  shared queries, every tool is aimed at improving accuracy and
                  efficiency in the audit process."
        features={features}
        boxHeading="Client"
      />
      {/** */}
      <ShowSection />
    </div>
  );
}
