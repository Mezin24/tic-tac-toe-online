import clsx from "clsx";
import { GameSymbol } from "./game-symbol";

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        "border border-gray-700 -mt-px -ml-px flex items-center justify-center bg-transparent",
        isWinner && "bg-red-200",
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
