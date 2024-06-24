import SearchLogo from "@/app/_assets/_icons/search.svg";
import StoreLogo from "@/app/_assets/_icons/store.svg";
import HamburgerLogo from "@/app/_assets/_icons/hamburger.svg";

const Header = () => {
  return (
    <header className="h-[64px] flex flex-row justify-between items-center px-6 fixed bg-white w-full z-10">
      <h1 className="text-black font-priencesa-regular text-[28px]">
        <span className="hidden md:block">The Bhavini Johar Store</span>
        <span className="block md:hidden">TBJS</span>
      </h1>

      <div className="flex flex-row justify-center items-center gap-2 text-gray-300">
        <SearchLogo className="mx-2 cursor-pointer" />
        <StoreLogo className="mx-2 cursor-pointer" />
        <HamburgerLogo className="mx-2 cursor-pointer text-black" />
      </div>
    </header>
  );
};

export default Header;
