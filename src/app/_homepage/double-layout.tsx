import Image from "next/image";
import Link from "next/link";

const DoubleLayout = () => {
  return (
    <>
      <section className="md:block hidden md:h-[calc(var(--height-viewport-without-header)_*_2)] relative md:mb-[104px]">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className="h-full w-full flex flex-col justify-end md:justify-start items-center md:pt-[347px]">
            <p className="text-[3rem] md:text-[240px] leading-none  md:mb-[20px] text-stroke-[1px] md:text-stroke-[3px] text-stroke-[#A50262] text-transparent">
              Maharani
            </p>
            <p className="font-princesa-alt-regular-it text-[5rem] md:text-[200px] leading-none text-accent-dark md:mb-[57px]">
              Bagh
            </p>
            <p className="hidden md:block w-[275px] text-[#E3FFB5] text-center md:text-[16px] leading-[22px] md:mb-[63px] md:w-[200px] font-avenir-next-regular">
              Handmade, block printed jute-linen{" "}
              <span className="cursor-pointer hover:underline">
                table linen
              </span>{" "}
              set for that royal supper.
            </p>
            <span className="md:text-[14px] font-princesa-regular-it text-white hidden md:block cursor-pointer hover:scale-105 ease-in-out">
              <Link href="#">
                Take a look
                <span className="pl-1 font-bold text-accent">&gt;</span>
              </Link>
            </span>
          </div>
        </div>

        <Image
          alt="Product name"
          src="/double_layout_image.png"
          width={1024}
          height={768}
          className="h-full w-full object-cover"
        />
      </section>
      <section className="md:hidden h-[100dvh] flex justify-center items-center">
        <Image
          alt="Product name"
          src="/double_layout_image.png"
          width={1024}
          height={768}
          className="h-full w-full object-cover"
        />
      </section>
    </>
  );
};

export default DoubleLayout;
