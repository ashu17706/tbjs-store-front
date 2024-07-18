import Image from "next/image";
import Link from "next/link";
import Video from "./video";

const SectionWithFullWidthImage = () => {
  return (
    <div className="md:px-[49px] md:mb-[150px]">
      <div className="h-[--height-viewport-without-header] md:mb-[49px]">
        <Link href="#" className="h-full w-full">
          <Image
            src="/third.png"
            width={500}
            height={500}
            alt="Product Name"
            className="h-full w-full cursor-pointer object-cover"
          />
        </Link>
      </div>
      <div className="h-[calc(var(--height-viewport-without-header)_*_2)] md:h-[--height-viewport-without-header] relative flex md:flex-row flex-col justify-between">
        <div className="md:w-[35%] md:mr-[49px] flex items-center justify-center">
          <Link href="#" className="h-full w-full">
            <Image
              src="/two_products_1.png"
              width={500}
              height={500}
              alt="Product Name"
              className="h-full w-full object-cover cursor-pointer"
            />
          </Link>
        </div>
        <div className="md:w-[35%] md:mr-[37px]">
          <Video url="/Section_3.MOV" />
        </div>

        <div className="flex-1 hidden md:block ">
          <div className="h-full w-[200px] md:flex flex-col justify-start  hidden md:pt-[5px]">
            <p className="md:text-[24px] mb-[15px] leading-[32px]">
              Pomegranate Bed Set
            </p>
            <p className="text-[14px] mb-[74px] font-avenir-next-regular leading-[22px]">
              Handmade{" "}
              <a className="cursor-pointer text-accent-underline hover:underline">
                100% cotton block printed bed set
              </a>{" "}
              with cotton filling. Here time slows down.
            </p>
            <span className="md:text-[14px] font-princesa-regular-it">
              <Link href="#">
                Take a look
                <span className="pl-1 font-bold text-accent">&gt;</span>
              </Link>
            </span>
          </div>
        </div>

        {/* TBJS half hidden text */}
        <div className="h-full absolute top-0 bottom-0 right-[-545px] flex flex-col justify-center">
          <p className="text-black font-princesa-regular text-[175px] leading-[150px]">
            The
            <br />
            Bhavini
            <br />
            Johar
            <br />
            Store
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWithFullWidthImage;
