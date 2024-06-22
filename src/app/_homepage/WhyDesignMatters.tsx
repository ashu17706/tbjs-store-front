import Image from "next/image";

const WhyBeautyMatters = () => {
  return (
    <div className="bg-[#F0F4E2] flex flex-col md:flex-row justify-start text-black font-priencesa-regular">
      <div className="w-full h-[420px] md:h-[997px] md:w-[60%] relative md:pr-[100px] md:pt-[100px] flex flex-col justify-start items-stretch">
        <div className="flex-1 relative">
          <Image
            alt="Why beauty matters?"
            src="/why_beauty_matters.png"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
          <div className="hidden md:block bg-[#F55EC1] h-[60%] w-[100%] absolute top-[-50px] right-[-50px] opacity-[0.15]"></div>
          <div className="absolute top-0 md:top-[-100px] left-0 right-0 md:right-[-100px] bottom-0  text-center md:text-left flex flex-row justify-center items-center text-[4rem] md:text-[180px] md:pl-[100px]">
            <p className="text-[#E3FFB5]">
              Why <br className="md:hidden" />
              Beauty <br className="md:hidden" />
              Matters
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row justify-center items-center p-8 md:p-12">
        <p className="md:text-[24px]">
          Why do we exist? Does the world need another materialistic store?
          Probably not. That is why our mission is to focus on beauty, not
          commerce. Because beauty matters. The world is always in danger from
          the cult of perversion and ugliness posing as new, original,
          gratuitous, utilitarian. Beauty doesn’t strive to be anything but
          itself. It is transcendental. It uplifts you from the worldly and
          connects you to something eternal. Without it, no matter what we
          achieve, life would be meaningless. Beauty is simple and tells a
          story. It is not mass-produced, pretentious, obtrusive or wasteful.
          And it needs to be restored, time and again, to its rightful place. We
          may not always succeed in this mission, but we will try and we will
          listen. We will champion beauty. Because beauty matters.
        </p>
      </div>
    </div>
  );
};

export default WhyBeautyMatters;
