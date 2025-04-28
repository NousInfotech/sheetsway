"use client";

import { Button } from "@mantine/core";

export default function Error({ reset, error }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg p-16 bg-gray-100">{error.message}</p>

      <Button
        onClick={reset}
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Try again
      </Button>
    </main>
  );
}
