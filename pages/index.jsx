import { useState } from "react";
import { Header } from "components/header";
import { GameTitle, GameInfo, GameField, UseGameState } from "components/game";
import { GameSymbol } from "@/components/game/game-symbol";
import { UiModal } from "@/components/uikit/ui-modal";
import { UIButton } from "@/components/uikit/ui-button";

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
        <UiModal isOpen={winnerSymbol} onClose={() => console.log("close")}>
          <UiModal.Header>Игра завершена!</UiModal.Header>
          <UiModal.Body>
            <div className="text-sm">
              Победитель: <span className="text-teal-600">Mezin</span>
            </div>
          </UiModal.Body>
          <UiModal.Footer>
            <UIButton size="md" variant="outline">
              Вернуться
            </UIButton>
            <UIButton size="md" variant="primary">
              Играть снова
            </UIButton>
          </UiModal.Footer>
        </UiModal>
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
