import clsx from "clsx";
import { ZeroIcon } from "./icons/zero-icon";
import { CrossIcon } from "./icons/cross-icon";
import { UIButton } from "../uikit/ui-button";

const cells = new Array(19 * 19).fill(null);

export const GameField = ({ className }) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-2xl px-8 pt-5 pb-7 shadow-md",
        className
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="mr-auto">
          <div className="capitalize text-lg font-semibold flex items-center gap-1 leading-tight">
            ход: <ZeroIcon className="w-5 h-5" />
          </div>
          <div className="capitalize text-slate-400 text-sm font-semibold flex items-center gap-1 leading-tight">
            следующий: <CrossIcon />
          </div>
        </div>
        <UIButton size="md" variant="primary">
          Ничья
        </UIButton>
        <UIButton size="md" variant="outline">
          Сдаться
        </UIButton>
      </div>

      <div className="mt-3 grid grid-rows-[repeat(19,_30px)] grid-cols-[repeat(19,_30px)] pl-px pt-px">
        {cells.map((_, i) => (
          <button
            className="border border-slate-200 -mt-px -ml-px flex items-center justify-center"
            key={i}
          >
            <ZeroIcon className="w-4 h-4" />
          </button>
        ))}
      </div>
    </div>
  );
};
