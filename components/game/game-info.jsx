import { GameSymbol } from "./game-symbol";

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return <div className="mb-3 text-lg">Ничья</div>;
  }

  if (winnerSymbol) {
    return (
      <div className="mb-3 text-lg">
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className="mb-3 text-lg">
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}
