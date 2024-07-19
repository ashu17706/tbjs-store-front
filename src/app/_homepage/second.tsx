import Image from "next/image";
import Link from "next/link";

const SecondSection = () => {
  return (
    <>
      <section className="md:h-[--height-viewport-without-header] relative md:mx-[134px] md:flex hidden justify-start items-center md:mb-[120px]">
        <div className="flex flex-row justify-center items-center h-full md:w-[45%]">
          <Link href="#" className="h-full w-full">
            <Image
              src="/section_2_1.png"
              width={500}
              height={500}
              alt="Product Name"
              className="h-full w-full"
            />
          </Link>
        </div>
        <div className="h-full ml-[33px] text-left md:flex flex-col justify-start md:pt-[50px] hidden">
          <div className="w-[250px]">
            <p className="md:text-[24px] leading-[32px] md:mb-[15px]">
              Tigress Rani <br />
              Tote Bag
            </p>
            <p className="md:w-[233px] text-[14px] mb-[68px] font-avenir-next-regular leading-[22px] md:mb-[68px]">
              Handmade{" "}
              <span className="text-accent-underline cursor-pointer hover:underline">
                100% cotton
              </span>
              <br />
              <span className="text-accent-underline">quilted</span> with
              reversible stripes,
              <br /> for the tigress in you.
            </p>
            <span className="md:text-[14px] font-princesa-regular-it cursor-pointer inline-block md:mb-[63px]">
              <Link href="#">
                Take a look
                <span className="pl-1 font-bold text-accent">&gt;</span>
              </Link>
            </span>
          </div>
          <div className="flex justify-start items-center">
            <div className="h-[240px] w-[240px] mr-[33px]">
              <Link href="#" className="h-full w-full">
                <Image
                  src="/section_2_2.png"
                  width={500}
                  height={500}
                  alt="Product Name"
                  className="h-full w-full"
                />
              </Link>
            </div>
            <div className="h-[240px] w-[240px] mr-[33px]">
              <Link href="#" className="h-full w-full">
                <Image
                  src="/section_2_3.png"
                  width={500}
                  height={500}
                  alt="Product Name"
                  className="h-full w-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="md:hidden h-[100dvh] flex justify-center items-center">
        <Link href="#" className="h-full w-full">
          <Image
            src="/section_2_1.png"
            width={500}
            height={500}
            alt="Product Name"
            className="h-full w-full"
          />
        </Link>
      </section>
    </>
  );
};

export default SecondSection;
