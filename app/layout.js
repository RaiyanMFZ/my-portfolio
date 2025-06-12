import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderTabs } from "@/components/ui/header-tabs";
import { SimpleFooter } from "@/components/ui/simple-footer";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Raiyan Mahfuz",
    description: "Frontend Developer Portfolio",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </head>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <HeaderTabs />
                    <main className="relative">
                        {children}
                    </main>
                    <SimpleFooter />
                </ThemeProvider>
            </body>
        </html>
    );
}
