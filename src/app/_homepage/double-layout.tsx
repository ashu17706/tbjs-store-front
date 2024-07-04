import Image from "next/image";
import Link from "next/link";

const DoubleLayout = () => {
  return (
    <div className="h-[--height-viewport-without-header] md:h-[calc(var(--height-viewport-without-header)_*_2)] relative md:my-7">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="h-full w-full flex flex-col justify-end md:justify-start items-center md:pt-[347px]">
          <p className="text-[3rem] md:text-[240px] leading-none text-stroke-[1px] md:text-stroke-[2px] text-stroke-accent text-transparent">
            Maharani
          </p>
          <p className="font-princesa-alt-regular-it text-[5rem] md:text-[200px] leading-none text-accent-dark md:mb-[53px]">
            Bagh
          </p>
          <p className="hidden md:block w-[275px] text-[#E3FFB5] text-center text-[20px] leading-[30px] md:mb-[63px] font-avenir-regular">
            Handmade, block printed{" "}
            <span className="cursor-pointer hover:underline">jute-linen</span>{" "}
            table linen set for that royal supper.
          </p>
          <span className="font-princesa-regular-it text-white hidden md:block cursor-pointer hover:scale-105 ease-in-out">
            <Link href="#">
              Take a look
              <span className="pl-1 font-bold text-accent">&gt;</span>
            </Link>
          </span>
        </div>
      </div>
      <Link href="#" className="h-full w-full">
        <Image
          alt="Product name"
          src="/full-width-with-take-a-look.png"
          width={1024}
          height={768}
          className="h-full w-full object-cover"
        />
      </Link>
    </div>
  );
};

export default DoubleLayout;
