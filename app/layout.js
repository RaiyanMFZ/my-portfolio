import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Raiyan Mahfuz",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable} font-sans`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
