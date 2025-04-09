import Image from "next/image";
import FadeUpAnimation from "./FadeUpAnimation";
import Tabs from "./Tabs";

export default function ImageTab({ tabs, currImg, setCurrImg, images }) {
  return (
    <FadeUpAnimation className="w-full relative max-h-screen lg:mt-20 pb-20  mt-10 flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="absolute -top-44 z-10 h-full w-full bg-gradient-to-b from-white via-gray-200 to-white"></div>
      <div className="w-full max-w-[90%] lg:max-w-screen-lg mx-auto relative z-20">
        {/* Responsive Image */}
        <Image src={images[currImg].src} alt={images[currImg].alt} className="relative z-20" />

        <Tabs tabs={tabs} currImg={currImg} setCurrImg={setCurrImg} />
      </div>
    </FadeUpAnimation>
  );
}
