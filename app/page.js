import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-4 max-w-3xl">
        <h1 className="text-gray-400 text-4xl sm:text-5xl font-normal">
          Hello I'm
        </h1>
        <h2 className="text-black text-5xl sm:text-6xl font-bold">
          Raiyan Mahfuz
        </h2>
        <h3 className="text-gray-400 text-4xl sm:text-5xl font-normal">
          Frontend Developer
        </h3>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <a
            href="/MahfuzRaiyan_Lebenslauf.pdf"
            download
            className="px-8 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors"
          >
            Download CV
          </a>
          <button
            type="button"
            className="px-8 py-3 bg-[#0095FF] text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            Contact info
          </button>
        </div>
      </div>
    </div>
  );
}