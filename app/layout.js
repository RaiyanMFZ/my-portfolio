import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderTabs } from "@/components/ui/header-tabs";
import { SimpleFooter } from "@/components/ui/simple-footer";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Raiyan Mahfuz - Portfolio",
    description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
        <body className="min-h-screen bg-transparent flex flex-col">
        <ThemeProvider>
            <div className="relative flex-1 flex flex-col z-20">
                <HeaderTabs />
                
                <main className="relative z-20 flex-1">
                    {children}
                </main>
                
                <SimpleFooter />
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
