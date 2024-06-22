import Image from "next/image";

const SecondSection = () => {
  return (
    <div className="h-[--height-viewport-without-header] relative mx-[134px] border-[1px] my-3 font-priencesa-regular text-black">
      <div className="flex flex-row-reverse h-full w-[50%] absolute top-0 left-0">
        <Image
          src="/first.png"
          width={500}
          height={500}
          alt="Product Name"
          className="h-full w-full border-[1px]"
        />
      </div>
      <div className="flex flex-col justify-center items-start h-full w-[50%] absolute top-0 right-0 pl-2">
        <p className="text-[28px]">Tigress Rani Tote Bag</p>
        <p className="text-[16px]">
          Handmade <span className="text-accent">100% cotton quilted</span> with
          reversible stripes, for the tigress in you.
        </p>
        <p className="text-[16px]">Take a look</p>
        <div className="flex flex-row h-[200px] boder-[px]">
          <Image
            src="/first.png"
            width={200}
            height={200}
            alt="Product Name"
            className="h-full w-[200px] border-[1px] mr-2"
          />
          <Image
            src="/first.png"
            width={200}
            height={200}
            alt="Product Name"
            className="h-full w-[200px] border-[1px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
