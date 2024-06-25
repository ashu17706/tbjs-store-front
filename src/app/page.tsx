import Image from "next/image";
import FirstSection from "./_homepage/first";
import SecondSection from "./_homepage/second";
import ThirdSection from "./_homepage/third";
import Footer from "./_footer";
import WhyBeautyMatters from "./_homepage/WhyDesignMatters";
import FullWidth from "./_homepage/full-width";
import DoubleLayout from "./_homepage/double-layout";
import CollectionSection from "./_homepage/collection-section";
import TwoProducts from "./_homepage/two-products";

export default function Home() {
  return (
    <main className="py-16">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <TwoProducts />
      <FullWidth />
      <DoubleLayout />
      <CollectionSection />
      <WhyBeautyMatters />
      <Footer />
    </main>
  );
}
