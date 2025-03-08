"use client";

import ShowSection from "@/app/_components/ShowSection";
import {
  comprehensiveAudit,
  features,
  images,
  tabs,
} from "@/app/_constants/audit-portal-data";
import AuditHeading from "./AuditHeading";
import useInterval from "@/hooks/useInterval";
import AuditGrid from "./AuditGrid";
import ImageTab from "@/app/_components/ImageTab";
import ImageDetailsPortal from "@/app/_components/ImageDetailsPortal";
import FeaturesPortal from "@/app/_components/FeaturesPortal";

export default function AuditPortal() {
  const [currImg, setCurrImg] = useInterval(0, images.length, 5000);

  return (
    <div className="min-h-screen my-5">
      <AuditHeading />

      <AuditGrid />

      <ImageTab
        currImg={currImg}
        setCurrImg={setCurrImg}
        tabs={tabs}
        images={images}
      />

      <ImageDetailsPortal
        data={comprehensiveAudit}
        headingtext="Comprehensive Audit Management"
        paraText="Centralized platform for managing all aspects of the audit process, enchancing efficiency and accuracy."
      />

      <FeaturesPortal
        features={features}
        boxHeading="Audit"
        dotDrop={7}
        headingText="Audit Planning and Execution"
        paraText="Comprehensive features to support through and effective auditing, tailored to meet various audit needs."
      />
      <ShowSection />
    </div>
  );
}
