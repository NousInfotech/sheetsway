"use client";
import { useOpenBookADemo } from "@/app/BookADemoModal";
import {
  Button,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  NavLink,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

export const Icon = ({ children }) => (
  <span className="heading mr-2 font-bold text-2xl border border-[rgba(0,0,0,0.3)] w-12 h-12 flex justify-center items-center p-2 rounded-xl">
    <i>{children}</i>
  </span>
);

const data = [
  {
    label: "Solution",
    description: "Item with description",
    menus: [
      {
        label: "Audit Software",
        link: "/solution/audit-software",
        description: "Lorem ipsum dolor sit amet. Sit nemo optio sit sint galisum ut nihil veniam.",
        icon: <Icon>Au</Icon>,
      },
      {
        label: "Drafting",
        link: "/solution/drafting",
        description: "Lorem ipsum dolor sit amet. Sit nemo optio sit sint galisum ut nihil veniam.",
        icon: <Icon>Dr</Icon>,
      },
      {
        label: "Workspace",
        link: "/solution/workspace",
        description: "Lorem ipsum dolor sit amet. Sit nemo optio sit sint galisum ut nihil veniam.",
        icon: <Icon>Ws</Icon>,
      },
      {
        label: "Client Portal",
        link: "/solution/client-portal",
        description: "Lorem ipsum dolor sit amet. Sit nemo optio sit sint galisum ut nihil veniam.",
        icon: <Icon>Cp</Icon>,
      },
    ],
  },
  {
    label: "Knowledge Base",
    description: "Item with description",
    menus: [
      {
        label: "How to Guide",
        link: "/knowledge-base/how-to-guide",
        description: "Lorem ipsum dolor sit amet. Sit nemo optio sit sint galisum ut nihil veniam.",
      },
      {
        label: "FAQ",
        link: "/knowledge-base/faq",
        description: "Lorem ipsum dolor sit amet. Sit nemo optio sit sint galisum ut nihil veniam.",
      },
    ],
  },
  {
    label: "Pricing",
    description: "Item with description",
    link: "/pricing",
  },
  {
    label: "About Us",
    description: "Item with description",
    link: "/about-us",
  },
  {
    label: "Contact Us",
    description: "Item with description",
    link: "/contact-us",
  },
];

function Navbar() {
  const pathname = usePathname();
  const call = useOpenBookADemo();

  return (
    <div className="lg:py-8 py-2 sticky items-baseline backdrop-blur-sm z-10 justify-between flex top-0">
      <Link href="/">
        <Image src={`/logo.svg`} alt="sheetsway logo" width={150} height={0} />
      </Link>

      <div className="flex gap-8 items-center">
        {data.map((item, index) =>
          item.menus ? (
            <Menu
              key={item.label} // ✅ key here
              trigger="hover"
              position="bottom-start"
              width={400}
              withArrow
              shadow="md"
            >
              <MenuTarget>
                <NavLink
                  rightSection={<IoIosArrowDown />}
                  active={pathname === item.link}
                  className="w-fit"
                  label={item.label}
                />
              </MenuTarget>

              <MenuDropdown>
                {item.menus.map((menuItem) => (
                  <MenuItem key={menuItem.label}>
                    <Link href={menuItem.link}>
                      <NavLink
                        description={menuItem.description}
                        active={pathname === menuItem.link}
                        leftSection={menuItem.icon}
                        label={menuItem.label}
                      />
                    </Link>
                  </MenuItem>
                ))}
              </MenuDropdown>
            </Menu>
          ) : (
            <Link href={item.link} key={item.label}>
              <NavLink
                active={pathname === item.link}
                className="w-fit"
                label={item.label}
              />
            </Link>
          )
        )}
      </div>

      <div className="item-center gap-2 flex">
        <NavLink
          target="_blank"
          href="https://audit.sheetsway.com/login"
          className="w-fit"
          label="Login"
        />
        <Button onClick={call} variant="light">
          Try for Free
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
