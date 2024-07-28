import Image from "next/image";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import logoSrc from "./logo.svg";
import avatar from "./ava.jpg";

export const Header = () => {
  return (
    <header className="px-8 h-24 flex items-center bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="h-8 w-px bg-slate-200 mx-6" />
      <button className="px-5 py-2 bg-teal-600 hover:bg-teal-500 transition-colors text-white w-44 rounded-lg text-2xl leading-tight">
        Играть
      </button>
      <button className="ml-auto text-teal-600 hover:text-teal-500 transition-colors flex items-center gap-2 text-start">
        <Image
          src={avatar}
          alt="avatar"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <div className="  text-lg leading-tight">Mezin24</div>
          <div className="text-slate-400 text-xs leading-tight">
            Рейтинг: 1234
          </div>
        </div>
        <ArrowDownIcon />
      </button>
    </header>
  );
};
