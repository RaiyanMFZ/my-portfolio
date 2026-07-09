import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  preload: true,
});

export const metadata = {
  title: "Raiyan Mahfuz",
  description: "Frontend Developer Portfolio",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
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
