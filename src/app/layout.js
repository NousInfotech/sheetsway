import "@mantine/core/styles.css";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Wrapper from "./BookADemoModal";
import BookADemoModal from "./BookADemoModal";
export const metadata = {
  title: "Sheetsway",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
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
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
