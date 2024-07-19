import FirstSection from "./_homepage/first";
import SecondSection from "./_homepage/second";
// import SectionWithFullWidthImage from "./_homepage/section-with-full-width-image";
import SectionWithFullWidthImage from "./_homepage/section-with-full-width-image";

import Footer from "./_footer";
import WhyBeautyMatters from "./_homepage/WhyDesignMatters";
import FullWidth from "./_homepage/full-width";
import DoubleLayout from "./_homepage/double-layout";
import CollectionSection from "./_homepage/collection-section";
import SectionFour from "./_homepage/section-four";

export default function Home() {
  return (
    <main className="md:pt-[106px] overflow-hidden">
      <FirstSection />
      <SecondSection />
      <SectionWithFullWidthImage />
      <SectionFour />
      <FullWidth />
      <DoubleLayout />
      <CollectionSection />
      <WhyBeautyMatters />
      <Footer />
    </main>
  );
}
