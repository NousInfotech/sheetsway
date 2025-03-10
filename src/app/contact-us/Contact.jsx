"use client";

import { writeData } from "@/api/fb";
import { SubHeading } from "@/Components/UI/Heading";
import { Button, Image, Textarea, TextInput } from "@mantine/core";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ShowSection from "../_components/ShowSection";
export const getNextId = () => String(Math.random()).slice(2);

const ContactUS = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm();
  const searchParams = useSearchParams();
  const search = searchParams.get("message");
  const Datatype = {
    name: {
      label: "Your Name",
      description: "Enter full name",
      required: true,
      radius: 10,
    },
    email: {
      type: "email",
      label: "Your Personal or Company Email",
      description: "We'll send you an e-mail with suggested dates and times",
      required: true,
      radius: 10,
    },
    mobile: {
      label: "Mobile phone number",
      description:
        "We'll give you a short call to book a time slot that suits you best",
      required: true,
      radius: 10,
    },
    position: {
      label: "What Descripe you the best? ",
      description: "We'll make sure you're connected to the right expert",
      required: true,
      radius: 10,
      autosize: true,
      minRows: 5,
    },
    message: {
      label: "How can we help you?",
      description: "We'll make sure you're connected to the right expert",
      defaultValue: search,
      required: true,
      radius: 10,
      autosize: true,
      minRows: 5,
    },
  };

  const cregister = (name) => ({
    ...register(name),
    ...Datatype[name],
  });
  const onSubmit = async (data) => {
    const id = getNextId();
    await writeData(`/leads/${id}`, {
      ...data,
      id,
    });
    await localStorage.setItem("contact-us", id);
    setSubmitted(true);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="col-span-1 rounded-xl border py-8 flex flex-col gap-4 lg:p-8 sm:p-6 xs:p-4"
    >
      <p className="text-semibold lg:text-3xl md:text-2xl text-xl">
        Contact Us 👋
      </p>
      <p className="text-gray-500 lg:text-base md:text-sm text-xs">
        Feel free to send us a message or call us. Our team is ready to assist
        you with professional advice and personalized solutions.
      </p>
      <div className="grid grid-cols-2 gap-4 items-center justify-center ">
        <TextInput
          className="lg:col-span-2 sm:col-span-1 col-span-2 self-end"
          {...cregister("name")}
        />
        <TextInput
          className="lg:col-span-2 sm:col-span-1 col-span-2"
          {...cregister("email")}
        />
        <TextInput className="col-span-2" {...cregister("mobile")} />
        <Textarea
          className="lg:col-span-2 sm:col-span-1 col-span-2"
          {...cregister("position")}
        />
        <Textarea
          className="lg:col-span-2 sm:col-span-1 self-end col-span-2"
          {...cregister("message")}
        />

        <Button
          type="submit"
          loading={isSubmitting}
          radius={10}
          className="h-10 font-normal col-span-2"
        >
          Contact Us
        </Button>
      </div>
    </form>
  );
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(Boolean(localStorage.getItem("contact-us")));
  }, []);

  return (
    <>
      <div className="xl:max-w-screen-xl container mx-auto max-mdsm:px-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-32 md:gap-24 gap-10  lg:mt-24 md:mt-10">
          <div className="col-span-1 flex flex-col gap-4 ">
            <p className="text-gray-500">CONTACT US</p>

            <p className="lg:text-7xl md:text-6xl sm:text-5xl text-3xl heading">
              Let's Talk
            </p>

            <p className="text-gray-500 lg:text-base text-sm">
              Get in touch with us for all your data management needs. At
              Sheetsway, we are dedicated to providing top-notch solutions for
              your spreadsheet and data analysis challenges. Whether you have a
              question about our services, need support with our products, or
              want to give feedback, we're here to help.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="w-fit bg-secondary rounded-xl text-white">
                <div className="flex font-normal lg:p-8 lg:py-4 sm:p-6 sm:py-2 p-4 py-1.5 text-left flex-col">
                  <p className="sm:text-sm text-xs opacity-50">Call Us</p>
                  <p className="lg:text-lg text-base">(356) 77142418</p>
                </div>
              </button>
              <button className="w-fit border border-secondary rounded-xl text-secondary">
                <div className="flex font-normal lg:p-8 lg:py-4 sm:p-6 sm:py-2 p-4 py-1.5 text-left flex-col">
                  <p className="sm:text-sm text-xs opacity-50">Email Us</p>
                  <p className="lg:text-lg text-base">info@sheetsway.com</p>
                </div>
              </button>
            </div>
          </div>
          {submitted ? (
            <div className="col-span-1 overflow-clip relative rounded-xl justify-center border py-8 flex flex-col gap-4 p-8">
              <p className="text-5xl">🧡</p>
              <p className="text-semibold heading text-5xl">
                We value you at Sheetsway
              </p>
              <p className="text-semibold text-zinc-500">
                We value your feedback and inquiries. At SheetSway, our team is
                committed to providing exceptional service and support. Whether
                you have questions about our solutions, need assistance with
                your data management, or simply want to share your thoughts,
                we're here to listen and help.
              </p>
              <Image
                src="/back.svg"
                width={1200}
                height={1200}
                className="absolute z-[-1] opacity-20 top-0 left-0"
              />
              <Button
                variant="light"
                className="w-fit"
                onClick={() => {
                  setSubmitted(false);
                  localStorage.removeItem("contact-us");
                }}
              >
                Message Us Again
              </Button>
            </div>
          ) : (
            <Suspense>
              <ContactUS />
            </Suspense>
          )}
        </div>
        <div className="gap-32 md:my-24 mt-14 mb-10">
          <div className="flex sm:flex-row justify-between flex-col w-full">
            <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl shrink-0 leading-[1.2] heading">
              Our Office
            </h1>
            <h2 className="md:text-xl text-base text-zinc-500">
              <span>
                Amazing Cities, totally tricked out offices
                <br />
                Explore the world of sheetsway
              </span>
            </h2>
          </div>
          <div className="sm:mt-24 mt-5">
            <div className="flex flex-col gap-2 font-sans">
              <p className="text-lg font-semibold">Malta Office</p>
              <p>A4, Triq San Giljan, San Gwann, Malta</p>
            </div>
            <br />
            <iframe
              className="rounded-2xl"
              width="100%"
              height="600"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
      <ShowSection />
    </>
  );
}
