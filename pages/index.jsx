import { useState } from "react";
import { Header } from "components/header";
import { GameTitle, GameInfo, GameField, UseGameState } from "components/game";
import { GameSymbol } from "@/components/game/game-symbol";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);
  const {
    cells,
    currentMove,
    handleCellClick,
    handlePlayerTimeOver,
    nextMove,
    winnerSequence,
    winnerSymbol,
  } = UseGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className="mt-4"
          playersCount={playersCount}
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          onTimeOver={handlePlayerTimeOver}
        />
        {winnerSymbol && (
          <div className="p-4">
            <GameSymbol symbol={winnerSymbol} />
          </div>
        )}
        <GameField
          className="mt-4"
          cells={cells}
          currentMove={currentMove}
          handleCellClick={handleCellClick}
          nextMove={nextMove}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
