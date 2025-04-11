"use client";

import * as React from "react";
import Link from "next/link";
import { useMobile } from "@/hooks/useMobile";
import dynamic from "next/dynamic";
import Logo from "@/app/_components/Logo";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import Button from "@/app/_components/Button";
import MobileMenu from "./MobileMenu";
import Call from "./call";

export const contactUs = "/contact-us";
export const aboutUs = "/about-us";
export const pricing = "/pricing";


const components = [
  {
    title: "How to Guide",
    href: "guide",
    icon: "GU",
    description:
      "Manage and execute audit tasks efficiently.",
  },
  {
    title: "FAQ",
    href: "faq",
    icon: "FAQ",
    description:
      "Editor for financial statements and audit letters.",
  },
  // {
  //   title: "Help Desk",
  //   href: "/docs/primitives/tooltip",
  //   description:
  //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  // },
  // {
  //   title: "Commnunity",
  //   href: "/docs/primitives/tooltip",
  //   description:
  //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  // },
  // {
  //   title: "Blogs",
  //   href: "/docs/primitives/tooltip",
  //   description:
  //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  // },
  // {
  //   title: "Webinars",
  //   href: "/docs/primitives/tooltip",
  //   description:
  //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  // },
  // {
  //   title: "Partners",
  //   href: "/docs/primitives/tooltip",
  //   description:
  //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  // },
  // {
  //   title: "Support Us",
  //   href: "/docs/primitives/tooltip",
  //   description:
  //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  // },
];

const solutions = [
  {
    label: "Audit Software",
    desc: "Manage and execute audit tasks efficiently.",
    icon: "Au",
    href: "/solution/audit-software",
  },
  {
    label: "Drafting",
    desc: "Editor for financial statements and audit letters.",
    icon: "Dr",
    href: "/solution/drafting",
  },
  {
    label: "Workspace",
    desc: "Online spreadsheets with OCR for fieldwork testing.",
    icon: "Ws",
    href: "/solution/workspace",
  },
  {
    label: "Client Portal",
    desc: "Platform for clients to answer queries and upload documents.",
    icon: "Cp",
    href: "/solution/client-portal",
  },
];


const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={`relative z-30 flex max-w-max flex-1 items-center justify-center ${className || ""}`}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={`group flex flex-1 list-none items-center justify-center space-x-1 ${className || ""}`}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle =
  "group inline-flex h-10 w-max items-center border-primary text-sm justify-center bg-background px-4 py-2 font-medium transition-colors hover:border-b focus:border-b focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:border-b data-[state=open]:border-b";

const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={`${navigationMenuTriggerStyle} ${className || ""}`}
    {...props}
  >
    {children}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={`left-0 top-0 z-50 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ${className || ""}`}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => (
  <div className="absolute left-0 top-full flex justify-center z-50">
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={`origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)] ${className || ""}`}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={`top-full z-[20] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in ${className || ""}`}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

const ListItem = React.forwardRef(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>

        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-sidebar focus:bg-accent focus:text-accent-foreground ${className || ""}`}
          {...props}
        >
          <div className="flex gap-4 justify-start items-center">
            <span className="p-2 w-10 flex italic justify-center items-center font-extrabold border text-gray-800 rounded-lg ">
              {icon}
            </span>
            <div className="space-y-1">
              <div className="font-bold text-sprimary text-base -none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug">{children}</p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";




export default function Navbar() {
  const [isMobile] = useMobile(800);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <nav className="flex relative z-[100] w-full p-8 items-center justify-between">
      <Logo />
      <MobileMenu
        isMobile={isMobile}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        solutions={solutions}
        components={components}
        pricing="/pricing"
        aboutUs="/about-us"
        contactUs="/contact"
      />

      {!isMobile && (
        <NavigationMenu>
          <NavigationMenuList className="max-lg:items-start">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[700px] lg:grid-cols-[.75fr_1fr] bg-white">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Logo />
                        <p className="text-sm mt-4 leading-tight text-muted-foreground">
                          We are not just software we are communtiy
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <div className="flex flex-col gap-3 bg-white">
                    {solutions.map((item, index) => (
                      <ListItem key={index} href={item.href} icon={item.icon} title={item.label}>
                        {item.desc}
                      </ListItem>
                    ))}
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Knowledge base</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={`knowledge-base/${component.href}`}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={pricing} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={aboutUs} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle}>
                  Meet Our Team
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={contactUs} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}

      <div className="hidden lg:flex gap-4 justify-center lg:justify-start relative z-20">
        <Call />
      </div>
    </nav>
  );
}

