import FirstSection from "./_homepage/first";
import SecondSection from "./_homepage/second";
import SectionWithFullWidthImage from "./_homepage/section-with-full-width-image";
import Footer from "./_footer";
import WhyBeautyMatters from "./_homepage/WhyDesignMatters";
import FullWidth from "./_homepage/full-width";
import DoubleLayout from "./_homepage/double-layout";
import CollectionSection from "./_homepage/collection-section";

export default function Home() {
  return (
    <main className="pt-[106px] overflow-hidden">
      <FirstSection />
      <SecondSection />
      <SectionWithFullWidthImage />
      <FullWidth />
      <DoubleLayout />
      <CollectionSection />
      <WhyBeautyMatters />
      <Footer />
    </main>
  );
}
