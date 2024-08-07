import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden ma-auto sm:px-10">
        <div className="max-w-7xl w-full h-[100vh]">
          <HeroSection />
        </div>
      </main>
    </main>
  );
}
