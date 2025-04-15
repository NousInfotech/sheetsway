"use client";
import Navbar from "@/Components/UI/Navbar";
import {
  Button,
  Input,
  InputWrapper,
  ScrollAreaAutosize,
  Textarea,
  TextInput,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getNextId } from "../contact-us/Contact";
import { writeData } from "@/api/fb";
import Image from "next/image";

function Page() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(Boolean(localStorage.getItem("demo-us")));
  }, []);

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
      label: "What Describes you the best? ",
      description: "We'll make sure you're connected to the right expert",
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
    await writeData(`/demos/${id}`, {
      ...data,
      id,
    });
    await localStorage.setItem("demo-us", id);
    setSubmitted(true);
    reset();
  };

  return (
    <ScrollAreaAutosize mah={"100vh"}>
      <div className="lg:w-[80%] lg:p-0 p-8 w-full mx-auto">
        <Navbar />
        <div className="grid grid-cols-2 mb-56 mx-auto mt-24 gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-7xl heading">Book an Demo</p>
            <p className="text-gray-500">
              Experience the power of SheetSway firsthand. Schedule a
              personalized demo and discover how our intelligent automation
              platform can transform your audit and finance operations.
            </p>
            <br />
            <p className="text-zinc-500">
              <strong>Customized Tour</strong>: Get a walkthrough tailored to
              your specific needs and business processes.
            </p>
            <p className="text-zinc-500">
              <strong>Expert Guidance:</strong> Interact with our experts and
              get your questions answered in real-time.
            </p>
            <p className="text-zinc-500">
              <strong>See the Benefits:</strong> Understand how SheetSway can
              increase efficiency, accuracy, and scalability for your team.
            </p>
            <br />
            <p className="font-semibold">Ready to see Sheetsway in action?</p>
            <p className="font-semibold">
              Book your demo and take the first step towards greater
              productivity.
            </p>
          </div>
          {submitted ? (
            <div className="col-span-1 relative overflow-clip rounded-xl border flex flex-col justify-center gap-4">
              <Image
                src="/call.jpg"
                width={1200}
                height={1200}
                alt="Call demo preview"
                className="w-full h-full object-cover"
              />

            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="col-span-1 rounded-xl border py-8 flex flex-col gap-4 p-8"
            >
              <p className="text-semibold text-3xl">Book an Demo</p>
              <p className="text-gray-500">
                Feel free to send us a message or call us. Our team is ready to
                assist you with professional advice and personalized solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <TextInput className="col-span-2" {...cregister("name")} />
                <TextInput className="col-span-2" {...cregister("email")} />
                <TextInput className="col-span-2" {...cregister("mobile")} />
                <Textarea className="col-span-2" {...cregister("position")} />

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
          )}
        </div>
      </div>
    </ScrollAreaAutosize>
  );
}

export default Page;
