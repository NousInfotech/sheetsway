import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import BookADemoModal from "./BookADemoModal";
import Header from "./_components/Header";
import "./globals.css";
import FooterSection from "@/Components/UI/Footer";
import Navbar from "@/Components/UI/Navbar";

export const metadata = {
  title: {
    default: "Sheetsway",
    template: "%s | Sheetsway",
  },
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body>
        <MantineProvider
          theme={{
            colors: {
              brand: [
                "#E3D2BC",
                "#DEC29A",
                "#E1B376",
                "#EBA84C",
                "#FF9F1C",
                "#E58F19",
                "#e8840c",
                "#e8840c",
                "#e8840c",
                "#6F5838",
              ],
            },
            primaryColor: "brand",
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <BookADemoModal />
          <Navbar />
          <main>{children}</main>
          <FooterSection/>
        </MantineProvider>
      </body>
    </html>
  );
}
