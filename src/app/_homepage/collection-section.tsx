import Image from "next/image";

const CollectionSection = () => {
  return (
    <div className="md:my-[50px] md:h-[calc(var(--height-viewport-without-header)-64px)] w-full flex flex-col md:flex-row justify-between md:items-stetch md:px-6">
      <div className="h-[--height-viewport-without-header] md:h-full md:flex-1 md:ml-6 flex flex-col justify-start items-center">
        <div className="h-[100%] md:h-[75%] w-full">
          <Image
            alt="Product name"
            src="/full-width-with-take-a-look.png"
            width={1024}
            height={768}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden md:block text-center">
          <p className="w-full text-[32px] my-2">Willowing Palms Bed Set</p>
          <p className="px-10 my-2">
            100% cotton waffle towel set. Perfect for the summer. Quick dry and
            super absorbent.
          </p>
          <p className="cursor-pointer my-2">
            Take a look<span className="pl-1 font-bold text-accent">&gt;</span>
          </p>
        </div>
      </div>
      <div className="h-[--height-viewport-without-header] md:flex-1 md:h-full md:mx-12 flex flex-col justify-start items-center">
        <div className="h-[100%] md:h-[75%] w-full">
          <Image
            alt="Product name"
            src="/full-width-with-take-a-look.png"
            width={1024}
            height={768}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden md:block text-center">
          <p className="w-full text-[32px] my-2">Willowing Palms Bed Set</p>
          <p className="px-10 my-2">
            100% cotton waffle towel set. Perfect for the summer. Quick dry and
            super absorbent.
          </p>
          <p className="cursor-pointer my-2">
            Take a look<span className="pl-1 font-bold text-accent">&gt;</span>
          </p>
        </div>
      </div>
      <div className="h-[--height-viewport-without-header] md:flex-1 md:h-full md:mr-6 flex flex-col justify-start items-center">
        <div className="h-[100%] md:h-[75%] w-full">
          <Image
            alt="Product name"
            src="/full-width-with-take-a-look.png"
            width={1024}
            height={768}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden md:block text-center">
          <p className="w-full text-[32px] my-2">Willowing Palms Bed Set</p>
          <p className="px-10 my-2">
            100% cotton waffle towel set. Perfect for the summer. Quick dry and
            super absorbent.
          </p>
          <p className="cursor-pointer my-2">
            Take a look<span className="pl-1 font-bold text-accent">&gt;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
