import Heading from "@/Components/UI/Heading";
import { Badge, Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

const badges = [
  {
    text: "Be sincere",
    leftSection: "✌️",
  },
  {
    text: "Stronger Together",
    leftSection: "🤝",
  },
  {
    text: "Keep it Simple",
    leftSection: "🙂",
  },
  {
    text: "Take Intelligent Risk",
    leftSection: "💡",
  },
];
const team = [
  {
    name: "Cleven Carl D'amato",
    role: "Founder and CEO",
    src: "/avatars/3.svg",
  },
  {
    name: "Jean Vella",
    role: "Co-Founder and CCO",
    src: "/avatars/2.svg",
  },
  {
    name: "Dhruv Aggarwal",
    role: "Co-Founder and CTO",
    src: "/avatars/1.svg",
  },
  {
    name: "Xiaoyang Lou",
    role: "Co-Founder and CFO",
    src: "/avatars/4.svg",
  },
];

function about() {
  return (
    <>
      <div className="lg:w-[80%] lg:p-0 p-8 w-full mx-auto">
        <div className="flex text-center mx-auto justify-center items-center flex-col mt-24 gap-8">
          <Heading
            heading={
              <span>
                A Tools for{" "}
                <span className="text-green-500 italic bg-green-100 px-4">
                  future
                </span>{" "}
                of work
              </span>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />
        </div>
        <div className="grid grid-cols-4 gap-32 mt-24">
          {team.map((item) => (
            <div className="flex flex-col items-center">
              <Image
                width={500}
                height={500}
                className="rounded-b-full w-32 object-cover"
                src={item.src}
              />
              <br />
              <p className="font-semibold">{item.name}</p>
              <p className="text-zinc-500">{item.role}</p>
              <div className="flex items-center gap-2">
                <Button variant="default" className="p-0 border-none text-lg">
                  <CiLinkedin />
                </Button>
                <Button variant="default" className="p-0 border-none text-lg">
                  <CiMail />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="my-56 grid grid-cols-2 gap-16">
          <div className="flex flex-col items-end gap-16">
            <Image
              src="https://images.pexels.com/photos/8117462/pexels-photo-8117462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={1200}
              className="rounded-2xl"
              height={1200}
            />
            <Image
              src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-[80%] rounded-2xl"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col gap-16">
            <h4 className="text-7xl heading">
              We're good <br /> neighbors
            </h4>
            <h2 className="text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <Link href="/contact-us?message=Hii, I want to become a part of your journey">
              <Button
                className="w-fit"
                rightSection={<IoIosArrowForward />}
                variant="light"
              >
                Join Us, Make a Change
              </Button>
            </Link>
            <Image
              className="rounded-2xl"
              src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=800"
              width={1200}
              height={1200}
            />
          </div>
        </div>
        <div className="my-56 grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-16">
            <h4 className="text-7xl heading">How we Thrive</h4>
            <h2 className="text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                className="p-4 bg-zinc-100 capitalize font-normal w-fit text-2xl py-8 text-black"
                size="xl"
                leftSection={badge.leftSection}
                color="gray"
              >
                {badge.text}
              </Badge>
            ))}
          </div>
        </div>
        <div className="my-56">
          <Heading
            heading="Sheetsway in the News"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
          />
          <div className="grid grid-cols-4 text-center gap-8 mt-24">
            <div className="bg-orange-100 p-8 py-16 text-3xl heading">
              Who'sWho.mt
            </div>
            <div className="bg-orange-100 p-8 py-16 text-3xl heading">
              Times of Malta
            </div>
            <div className="bg-orange-100 p-8 py-16 text-3xl heading">
              Lovin Malta
            </div>
            <div className="bg-orange-100 p-8 py-16 text-3xl heading">
              EU Startups
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
