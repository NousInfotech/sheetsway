import Button from "@/app/_components/Button";
import React, { useState } from "react";
import { PopupButton, PopupModal } from "react-calendly";

function call() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Schedule a Call</Button>
      <PopupModal
        url="https://calendly.com/dhruv-sheetsway/30min"
        // pageSettings={this.props.pageSettings}
        // utm={this.props.utm}
        // prefill={this.props.prefill}
        onModalClose={() => setOpen(false)} 
        open={open}
        rootElement={document.getElementById("root")
        }
      />
    </>
  );
}

export default call;
