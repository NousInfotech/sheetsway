"use client";
import { Button, Modal } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export const useOpenBookADemo = () => {
  const router = useRouter();
  const pathname = usePathname();
  return () => router.push(`${pathname}?book-a-demo=true`);
};

function BookADemoModal() {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 50em)");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const search = searchParams.get("book-a-demo");
  return (
    <Modal
      size="50vw"
      fullScreen={isMobile}
      opened={search === "true"}
      onClose={() => {
        router.replace(pathname);
      }}
      centered
    >
      <div className="flex gap-4">
        <div className="bg-zinc-50 grid gap-4 p-4 rounded">
          <Image
            src="https://images.pexels.com/photos/7605974/pexels-photo-7605974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={500}
            height={500}
            className="w-full object-cover h-72 rounded"
          />
          <br />
          <p className="text-3xl heading">Book a Demo</p>
          <p className="text-zinc-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <br />
          <Link href="/book-demo">
            <Button
              rightSection={<IoIosArrowForward />}
              className="w-fit"
              size="md"
              variant="light"
            >
              Let's Meet
            </Button>
          </Link>
        </div>
        <div className="bg-zinc-100 flex flex-col gap-4 p-4 rounded">
          <Image
            src="/signup.png"
            width={500}
            height={500}
            className="w-full object-cover h-72 rounded"
          />
          <br />
          <p className="text-3xl heading">Get 30 Days Free Trial</p>
          <p className="text-zinc-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <br />
          <Link href="https://audit.sheetsway.com/signup" target="_blank">
            <Button
              size="md"
              color="blue"
              className="w-fit"
              variant="light"
              rightSection={<IoIosArrowForward />}
            >
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
}

export default BookADemoModal;
