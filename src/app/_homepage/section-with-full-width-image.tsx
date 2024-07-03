import Image from "next/image";

const SectionWithFullWidthImage = () => {
  return (
    <div className="md:px-[49px] md:mb-[185px]">
      <div className="h-[--height-viewport-without-header] md:mb-[77px]">
        <Image
          src="/third.png"
          width={500}
          height={500}
          alt="Product Name"
          className="h-full w-full cursor-pointer"
        />
      </div>
      <div className="h-[calc(var(--height-viewport-without-header)_*_2)] md:h-[--height-viewport-without-header] relative flex md:flex-row flex-col justify-between">
        <div className="flex-1 md:mr-[61px] flex items-center justify-center">
          <Image
            src="/two_products_1.png"
            width={500}
            height={500}
            alt="Product Name"
            className="h-full w-full object-cover cursor-pointer"
          />
        </div>
        <div className="flex-1 md:mr-[37px] bg-slate-50">
          <video
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            className="h-full w-full object-cover cursor-pointer"
          ></video>
        </div>

        <div className="flex-1 hidden md:block ">
          <div className="h-full w-[200px] md:flex flex-col justify-start  hidden">
            <p className="text-[26px] mb-[19px] leading-[32px]">
              Pomegranate Bed Set
            </p>
            <p className="text-[14px] mb-[74px] font-avenir-regular leading-[22px]">
              Handmade
              <span className="text-accent"> 100% cotton block printed </span>
              <a href="#" className="text-accent underline">
                bed set
              </a>{" "}
              with cotton filling. Here time slows down.
            </p>
            <p className="cursor-pointer font-princesa-regular-it">
              Take a look
              <span className="pl-1 font-bold text-accent">&gt;</span>
            </p>
          </div>
        </div>

        {/* TBJS half hidden text */}
        <div className="h-full absolute top-0 bottom-0 right-[-545px] flex flex-col justify-center">
          <p className="text-black font-princesa-regular text-[180px] leading-[150px]">
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
