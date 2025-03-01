import Link from "next/link";
import Image from "next/image";

const FullWidth = () => {
  return (
    <>
      <section className="hidden md:block md:h-[--height-viewport-without-header] md:mb-[97px] relative">
        <div className="absolute top-[41px] left-[42px] righ-0 h-3 px-6">
          <span className="md:text-[14px] font-princesa-regular-it text-white">
            <Link href="#">
              Take a look
              <span className="pl-1 font-bold text-accent">&gt;</span>
            </Link>
          </span>
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
      </section>
      <section className="md:hidden flex justify-center items-center h-[100dvh]">
        <Link href="#" className="h-full w-full">
          <Image
            alt="Product name"
            src="/mobile/5.jpg"
            width={376}
            height={768}
            className="h-full w-full object-cover"
          />
        </Link>
      </section>
    </>
  );
};

export default FullWidth;
