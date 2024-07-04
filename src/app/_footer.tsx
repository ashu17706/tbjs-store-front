import Link from "next/link";

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
            <Link href="#">Bed</Link>
          </li>
          <li className="border-b-[1px] border-white hover:border-accent cursor-pointer hover:transition-colors ease-in-out">
            <Link href="#">Dining</Link>
          </li>
          <li className="border-b-[1px] border-white hover:border-accent cursor-pointer hover:transition-colors ease-in-out">
            <Link href="#">Furniture</Link>
          </li>
          <li className="border-b-[1px] border-white hover:border-accent cursor-pointer hover:transition-colors ease-in-out">
            <Link href="#">Objects</Link>
          </li>
          <li className="border-b-[1px] border-white hover:border-accent cursor-pointer hover:transition-colors ease-in-out">
            <Link href="#">Clothing</Link>
          </li>
          <li className="border-b-[1px] border-white hover:border-accent cursor-pointer hover:transition-colors ease-in-out">
            <Link href="#">Lifestyle</Link>
          </li>
        </ul>
      </div>
      <div className="h-[681px] bg-black"></div>
    </footer>
  );
};

export default Footer;
