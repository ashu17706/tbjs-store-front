import Image from "next/image";

const FirstSection = () => {
  return (
    <div className="h-[--height-viewport-without-header] relative md:mx-[134px] flex justify-end md:my-7">
      <div className="h-full w-[50%] absolute top-0 left-0 sm:flex flex-column items-start pt-9 hidden">
        <p className="text-black font-priencesa-regular text-[130px] leading-[0.8]">
          The
          <br />
          Bhavini
          <br />
          Johar
          <br />
          Store
        </p>
      </div>
      <div className="h-full w-[250px] mr-5 text-right md:flex flex-col justify-end pb-10 hidden">
        <p className="text-[26px] mb-[14px]">Blooming Florets Linen Throw</p>
        <p className="text-[16px] mb-[68px]">
          Handmade soft organic jute-linen block printed throw blanket, the
          perfect napping companion.
        </p>
        <p className="cursor-pointer my-2">
          Take a look<span className="pl-1 font-bold text-accent">&gt;</span>
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
