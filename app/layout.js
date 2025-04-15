import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderTabs } from "@/components/ui/header-tabs";
import { SimpleFooter } from "@/components/ui/simple-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Raiyan Mahfuz - Portfolio",
    description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.className}>
        <body className="min-h-screen bg-transparent flex flex-col">
        <div className="relative flex-1 flex flex-col z-10">
            <HeaderTabs />
            
            <main className="relative z-20 flex-1">
                {children}
            </main>
            
            <SimpleFooter />
        </div>
        </body>
        </html>
    );
}
