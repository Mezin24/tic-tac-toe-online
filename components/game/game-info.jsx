import clsx from "clsx";
import { Profile } from "components/profile";
import { CrossIcon } from "./icons/cross-icon";

export const GameInfo = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl px-8 py-4 shadow-md flex items-center justify-between"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Profile className="w-44" />
          <div className="bg-white w-5 h-5 rounded-full shadow absolute -left-1 -top-1 flex items-center justify-center">
            <CrossIcon />
          </div>
        </div>
        <div className="h-6 w-px bg-slate-400"></div>
        <div className="text-slate-800 text-lg font-semibold">1:08</div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-orange-600 text-lg font-semibold">0:06</div>
        <div className="h-6 w-px bg-slate-400"></div>
        <div className="relative">
          <Profile className="w-44" />
          <div className="bg-white w-5 h-5 rounded-full shadow absolute -left-1 -top-1 flex items-center justify-center">
            <CrossIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
