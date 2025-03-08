import FadeUpAnimation from "./FadeUpAnimation";
import Tabs from "./Tabs";

export default function ImageTab({ tabs, currImg, setCurrImg, images }) {
  return (
    <FadeUpAnimation className="w-full max-h-screen lg:mt-20 pb-20  mt-10 flex items-center justify-center bg-gradient-to-b from-white via-gray-200 to-white px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[90%] lg:max-w-screen-lg mx-auto relative">
        {/* Responsive Image */}
        <img src={images[currImg].src} alt={images[currImg].alt} className="" />

        <Tabs tabs={tabs} currImg={currImg} setCurrImg={setCurrImg} />
      </div>
    </FadeUpAnimation>
  );
}
