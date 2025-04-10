'use client'

import Button from "@/app/_components/Button";
import React, { useState } from "react";
import { PopupModal } from "react-calendly";

function Call() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button type="secondary" size="lg" onClick={() => setOpen(true)}>Schedule a Call</Button>
            <PopupModal
                url="https://calendly.com/dhruv-sheetsway/30min"
                // pageSettings={this.props.pageSettings}
                // utm={this.props.utm}
                // prefill={this.props.prefill}
                onModalClose={() => setOpen(false)}
                open={open}
                rootElement={document.getElementById("calendly-root")
                }
            />
        </>
    );
}

export default Call;
