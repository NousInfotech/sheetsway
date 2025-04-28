"use client";

import Button from "@/app/_components/Button";
import React, { useEffect, useState } from "react";

import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

function Call() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button type="secondary" size="lg" onClick={open}>
        Schedule a Call
      </Button>

      <Modal withCloseButton={false} size="auto" opened={opened} onClose={close}>
        <iframe
          src="https://meet.brevo.com/sheetsway-meet"
          width="1000px"
          height="1000px"
        ></iframe>
      </Modal>
    </>
  );
}

export default Call;
