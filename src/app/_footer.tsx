const Footer = () => {
  return (
    <footer className="text-center">
      <div className="pt-[95px] pb-[123px]">
        <p className="mb-[57.5px] font-princesa-light-it md:text-[36px]">
          Looking for something specific?
        </p>
        <ul
          role="list"
          className="md:text-[54px] list-none flex flex-wrap items-center justify-evenly font-princesa-light"
        >
          <li className="border-b-[1px] border-white hover:border-accent cursor-pointer hover:transition-colors ease-in-out">
            Bed
          </li>
          <li className="border-b-[1px] border-white hover:border-accent cursor-pointer hover:transition-colors ease-in-out">
            Dining
          </li>
          <li className="border-b-[1px] border-white hover:border-accent cursor-pointer hover:transition-colors ease-in-out">
            Furniture
          </li>
          <li className="border-b-[1px] border-white hover:border-accent cursor-pointer hover:transition-colors ease-in-out">
            Objects
          </li>
          <li className="border-b-[1px] border-white hover:border-accent cursor-pointer hover:transition-colors ease-in-out">
            Clothing
          </li>
          <li className="border-b-[1px] border-white hover:border-accent cursor-pointer hover:transition-colors ease-in-out">
            Lifestyle
          </li>
        </ul>
      </div>
      <div className="h-[681px] bg-black"></div>
    </footer>
  );
};

export default Footer;
