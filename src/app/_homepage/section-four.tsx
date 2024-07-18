import Link from "next/link";
import Image from "next/image";
import Video from "./section-with-full-width-image/video";

const SectionFour = () => {
  return (
    <div className="h-[--height-viewport-without-header] md:mb-[100px] flex justify-center items-center">
      <div className="bg-[#F0F4E2] h-[70%] w-full flex">
        <div className="w-[300px] md:mr-[39px] h-full text-right md:pt-[35px] flex flex-col items-end">
          <p className="text-[44px] mb-[14px] leading-[44px] md:mb-[9px]">
            The
            <br />
            Gentle
            <br />
            Leopard
          </p>
          <p className="text-[24px] mb-[14px] leading-[42px] font-princesa-thin-it font-light md:pb-[30px]">
            Unisex Robes
          </p>
          <p className="text-[14px] font-avenir-next-regular leading-[22px] md:mb-[48px] w-[215px]">
            Handmade, screen printed <br />
            quick-dry{" "}
            <span className=" cursor-pointer text-accent-underline hover:underline">
              100% cotton waffle
              <br /> robes
            </span>
            , for the sexy beast in
            <br /> you. Roarrr.
          </p>
          <span className="md:text-[14px] font-princesa-regular-it">
            <Link href="#">
              Take a look
              <span className="pl-1 font-bold text-accent">&gt;</span>
            </Link>
          </span>
        </div>
        <div className="flex-1 md:mr-[51px] relative">
          <div className="absolute top-[-56px] left-0 right-0 md:pt-[133%] border-[1px]">
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <Image
                src="/section_4_1.png"
                width={500}
                height={500}
                alt="Product Name"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 md:mr-[51px] relative">
          <div className="absolute top-[-112px] left-0 right-0 md:pt-[177%]">
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <Video url="/Section_4.mp4" />
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute top-[-56px] left-0 right-0 md:pt-[133%]">
            <div className="absolute top-0 left-0 right-0 bottom-0">
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
    </div>
  );
};

export default SectionFour;
