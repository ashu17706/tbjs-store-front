import Image from "next/image";

const FullWidth = () => {
  return (
    <section className="h-[--height-viewport-without-header] my-7 relative">
      <div className="absolute top-6 left-0 righ-0 h-3 px-6">
        <p className="cursor-pointer hover:scale-105 ease-in-out">
          Take a look<span className="pl-2 font-bold text-accent">&gt;</span>
        </p>
      </div>
      <Image
        alt="Product name"
        src="/full-width-with-take-a-look.png"
        width={1024}
        height={768}
        className="h-full w-full object-cover"
      />
    </section>
  );
};

export default FullWidth;
