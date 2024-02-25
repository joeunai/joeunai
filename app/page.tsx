import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>

      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-lg"
        src="/joeunai.png"
        alt="JoeunAI Logo"
        width={180}
        height={37}
        priority
      />

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
