import Image from "next/image";

const FirstSection = () => {
  return (
    <div className="h-[--height-viewport-without-header] relative mx-[134px] border-[1px] my-3">
      <div className="h-full w-[50%] absolute top-0 left-0 sm:flex flex-column items-center hidden">
        <p className="text-black font-priencesa-regular text-[130px] leading-none">
          The
          <br />
          Bhavini
          <br />
          Johar
          <br />
          Store
        </p>
      </div>
      <div className="flex flex-row-reverse h-full w-[50%] absolute top-0 right-0">
        <Image
          src="/first.png"
          width={500}
          height={500}
          alt="Product Name"
          className="h-full w-full border-[1px]"
        />
      </div>
    </div>
  );
};

export default FirstSection;
