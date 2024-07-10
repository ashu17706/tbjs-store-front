import Image from "next/image";
import Link from "next/link";

const SecondSection = () => {
  return (
    <div className="h-[--height-viewport-without-header] relative md:mx-[134px] flex justify-start items-center md:mb-[120px] border-[1px]">
      <div className="flex flex-row justify-center items-center h-full md:w-[45%]">
        <Link href="#" className="h-full w-full">
          <Image
            src="/first.png"
            width={500}
            height={500}
            alt="Product Name"
            className="h-full w-full"
          />
        </Link>
      </div>
      <div className="h-full ml-5 text-left md:flex flex-col justify-end pb-10 hidden">
        <div className="w-[250px]">
          <p className="text-[26px] leading-[32px] mb-[14px]">
            Tigress Rani Tote Bag
          </p>
          <p className="text-[14px] mb-[68px] font-avenir-next-regular leading-[22px]">
            Handmade{" "}
            <span className="text-accent-underline cursor-pointer hover:underline">
              100% cotton
            </span>{" "}
            <span className="text-accent-underline">quilted</span> with
            reversible stripes, for the tigress in you.
          </p>
          <span className="font-princesa-regular-it">
            <Link href="#">
              Take a look
              <span className="pl-1 font-bold text-accent">&gt;</span>
            </Link>
          </span>
        </div>
        <div className="flex justify-start items-center">
          <div className="h-[284px] w-[284px] mr-3">
            <Link href="#" className="h-full w-full">
              <Image
                src="/first.png"
                width={500}
                height={500}
                alt="Product Name"
                className="h-full w-full"
              />
            </Link>
          </div>
          <div className="h-[284px] w-[284px] mr-3">
            <Link href="#" className="h-full w-full">
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
      </div>
    </div>
  );
};

export default SecondSection;
