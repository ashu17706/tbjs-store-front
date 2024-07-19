import Image from "next/image";
import Link from "next/link";

const FirstSection = async () => {
  return (
    <>
      <section className="md:h-[--height-viewport-without-header] relative md:ml-[134px] md:mr-[157px] md:flex hidden justify-end md:mb-[104px]">
        <div className="h-full w-[50%] absolute top-0 left-0 sm:flex flex-column items-start pt-9 hidden z-[-1]">
          <p className="text-black font-princesa-regular text-[130px] leading-[0.85]">
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
          <p className="md:text-[24px] md:mb-[15px] leading-[32px]">
            Blooming Florets Linen Throw
          </p>
          <p className="font-avenir-next-regular text-[14px] leading-[22px] mb-[74px]">
            Handmade soft organic{" "}
            <Link href="#">
              <span className="text-[#FF0EE5] hover:underline">
                jute
                <br />
                -linen
              </span>
            </Link>{" "}
            <span className="text-[#FF0EE5]">
              block printed throw
              <br /> blanket
            </span>
            , the perfect napping companion.
          </p>
          <span className="md:text-[14px] font-princesa-regular-it">
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
      </section>
      <section className="md:hidden h-[100dvh] flex justify-center items-center">
        <Link href="#" className="m-0 p-0 h-full w-full">
          <Image
            src="/first.png"
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

export default FirstSection;
