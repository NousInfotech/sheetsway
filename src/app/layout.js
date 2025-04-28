import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import BookADemoModal from "./BookADemoModal";
import "./globals.css";
import FooterSection from "@/Components/UI/Footer";
import Navbar from "@/Components/UI/Navbar";
import Script from "next/script";

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
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />

        <Script id="brevo-conversations" strategy="afterInteractive">
          {`
            (function(d, w, c) {
              w.BrevoConversationsID = '67ff9b3b1d63d0756b00eaa8';
              w[c] = w[c] || function() {
                  (w[c].q = w[c].q || []).push(arguments);
              };
              var s = d.createElement('script');
              s.async = true;
              s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
              if (d.head) d.head.appendChild(s);
            })(document, window, 'BrevoConversations');
          `}
        </Script>
      </head>
      <body id="calendly-root">
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
          <FooterSection />
        </MantineProvider>
      </body>
    </html>
  );
}
