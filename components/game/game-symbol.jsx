import clsx from "clsx";
import { SYMBOL_O, SYMBOL_X } from "./constants";

export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "text-green-700";
    if (symbol === SYMBOL_X) return "text-red-700";
    return "";
  };
  return (
    <span className={clsx("text-lg", getSymbolClassName(symbol))}>
      {symbol}
    </span>
  );
}
