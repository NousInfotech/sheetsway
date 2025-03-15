import Link from "next/link";

function NotFound() {
  return (
    <main className="flex items-center justify-center flex-col text-center h-[24.1rem]">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
