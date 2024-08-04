import { memo } from "react";
import clsx from "clsx";
import { GameSymbol } from "./game-symbol";

export const GameCell = memo(function GameCell({
  symbol,
  onClick,
  isWinner,
  disabled,
  index,
}) {
  console.log("cell");
  return (
    <button
      disabled={disabled}
      onClick={() => onClick(index)}
      className={clsx(
        "border border-slate-200 -mt-px -ml-px flex items-center justify-center",
        isWinner && "bg-orange-600/10"
      )}
    >
      {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
    </button>
  );
});
