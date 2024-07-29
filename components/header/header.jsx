import Image from "next/image";
import { Profile } from "components/profile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import logoSrc from "./logo.svg";
import { UIButton } from "components/uikit/ui-button";

export const Header = () => {
  return (
    <header className="px-8 h-24 flex items-center bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="h-8 w-px bg-slate-200 mx-6" />
      <UIButton className="w-44" variant="primary" size="lg">
        Играть
      </UIButton>
      <button className="ml-auto text-teal-600  flex items-center gap-2 ">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
};
