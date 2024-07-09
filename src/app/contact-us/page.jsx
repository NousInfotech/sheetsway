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
} from "@mantine/core";
import React from "react";

function about() {
  return (
    <ScrollAreaAutosize mah={"100vh"}>
      <div className="lg:w-[80%] lg:p-0 p-8 w-full mx-auto">
        <Navbar />
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
          <form className="col-span-1 rounded-xl border py-8 flex flex-col gap-4 p-8">
            <p className="text-semibold text-3xl">Contact Us 👋</p>
            <p className="text-gray-500">
              Feel free to send us a message or call us. Our team is ready to
              assist you with professional advice and personalized solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <InputWrapper
                required
                className="col-span-1"
                label="Your First Name"
              >
                <Input radius={10} placeholder="Your name" />
              </InputWrapper>
              <InputWrapper
                required
                className="col-span-1"
                label="Your Last Name"
              >
                <Input radius={10} placeholder="Your name" />
              </InputWrapper>
              <InputWrapper
                required
                className="col-span-2"
                label="Your Company Name"
              >
                <Input radius={10} placeholder="Your name" />
              </InputWrapper>
              <InputWrapper
                required
                className="col-span-2"
                label="Your Personal or Company Email"
              >
                <Input radius={10} placeholder="Your name" />
              </InputWrapper>
              <InputWrapper
                required
                className="col-span-2"
                label="Your Position"
              >
                <Input radius={10} placeholder="Your name" />
              </InputWrapper>
              <Textarea
                autosize
                required
                className="col-span-2"
                description=""
                minRows={5}
                label="Message"
                radius={10}
                placeholder="Your name"
              />

              <Button radius={10} className="h-10 font-normal col-span-2">
                Contact Us
              </Button>
            </div>
          </form>
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
            <br/>
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
      <Cta />
      <Footer />
    </ScrollAreaAutosize>
  );
}

export default about;
