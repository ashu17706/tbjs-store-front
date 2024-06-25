import Image from "next/image";

const TwoProducts = () => {
  return (
    <div className="h-[calc(var(--height-viewport-without-header)_*_2)] md:h-[--height-viewport-without-header] relative flex md:flex-row flex-col justify-between md:mx-6 md:my-6 md:gap-6">
      <div className="flex-1">
        <Image
          src="/two_products_1.png"
          width={500}
          height={500}
          alt="Product Name"
          className="h-full w-full"
        />
      </div>
      <div className="flex-1">
        <Image
          src="/two_products_2.png"
          width={500}
          height={500}
          alt="Product Name"
          className="h-full w-full"
        />
      </div>
      <div className="flex-1 hidden md:block">
        <div className="h-full w-[250px] mr-5 text-left md:flex flex-col justify-start pt-10 hidden">
          <p className="text-[26px] mb-[14px]">Blooming Florets Linen Throw</p>
          <p className="text-[16px] mb-[68px] font-avenir-regular">
            Handmade soft organic jute-linen block printed throw blanket, the
            perfect napping companion.
          </p>
          <p className="cursor-pointer my-2">
            Take a look<span className="pl-1 font-bold text-accent">&gt;</span>
          </p>
        </div>
      </div>
      <div className="h-full absolute top-0 right-[-400px] flex flex-col justify-center md:block">
        <p className="text-black font-priencesa-regular text-[130px] leading-[0.8]">
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
  );
};

export default TwoProducts;
