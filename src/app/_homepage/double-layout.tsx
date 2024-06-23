import Image from "next/image";

const DoubleLayout = () => {
  return (
    <div className="h-[--height-viewport-without-header] md:h-[calc(var(--height-viewport-without-header)_*_2)] relative my-7">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="h-full w-full flex flex-col justify-end md:justify-start items-center py-7">
          <p className="text-[3rem] md:text-[240px] leading-none text-stroke-[1px] md:text-stroke-[3px] text-stroke-accent-dark text-transparent">
            Maharani
          </p>
          <p className="text-[5rem] md:text-[200px] leading-none italic text-accent-dark">
            Bagh
          </p>
          <p className="hidden md:block w-[275px] mt-[100px] text-[#E3FFB5] text-center text-[20px]">
            Handmade, block printed{" "}
            <span className="underline">jute-linen</span> table linen set for
            that royal supper.
          </p>
          <p className="hidden md:block cursor-pointer hover:scale-105 mt-[100px] italic ease-in-out">
            Take a look<span className="pl-1 font-bold text-accent">&gt;</span>
          </p>
        </div>
      </div>
      <Image
        alt="Product name"
        src="/full-width-with-take-a-look.png"
        width={1024}
        height={768}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default DoubleLayout;
