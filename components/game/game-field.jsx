import clsx from "clsx";
import { UIButton } from "../uikit/ui-button";
import { GameSymbol } from "./game-symbol";
import { UseGameState } from "./use-game-state";

export const GameField = ({ className, playersCount }) => {
  const { cells, currentMove, handleCellClick, nextMove } =
    UseGameState(playersCount);

  const actions = (
    <>
      <UIButton size="md" variant="primary">
        Ничья
      </UIButton>
      <UIButton size="md" variant="outline">
        Сдаться
      </UIButton>
    </>
  );

  return (
    <GameFieldTemplate className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, i) => (
          <GameCell onClick={() => handleCellClick(i)} key={i}>
            {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldTemplate>
  );
};

function GameCell({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-slate-200 -mt-px -ml-px flex items-center justify-center"
    >
      {children}
    </button>
  );
}

function GameFieldTemplate({ children, className }) {
  return (
    <div
      className={clsx(
        "bg-white rounded-2xl px-8 pt-5 pb-7 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="capitalize text-lg font-semibold flex items-center gap-1 leading-tight">
          ход: <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="capitalize text-slate-400 text-sm font-semibold flex items-center gap-1 leading-tight">
          следующий: <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="mt-3 grid grid-rows-[repeat(19,_30px)] grid-cols-[repeat(19,_30px)] pl-px pt-px">
      {children}
    </div>
  );
}
