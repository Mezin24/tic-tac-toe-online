import { GameSymbol } from "./game-symbol";

export const GameMoveInfo = ({ currentMove, nextMove }) => {
  return (
    <>
      <div className="capitalize text-lg font-semibold flex items-center gap-1 leading-tight">
        ход: <GameSymbol symbol={currentMove} className="w-5 h-5" />
      </div>
      <div className="capitalize text-slate-400 text-sm font-semibold flex items-center gap-1 leading-tight">
        следующий: <GameSymbol symbol={nextMove} className="w-3 h-3" />
      </div>
    </>
  );
};
