import FadeUpAnimation from "./FadeUpAnimation";
import { motion } from "framer-motion";

const listVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Plugins({ plugin }) {
  return (
    <FadeUpAnimation
      amount={0.3}
      duration={1.2}
      initialY={80}
      className="bg-gray-50 shadow-[0px_0px_20px_rgba(0,0,0,0.2)] relative pt-14 pb-24 mt-24"
    >
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/Background pattern.png')",
          opacity: 0.09,
        }}
      ></div>
      <div className="text-center flex lg:flex-row flex-col items-center lg:gap-20 gap-10 md:justify-center justify-evenly relative">
        <div className="flex items-center flex-col">
          <img src={plugin.imgSrc} alt={plugin.alt} className="w-[300px] " />

          <div
            className="xs:text-3xl text-2xl w-full lg:top-[45%] xs:top-[25%] top-[25%] left-0 font-bold p-2 absolute text-white mb-4"
            style={{
              backgroundColor: plugin.color,
            }}
          >
            <h2 className="text-center lg:max-w-96 w-full lg:ml-44 ">
              {plugin.primaryHeading} <br /> {plugin.secondaryHeading}
            </h2>
          </div>

          <ul className="text-left text-gray-700 space-y-3 xs:mt-36 mt-20">
            {plugin.listData.map((el, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-4 sm:text-xl xs:text-base text-sm mb-4"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
              >
                <span
                  style={{
                    color: plugin.color,
                    fontWeight: "bold",
                  }}
                >
                  ●{" "}
                </span>
                <p className="shadow-[0px_0px_8px_rgba(0,0,0,0.2)] p-1.5 bg-white rounded-lg">
                  <span
                    style={{
                      color: plugin.color,
                      fontWeight: "bold",
                    }}
                  >
                    {el.primaryText}
                  </span>{" "}
                  <span className="font-medium">{el.secondaryText}</span>
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-2xl shadow-[0px_1px_30px_rgba(0,0,0,0.3)] bg-white p-6 z-10">
          {/* <Video src={plugin.videoSrc} /> */}
          <img
            src={plugin.videoSrc}
            alt="Demo video"
            // width={600}
            // height={300}
            className="rounded-xl shadow-[0px_0px_20px_rgba(0,0,0,0.4)] lg:w-[600px] lg:h-[300px] md:w-[500px] md:h-[300px] w-[350px] h-[200px]"
          />
        </div>
      </div>
    </FadeUpAnimation>
  );
}
