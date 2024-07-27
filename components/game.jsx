import { GameInfo } from './game-info';
import { GameCell } from './game-cell';
import { useGameState } from './use-game-state';
import styles from './game.module.css';
import { ResetBtn } from './reset-btn';

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
    <div className={styles.game}>
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className={styles['game-field']}>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <ResetBtn onClick={handleResetClick} />
    </div>
  );
}
