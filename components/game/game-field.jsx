import clsx from "clsx";
import { UIButton } from "../uikit/ui-button";
import { GameSymbol } from "./game-symbol";

export const GameField = ({
  className,
  cells,
  currentMove,
  handleCellClick,
  nextMove,
  winnerSequence,
  winnerSymbol,
}) => {
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
          <GameCell
            onClick={() => handleCellClick(i)}
            key={i}
            isWinner={winnerSequence?.includes(i)}
            disabled={!!winnerSymbol}
          >
            {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldTemplate>
  );
};

function GameCell({ children, onClick, isWinner, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "border border-slate-200 -mt-px -ml-px flex items-center justify-center",
        isWinner && "bg-orange-600/10"
      )}
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
