import AuditPlatform from "./_components/main/AuditPlatform";
import AuditSolution from "./_components/main/AuditSolution";
import FeatureSection from "./_components/main/FeatureSection";
import FinancialAuditUI from "./_components/main/FinancialAuditUI";
import IndustryAwareAI from "./_components/main/IndustryAwareAI";
import IntegrationPage from "./_components/main/IntegrationPage";
import NewsCarousel from "./_components/main/NewsCarousel";

function page() {
  return (
    <div className="flex flex-col gap-y-10">
      <FinancialAuditUI />
      <AuditPlatform />
      <IntegrationPage />
      <IndustryAwareAI />
      <FeatureSection />
      <AuditSolution />
      <NewsCarousel />
    </div>
  );
}

export default page;
