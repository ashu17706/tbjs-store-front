import Image from "next/image";
import Link from "next/link";

const FirstSection = async () => {
  return (
    <div className="h-[--height-viewport-without-header] relative md:mx-[134px] flex justify-end mb-[104px]">
      <div className="h-full w-[50%] absolute top-0 left-0 sm:flex flex-column items-start pt-9 hidden z-[-1]">
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
        <p className="text-[14px] mb-[74px] font-avenir-next-regular leading-[22px]">
          Handmade soft organic{" "}
          <Link href="#">
            <span className="text-accent hover:underline">jute-linen</span>
          </Link>{" "}
          <span className="text-accent">block printed throw blanket</span>, the
          perfect napping companion.
        </p>
        <span className="font-princesa-regular-it">
          <Link href="#">
            Take a look
            <span className="pl-1 font-bold text-accent">&gt;</span>
          </Link>
        </span>
      </div>
      <div className="flex flex-row justify-end h-full md:w-[45%]">
        <Link href="#" className="m-0 p-0 h-full w-full">
          <Image
            src="/first.png"
            width={500}
            height={500}
            alt="Product Name"
            className="h-full w-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default FirstSection;
