import Image from "next/image";

const ThirdSecond = () => {
  return (
    <div className="h-[--height-viewport-without-header] md:mx-6 md:my-3 font-priencesa-regular text-black">
      <Image
        src="/third.png"
        width={500}
        height={500}
        alt="Product Name"
        className="h-full w-full"
      />
    </div>
  );
};

export default ThirdSecond;
