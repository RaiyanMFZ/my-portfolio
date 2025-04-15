import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Raiyan Mahfuz - Portfolio",
    description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.className}>
        <body className="min-h-screen bg-transparent">
        <div className="relative max-w-screen-xl mx-auto px-4 z-10">
            <header className="relative z-20 flex justify-between items-center py-8">
                <a href="/" className="nav-link text-xl font-medium">
                    Raiyan Mahfuz
                </a>
                <nav>
                    <ul className="flex gap-8">
                        <li>
                            <a href="/" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="" className="nav-link">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="" className="nav-link">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="" className="nav-link">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="relative z-20">
                {children}
            </main>
        </div>

        <footer className="bg-blue-500 text-white py-6 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center space-x-8 mb-4">
                    <a
                        href="https://linkedin.com/in/deinprofil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-100 transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/deinprofil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-100 transition-colors"
                    >
                        GitHub
                    </a>
                    <a 
                        href="mailto:sadgidmahfuz@email.com"
                        className="hover:text-blue-100 transition-colors"
                    >
                        sadgidmahfuz@email.com
                    </a>
                </div>
                <p className="text-center text-sm">© 2025 Raiyan Mahfuz. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
        </body>
        </html>
    );
}
