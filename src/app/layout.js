import "@mantine/core/styles.css";
import "./globals.css";
import {
  ColorSchemeScript,
  createTheme,
  MantineProvider,
  virtualColor,
} from "@mantine/core";
export const metadata = {
  title: "Sheetsway",
  description: "",
};

export default function RootLayout({ children }) {
  const themeOverride = createTheme({
    // other: {
    //   deepOrangeLight: '#E17900',
    //   deepOrangeDark: '#FC8C0C',
    //   heroHeight: rem(400),
    // },
  });

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
                "#ff6846",
                "#ff6846",
                "#ff6846",
                "#6F5838",
              ],
            },
            primaryColor: "brand",
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
