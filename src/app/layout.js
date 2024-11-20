import "./globals.css";
import StyledJsxRegistry from "@/registries/styledJSXRegistry";
import { Manrope } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import About from "@/components/general/About";
import { twMerge } from "tailwind-merge";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Audiophile Website",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, bodyClass }) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body
        className={twMerge(
          `m-auto overflow-x-hidden font-manrope antialiased`,
          bodyClass,
        )}
      >
        <Header />
        <main className={`m-auto max-w-[1500px] overflow-x-hidden px-[6vw]`}>
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
          <About />
        </main>
        <Footer />
      </body>
    </html>
  );
}
