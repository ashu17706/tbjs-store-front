import Image from "next/image";

const SecondSection = () => {
  return (
    <div className="h-[--height-viewport-without-header] relative md:mx-[134px] flex justify-start items-center md:mb-[120px]">
      <div className="flex flex-row justify-center items-center h-full md:w-[45%]">
        <Image
          src="/first.png"
          width={500}
          height={500}
          alt="Product Name"
          className="h-full w-full"
        />
      </div>
      <div className="h-full ml-5 text-left md:flex flex-col justify-end pb-10 hidden">
        <div className="w-[250px]">
          <p className="text-[26px] mb-[14px] leading-[32px]">
            Tigress Rani Tote Bag
          </p>
          <p className="text-[14px] mb-[68px] font-avenir-regular leading-[22px]">
            Handmade <span className="text-accent underline">100% cotton</span>{" "}
            <span className="text-accent">quilted</span> with reversible
            stripes, for the tigress in you.
          </p>
          <p className="cursor-pointer font-princesa-regular-it mb-[63px]">
            Take a look
            <span className="pl-1 font-bold text-accent">&gt;</span>
          </p>
        </div>
        <div className="flex justify-start items-center">
          <div className="h-[284px] w-[284px] mr-3">
            <Image
              src="/first.png"
              width={500}
              height={500}
              alt="Product Name"
              className="h-full w-full"
            />
          </div>
          <div className="h-[284px] w-[284px] mr-3">
            <Image
              src="/first.png"
              width={500}
              height={500}
              alt="Product Name"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
