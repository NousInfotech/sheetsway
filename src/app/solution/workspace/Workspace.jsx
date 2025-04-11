"use client";

import AnimatedTextPortal from "@/app/_components/AnimatedTextPortal";
import Button from "@/app/_components/Button";
import FadeUpAnimation from "@/app/_components/FadeUpAnimation";
import FeaturesPortal from "@/app/_components/FeaturesPortal";
import ImageDetailsPortal from "@/app/_components/ImageDetailsPortal";
import ImageTab from "@/app/_components/ImageTab";
import Plugins from "@/app/_components/Plugins";
import ShowSection from "@/app/_components/ShowSection";
import {
  enhancedCollection,
  features,
  images,
  tabs,
  workspacePlugin,
} from "@/app/_constants/workspace-data";
import useInterval from "@/hooks/useInterval";

export default function Workspace() {
  const [currImg, setCurrImg] = useInterval(0, images.length, 7000);

  return (
    <div className="min-h-screen mt-5">
      <FadeUpAnimation className="text-center lg:w-3/4 mx-auto flex flex-col items-center justify-center gap-2 relative z-30">
        <AnimatedTextPortal
          headingText="Workspace"
          paraText="The Workspace is Sheetsway simplifies auditing with easy document access, referencing, and management. Features like document reconciliation and AI-driven text extraction ensure efficient and accurate audit tasks."
        />

        <div className="flex justify-center gap-4 relative z-20">
          <Button type="secondary">Try For Free</Button>
          <Button type="primary">Book a Demo</Button>
        </div>
      </FadeUpAnimation>

      {/** */}
      <Plugins plugin={workspacePlugin} />

      {/** */}
      <ImageTab
        currImg={currImg}
        images={images}
        setCurrImg={setCurrImg}
        tabs={tabs}
      />

      {/** */}

      <ImageDetailsPortal
        data={enhancedCollection}
        headingtext="Optimize Your Audit Workspace"
        paraText="Leverage the powerful tools in Sheeteway’s workspace to enhance your audit processes. Manage documents, extract data, and ensure accurate reconciliations all in one place, allowing you to focus on delivering high-quality audits efficiently."
      />
      {/** */}

      <FeaturesPortal
        headingText="Maximize Efficiency with Our Workspace Features."
        paraText="Sheetsway's workspace offers a robust suite of tools designed to enhance your auditing process. From document management to data extraction, our features help you achieve accuracy and efficiency in every task."
        features={features}
        boxHeading="Workspace"
        dotDrop={11}
      />

      <ShowSection />
    </div>
  );
}
