import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { HistoryIcon } from "./icons/history-icon";

export const GameTitle = () => {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="text-teal-600 flex items-center gap-2 text-xl leading-tight"
      >
        <ArrowLeftIcon />
        На главную
      </Link>
      <h1 className="text-4xl  leading-tight">Крестики нолики</h1>
      <div className="flex items-center gap-3 text-slate-600 text-xs">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon /> 2
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon /> 1 мин на ход
        </div>
      </div>
    </div>
  );
};
