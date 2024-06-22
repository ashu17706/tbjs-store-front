import Image from "next/image";

const DoubleLayout = () => {
  return (
    <div className="h-[calc(var(--height-viewport-without-header)_*_2)] relative my-7">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="h-full w-full border-[1px] border-black flex flex-col justify-center items-center">
          <p className="text-[240px] leading-none text-stroke-[3px] text-stroke-accent-dark text-transparent">
            Maharani
          </p>
          <p className="text-[200px] leading-none italic text-accent-dark">
            Bagh
          </p>
          {/* <p>
            Handmade, block printed jute-linen table linen set for that royal
            supper.
          </p>
          <p className="cursor-pointer hover:scale-105 ease-in-out">
            Take a look<span className="pl-2 font-bold text-accent">&gt;</span>
          </p> */}
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
