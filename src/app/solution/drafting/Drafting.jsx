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
  draftingPlugin,
  features,
  images,
  nextGeneration,
  tabs,
} from "@/app/_constants/drafting-data";
import BookAnDemo from "@/Components/UI/BookAnDemoBtn";
import useInterval from "@/hooks/useInterval";
import Link from "next/link";

export default function Drafting() {
  const [currImg, setCurrImg] = useInterval(0, images.length, 70000);

  return (
    <div className="min-h-screen mt-5">
      <FadeUpAnimation className="text-center mb-14 flex flex-col">
        <AnimatedTextPortal
          headingText="Drafting Tool-Word Plugin"
          paraText="The Workspace is Sheetsway simplifies auditing with easy document access, referencing, and management. Features like document reconciliation and AI-driven text extraction ensure efficient and accurate audit tasks."
        />

        <div className="flex justify-center gap-4 relative z-20">
          <Link href={"/contact-us"}>
            <Button type="secondary" className={"w-full h-full"}>
              Early Adopter
            </Button>
          </Link>
          <BookAnDemo />
        </div>
      </FadeUpAnimation>

      <Plugins plugin={draftingPlugin} />

      <ImageTab
        currImg={currImg}
        images={images}
        setCurrImg={setCurrImg}
        tabs={tabs}
      />

      <ImageDetailsPortal
        headingtext="Next Generation of"
        secondaryText="Financial Statement and Letters"
        paraText="The Drafting Editor enhances the preparation of financial documents, improving efficiency and accuracy. It allows auditors to draft, manage, and update financial statements and letters easily, automating routine tasks and ensuring consistency. By importing/creating templates, it simplifies document management into a user-friendly process."
        data={nextGeneration}
      />

      <div className="mt-16">
        <FeaturesPortal
          features={features}
          headingText="Powerful Drafting Capabilities"
          paraText="Unlock powerful drafting capabilities with Sheetsway. Our tools, including dynamic variables, version control, and index generation, ensure that your documents are thorough and meticulously prepared."
          boxHeading="Drafting"
          dotDrop={11}
        />
      </div>
      <ShowSection />
    </div>
  );
}
