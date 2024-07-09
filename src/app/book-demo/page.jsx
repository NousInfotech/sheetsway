import Footer from "@/Components/UI/Footer";
import Heading, { SubHeading } from "@/Components/UI/Heading";
import Navbar from "@/Components/UI/Navbar";
import {
  Button,
  Input,
  InputWrapper,
  ScrollAreaAutosize,
  Textarea,
} from "@mantine/core";
import React from "react";

function page() {
  return (
    <ScrollAreaAutosize mah={"100vh"}>
      <div className="lg:w-[80%] lg:p-0 p-8 w-full mx-auto">
        <Navbar />
        <div className="grid grid-cols-2 mb-56 mx-auto mt-24 gap-8">
          <div className="flex flex-col gap-6">
            <p className="text-5xl heading">
              Accelerate your <br />
              Audit and Finance teams’ productivity!
            </p>
            <br />
            <p className="text-xl text-gray-500">
              Learn how the intelligent automation platform can help you to:
            </p>
            <li>Perform your audit and finance procedures 10x faster</li>
            <li>Perform your audit and finance procedures 10x faster</li>
            <li>Perform your audit and finance procedures 10x faster</li>
            <li>and Much More...</li>
            <br />
            <p className="text-xl text-gray-500">
              Get your questions answered in a personalized demo.
            </p>
          </div>
          <form className="col-span-1 rounded-xl border py-8 flex flex-col gap-4 p-8">
            <p className="text-semibold text-3xl">Book a Demo</p>
            <p className="text-gray-500">
              Feel free to send us a message or call us. Our team is ready to
              assist you with professional advice and personalized solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <InputWrapper
                required
                className="col-span-2"
                label="Your Name"
              >
                <Input radius={10} />
              </InputWrapper>
              <InputWrapper
                required
                className="col-span-2"
                description="We'll send you an e-mail with suggested dates and times"
                label="Your Personal or Company Email"
              >
                <Input radius={10} />
              </InputWrapper>

              <InputWrapper
                required
                className="col-span-2"
                description="We'll give you a short call to book a time slot that suits you best"
                label="Mobile phone number"
              >
                <Input radius={10} />
              </InputWrapper>


              <Textarea
                radius={10}
                autosize
                required
                className="col-span-2"
                label="What Descripe you the best?"
                description="We'll make sure you're connected to the right expert"
                minRows={5}
              />

              <Button radius={10} className="h-10 font-normal col-span-2">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </ScrollAreaAutosize>
  );
}

export default page;
