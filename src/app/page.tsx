import Image from "next/image";
import FirstSection from "./_homepage/first";
import SecondSection from "./_homepage/second";

export default function Home() {
  return (
    <main className="py-16">
      <FirstSection />
      <SecondSection />
    </main>
  );
}
