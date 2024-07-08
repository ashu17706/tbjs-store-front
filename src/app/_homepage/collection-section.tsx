import Image from "next/image";
import Link from "next/link";

const CollectionSection = () => {
  return (
    <div className="md:mb-[120px] md:max-h-[--height-viewport-without-header] w-full flex flex-col md:flex-row justify-between md:items-stetch md:px-[106px] md:gap-[96px]">
      <div className="md:h-full flex flex-col justify-start items-center flex-1">
        <div className="aspect-[0.83] w-[100%] max-w-[100%] border-[4px] border-dotted border-[#DEFFA8] md:mb-[27px]">
          <Link href="#">
            <Image
              alt="Product name"
              src="/collection_one.png"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
        <div className="hidden md:block text-center">
          <p className="w-full md:text-[32px] md:leading-[32px] md:mb-[15px]">
            Lilac Palms Towel Set
          </p>
          <p className="m-auto w-[219px] font-avenir-next-regular text-[16px] leading-[22px] md:mb-[29px]">
            <span className="cursor-pointer hover:underline text-accent-underline">
              100% cotton waffle towel set.
            </span>
            Perfect for the summer. Quick dry and super absorbent.
          </p>
          <span className="font-princesa-regular-it cursor-pointer hover:scale-105 ease-in-out">
            <Link href="#">
              Take a look
              <span className="pl-1 font-bold text-accent">&gt;</span>
            </Link>
          </span>
        </div>
      </div>
      <div className="md:h-full flex flex-col justify-start items-center flex-1">
        <div className="aspect-[0.83] w-[100%] max-w-[100%] border-[4px] border-dotted border-[#DEFFA8] md:mb-[27px]">
          <Link href="#">
            <Image
              alt="Product name"
              src="/collection_two.png"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
        <div className="hidden md:block text-center">
          <p className="w-full md:text-[32px] md:leading-[32px] md:mb-[15px]">
            Desert Palms Bed Set
          </p>
          <p className="m-auto w-[219px] font-avenir-next-regular text-[16px] leading-[22px] md:mb-[29px]">
            Soft{" "}
            <span className="cursor-pointer hover:underline text-accent-underline">
              Jute-Linen Bed Set
            </span>{" "}
            with pillow covers. Lending an earthy look to your room.
          </p>
          <span className="font-princesa-regular-it">
            <Link href="#">
              Take a look
              <span className="pl-1 font-bold text-accent">&gt;</span>
            </Link>
          </span>
        </div>
      </div>
      <div className="md:h-full flex flex-col justify-start items-center flex-1">
        <div className="aspect-[0.83] w-[100%] max-w-[100%] border-[4px] border-dotted border-[#DEFFA8] md:mb-[27px]">
          <Link href="#">
            <Image
              alt="Product name"
              src="/collection_three.png"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
        <div className="hidden md:block text-center">
          <p className="w-full md:text-[32px] md:leading-[32px] md:mb-[15px]">
            Willowing Palms Bed Set
          </p>
          <p className="m-auto w-[219px] font-avenir-next-regular text-[16px] leading-[22px] md:mb-[29px]">
            <span className="cursor-pointer hover:underline text-accent-underline">
              100% cotton waffle bed set.
            </span>{" "}
            Perfect for lazy summer afternoons. Oh so soft!
          </p>
          <span className="font-princesa-regular-it">
            <Link href="#">
              Take a look
              <span className="pl-1 font-bold text-accent-underline">&gt;</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
