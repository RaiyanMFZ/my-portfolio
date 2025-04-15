import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ContactForm } from "@/components/ui/contact-form";

export default function Home() {
  return (
    <>
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center relative z-20 pt-16">
        <h2 className="text-gray-400 dark:text-gray-300 text-4xl mb-4">Hello I'm</h2>
        <h1 className="text-black dark:text-white text-6xl font-bold mb-4">Raiyan Mahfuz</h1>
        <h3 className="text-gray-400 dark:text-gray-300 text-4xl mb-8">Frontend Developer</h3>
        
        <div className="flex gap-4">
          <a
            href="/MahfuzRaiyan_Lebenslauf.pdf"
            download
            className="btn btn-black"
          >
            Download CV
          </a>
          <button
            type="button"
            className="btn btn-primary"
          >
            Contact info
          </button>
        </div>
      </div>
      
      <ContactForm />
      
      <div className="fixed top-0 left-0 right-0 bottom-0 -z-10 w-screen h-screen">
        <BackgroundBeamsWithCollision className="w-full h-full" />
      </div>
    </>
  );
}