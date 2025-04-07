// src/app/contact-us/page.jsx
import dynamic from "next/dynamic";

// Lazy load the Contact component with no SSR
const Contact = dynamic(() => import("./Contact"), { ssr: false });

export const metadata = {
  title: "Contact-us",
};

function Page() {
  return <Contact />;
}

export default Page;
