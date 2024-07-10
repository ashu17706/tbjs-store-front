import Link from "next/link";
import Image from "next/image";
import Video from "./section-with-full-width-image/video";

const SectionFour = () => {
  return (
    <div className="h-[--height-viewport-without-header] md:mb-[143px] flex justify-center items-center">
      <div className="bg-[#F0F4E2] h-[75%] w-full flex">
        <div className="w-[25%] md:mr-[39px] h-full text-right md:pt-[75px] flex flex-col items-end">
          <p className="text-[60px] mb-[14px] leading-[54px] md:pb-[9px]">
            The Gentle Leopard
          </p>
          <p className="text-[34px] mb-[14px] leading-[42px] font-princesa-light-it md:pb-[30px]">
            Unisex Robes
          </p>
          <p className="text-[14px] font-avenir-next-regular leading-[22px] md:mb-[20px] w-[215px]">
            Handmade, screen printed quick-dry{" "}
            <span className=" cursor-pointer text-accent-underline hover:underline">
              100% cotton waffle robes
            </span>
            , for the sexy beast in you. Roarrr.
          </p>
          <span className="font-princesa-regular-it">
            <Link href="#">
              Take a look
              <span className="pl-1 font-bold text-accent">&gt;</span>
            </Link>
          </span>
        </div>
        <div className="w-[487px] md:mr-[51px] h-full relative">
          <div className="absolute top-[-91px] bottom-[95px] left-0 right-0 border-[1px]">
            <Image
              src="/section_4_1.png"
              width={500}
              height={500}
              alt="Product Name"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="w-[489px] md:mr-[51px] h-full relative">
          <div className="absolute top-[-154px] bottom-[-63px] left-0 right-0 border-[1px]">
            <Video url="/Section_4.mp4" />
          </div>
        </div>
        <div className="w-[25%] h-full relative">
          <div className="absolute top-[-91px] bottom-[95px] left-0 right-0 border-[1px]">
            <Image
              src="/section_4_3.png"
              width={500}
              height={500}
              alt="Product Name"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
