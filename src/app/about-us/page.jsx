import Navbar from "@/Components/UI/Navbar";
import { ScrollAreaAutosize } from "@mantine/core";
import React from "react";

function about() {
  return (
    <ScrollAreaAutosize mah={"100vh"}>
      <div className="lg:w-[80%] lg:p-0 p-8 w-full mx-auto">
        <Navbar />
      </div>
    </ScrollAreaAutosize>
  );
}

export default about;
