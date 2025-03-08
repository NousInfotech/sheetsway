"use client";

import Cta from "@/Components/UI/Cta";
import Footer from "@/Components/UI/Footer";
import { SubHeading } from "@/Components/UI/Heading";
import Navbar from "@/Components/UI/Navbar";
import {
  Badge,
  Button,
  Card,
  CardSection,
  Group,
  Image,
  Input,
  InputWrapper,
  ScrollAreaAutosize,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { writeData } from "@/api/fb";
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
      className="col-span-1 rounded-xl border py-8 flex flex-col gap-4 p-8"
    >
      <p className="text-semibold text-3xl">Contact Us 👋</p>
      <p className="text-gray-500">
        Feel free to send us a message or call us. Our team is ready to assist
        you with professional advice and personalized solutions.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <TextInput className="col-span-2" {...cregister("name")} />
        <TextInput className="col-span-2" {...cregister("email")} />
        <TextInput className="col-span-2" {...cregister("mobile")} />
        <Textarea className="col-span-2" {...cregister("position")} />
        <Textarea className="col-span-2" {...cregister("message")} />

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

function about() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(Boolean(localStorage.getItem("contact-us")));
  }, []);
  return (
    <>
      <div className="lg:w-[80%] lg:p-0 p-8 w-full mx-auto">
        <div className="mx-auto grid grid-cols-2 gap-32 mt-24">
          <div className="col-span-1 flex flex-col gap-4 ">
            <p className="text-gray-500">CONTACT US</p>
            <br />
            <p className="text-7xl heading">Let's Talk</p>
            <br />
            <p className="text-gray-500">
              Get in touch with us for all your data management needs. At
              Sheetsway, we are dedicated to providing top-notch solutions for
              your spreadsheet and data analysis challenges. Whether you have a
              question about our services, need support with our products, or
              want to give feedback, we're here to help.
            </p>
            <br />
            <br />
            <div className="flex gap-4">
              <button className="w-fit bg-secondary rounded-xl text-white">
                <div className="flex font-normal p-8 py-4 text-left flex-col">
                  <p className="text-sm opacity-50">Call Us</p>
                  <p className="text-lg">(356) 77142418</p>
                </div>
              </button>
              <button className="w-fit border border-secondary rounded-xl text-secondary">
                <div className="flex font-normal p-8 py-4 text-left flex-col">
                  <p className="text-sm opacity-50">Email Us</p>
                  <p className="text-lg">info@sheetsway.com</p>
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
        <div className="gap-32 my-56">
          <SubHeading
            heading={<span>Our Office</span>}
            description={
              <span>
                Amazing Cities, totally tricked out offices
                <br />
                Explore the world of sheetsway
              </span>
            }
          />
          <div className="mt-24">
            <div className="flex flex-col gap-2">
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

export default about;
