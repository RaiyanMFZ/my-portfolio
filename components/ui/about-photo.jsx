import Image from "next/image";

export default function AboutPhoto() {
  return (
    <div className="relative aspect-[3/4] max-w-sm mx-auto lg:max-w-none overflow-hidden rounded-3xl border border-white/10 group">
      <Image
        src="/IMG_0597.JPG"
        alt="Raiyan Mahfuz"
        fill
        sizes="(max-width: 1024px) 80vw, 35vw"
        className="object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-[1.02]"
        quality={95}
        priority
      />
    </div>
  );
}
