import ArticleCarousel from "@/app/_components/Articlecarousel";
import FadeUpAnimation from "@/app/_components/FadeUpAnimation";

export default function NewsCarousel() {
  return (
    <div className=" text-center relative mb-10">
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/Background pattern.png')",
          opacity: 0.06,
        }}
      ></div>

      <FadeUpAnimation className="mt-2">
        <h2 className="sm:text-4xl text-3xl text-gray-600 font-semibold font-bodoni ">
          Sheetsway in the <span className="text-primary">News</span>
        </h2>
        <p className="text-gray-600 mt-5 sm:text-lg text-sm leading-6">
          Find out more about Sheetsway. Our groundbreaking <br /> work as seen
          online. Discover more below.
        </p>
      </FadeUpAnimation>

      {/** */}
      <ArticleCarousel />
    </div>
  );
}
