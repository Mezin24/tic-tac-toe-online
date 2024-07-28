import { GameCell } from "./game-cell";
import { GameField } from "./game-field";
import { GameInfo } from "./game-info";
import { GameLayout } from "./game-layout";
import { ResetBtn } from "./reset-btn";
import { useGameState } from "./use-game-state";

export function Game() {
  const {
    cells,
    currentStep,
    handleCellClick,
    handleResetClick,
    isDraw,
    winnerSequence,
    winnerSymbol,
  } = useGameState();

  return (
    <GameLayout>
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <GameField>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </GameField>
      <ResetBtn onClick={handleResetClick} />
    </GameLayout>
  );
}
