'use client'

import Button from "@/app/_components/Button";
import React, { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

function Call() {
    const [open, setOpen] = useState(false);
    const [rootEl, setRootEl] = useState(null);

    useEffect(() => {
        // Runs only on client after component mounts
        const el = document.getElementById("calendly-root");
        if (el) {
            setRootEl(el);
        }
    }, []);

    return (
        <>
            <Button type="secondary" size="lg" onClick={() => setOpen(true)}>
                Schedule a Call
            </Button>

            {rootEl && (
                <PopupModal
                    url="https://calendly.com/dhruv-sheetsway/30min"
                    onModalClose={() => setOpen(false)}
                    open={open}
                    rootElement={rootEl}
                />
            )}
        </>
    );
}

export default Call;
