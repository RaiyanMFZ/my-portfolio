import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <>
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center relative z-20">
        <h2 className="text-gray-400 text-4xl mb-4">Hello I'm</h2>
        <h1 className="text-black text-6xl font-bold mb-4">Raiyan Mahfuz</h1>
        <h3 className="text-gray-400 text-4xl mb-8">Frontend Developer</h3>
        
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
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <BackgroundBeamsWithCollision className="h-full w-full" />
      </div>
    </>
  );
}