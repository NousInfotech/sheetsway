import FadeUpAnimation from "@/app/_components/FadeUpAnimation";
import Video from "@/app/_components/Video";

function Plugin({ heading, p1, p2, p3, link, videoSrc, shadow }) {
  return (
    <FadeUpAnimation className="flex flex-col items-center w-full md:w-1/2 lg:w-2/5 font-sans">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
        {heading}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base text-center font-semibold mb-3 max-sm:mb-4 leading-[20px]">
        {p1} <br /> {p2}
      </p>
      <p className="text-gray-600 text-xs text-center max-sm:max-w-xs mx-auto mb-10 font-semibold">
        {p3}
      </p>

      <Video
        src={videoSrc}
        className={`w-60 sm:w-72 rounded-xl border ${shadow}`}
      />
      <p className="mt-6 text-sm cursor-pointer font-medium">
        Explore our <span className="text-primary">{link}</span> tool &gt;
      </p>
    </FadeUpAnimation>
  );
}

const IntegrationPage = () => {
  return (
    // <div className="px-2 sm:px-14 min-h-screen flex flex-col items-center mb-16">
    <div className="px-2 sm:px-14 min-h-screen flex flex-col items-center">
      {/* Main Heading */}
      <FadeUpAnimation>
        <h2 className="text-3xl sm:text-4xl font-light font-bodoni mb-12 text-center">
          Let’s <span className="text-orange-500 font-semibold">integrate</span>{" "}
          with
          <br className="hidden sm:block" /> what you already know best
        </h2>
      </FadeUpAnimation>

      {/* Integration Sections */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 w-full">
        {/* Word Plugin Section */}
        <Plugin
          link={"Drafting"}
          videoSrc={"/sec-3/Word plugin Gif.webm"}
          heading={"Word Plugin"}
          shadow={"shadow-[0px_1px_40px_rgba(0,0,255,0.10)]"}
          p1={"Drafting Letters and preparing"}
          p2={"Financial Statements have never been easier."}
          p3={
            "Data pulled from the portal, automatically populate your audit letters."
          }
        />

        {/* Divider */}
        <div className="hidden md:flex w-[1px] bg-gray-300 h-full min-h-[550px] mx-8"></div>

        <Plugin
          link={"Extraction"}
          videoSrc={"/sec-3/Excel plugin gif.webm"}
          heading={"Excel Plugin"}
          shadow={"shadow-[0px_1px_40px_rgba(0,255,0,0.10)]"}
          p1={"Upload Documents and Extract data"}
          p2={"with a click of a button."}
          p3={
            "Populate working papers in seconds and keep everything referenced to the portal."
          }
        />
      </div>
    </div>
  );
};

export default IntegrationPage;
