const Footer = () => {
  return (
    <footer className="bg-white text-black text-center font-priencesa-regular text-[1.2rem] md:text-[2.3rem] my-10">
      <div className="p-7">
        <p className="mb-10">Looking for something specific?</p>
        <ul
          role="list"
          className="text-[2rem] md:text-[3.5rem] list-none flex flex-wrap items-center justify-around"
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
      <div className="h-[385px] bg-gray-100"></div>
    </footer>
  );
};

export default Footer;
