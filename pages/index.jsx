import { useState } from "react";
import { Header } from "components/header";
import { GameTitle, GameInfo, GameField, UseGameState } from "components/game";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(2);
  const { cells, currentMove, handleCellClick, nextMove, winnerSequence } =
    UseGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className="mt-4"
          playersCount={playersCount}
          currentMove={currentMove}
        />
        <GameField
          className="mt-4"
          cells={cells}
          currentMove={currentMove}
          handleCellClick={handleCellClick}
          nextMove={nextMove}
          winnerSequence={winnerSequence}
        />
      </main>
    </div>
  );
}
