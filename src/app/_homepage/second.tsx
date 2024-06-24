import Image from "next/image";

const SecondSection = () => {
  return (
    <div className="h-[--height-viewport-without-header] relative md:mx-[134px] flex justify-start items-center md:my-7">
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
          <p className="text-[26px] mb-[14px]">Blooming Florets Linen Throw</p>
          <p className="text-[16px] mb-[68px]">
            Handmade soft organic jute-linen block printed throw blanket, the
            perfect napping companion.
          </p>
          <p className="cursor-pointer mb-[64px]">
            Take a look<span className="pl-1 font-bold text-accent">&gt;</span>
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
