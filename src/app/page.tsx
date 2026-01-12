import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        unoptimized
        className="object-cover object-bottom -z-10"
      />

      {/* Content */}
      <div className="flex min-h-screen flex-col items-center px-6 py-8 md:py-12">
        {/* Logo */}
        <Image
          src="/images/logo-b.png"
          alt="Ronnie Grace"
          width={300}
          height={75}
          priority
          className="h-auto w-[225px] md:w-[300px]"
        />
      </div>
    </main>
  );
}
