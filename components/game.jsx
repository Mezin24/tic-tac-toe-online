import { GameInfo } from './game-info';
import { GameCell } from './game-cell';
import { useGameState } from './use-game-state';
import { ResetBtn } from './reset-btn';
import { GameField } from './game-field';
import { GameLayout } from './game-layout';

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
