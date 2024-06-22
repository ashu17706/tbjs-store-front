import Image from "next/image";
import FirstSection from "./_homepage/first";
import SecondSection from "./_homepage/second";
import ThridSection from "./_homepage/third";
import ThirdSecond from "./_homepage/third";
import Footer from "./_footer";
import WhyBeautyMatters from "./_homepage/WhyDesignMatters";
import FullWidth from "./_homepage/full-width";
import DoubleLayout from "./_homepage/double-layout";

export default function Home() {
  return (
    <main className="py-16">
      <FirstSection />
      {/* <SecondSection />
      <ThirdSecond /> */}
      <FullWidth />
      <DoubleLayout />
      <WhyBeautyMatters />
      <Footer />
    </main>
  );
}
