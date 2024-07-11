import SearchLogo from "@/app/_assets/_icons/search.svg";
import StoreLogo from "@/app/_assets/_icons/store.svg";
import HamburgerLogo from "@/app/_assets/_icons/hamburger.svg";
import Logo from "./_homepage/_components/logo";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center px-[40px] pt-[38px] pb-[19px] fixed bg-white w-full z-10">
      <Logo />
      <div className="flex flex-row justify-center items-center gap-[40px]">
        <SearchLogo className="cursor-pointer" />
        <StoreLogo className="cursor-pointer" />
        <HamburgerLogo className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
