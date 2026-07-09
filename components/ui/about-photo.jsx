import Image from "next/image";

export default function AboutPhoto() {
  return (
    <div className="relative aspect-[3/2] max-w-md mx-auto lg:max-w-none overflow-hidden border border-white/10 group">
      <Image
        src="/IMG_0597.JPG"
        alt="Raiyan Mahfuz"
        fill
        sizes="(max-width: 1024px) 90vw, 40vw"
        className="object-cover object-[center_20%] opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-[1.02]"
        quality={75}
        priority
      />
    </div>
  );
}
