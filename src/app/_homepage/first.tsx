import Image from "next/image";

const FirstSection = async () => {
  return (
    <div className="h-[--height-viewport-without-header] relative md:mx-[134px] flex justify-end mb-[104px]">
      <div className="h-full w-[50%] absolute top-0 left-0 sm:flex flex-column items-start pt-9 hidden">
        <p className="text-black font-princesa-regular text-[130px] leading-[0.8]">
          The
          <br />
          Bhavini
          <br />
          Johar
          <br />
          Store
        </p>
      </div>
      <div className="h-full w-[250px] mr-[27px] text-right md:flex flex-col justify-end md:pb-[120px] hidden">
        <p className="text-[26px] mb-[14px] leading-[32px]">
          Blooming Florets Linen Throw
        </p>
        <p className="text-[14px] mb-[74px] font-avenir-regular leading-[22px]">
          Handmade soft organic{" "}
          <span className="text-accent underline">jute-linen</span>{" "}
          <span className="text-accent">block printed throw blanket</span>, the
          perfect napping companion.
        </p>
        <p className="cursor-pointer font-princesa-regular-it">
          Take a look
          <span className="pl-1 font-bold text-accent">&gt;</span>
        </p>
      </div>
      <div className="flex flex-row justify-end h-full md:w-[45%]">
        <Image
          src="/first.png"
          width={500}
          height={500}
          alt="Product Name"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default FirstSection;
