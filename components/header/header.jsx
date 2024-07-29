import Image from "next/image";
import { Profile } from "components/profile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import logoSrc from "./logo.svg";

export const Header = () => {
  return (
    <header className="px-8 h-24 flex items-center bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="h-8 w-px bg-slate-200 mx-6" />
      <button className="px-5 py-2 bg-teal-600 hover:bg-teal-500 transition-colors text-white w-44 rounded-lg text-2xl leading-tight">
        Играть
      </button>
      <button className="ml-auto text-teal-600  flex items-center gap-2 ">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
};
