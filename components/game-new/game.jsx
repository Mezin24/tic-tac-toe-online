import { GameInfo } from "./ui/game-info";
import { GameTitle } from "./ui/game-title";
import { BackLink } from "./ui/back-link";
import { GameLayout } from "./ui/game-layout";
import { players } from "./constants";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { UseGameState } from "./model/use-game-state";
import { GameCell } from "./ui/game-cell";
import { GameOverModal } from "./ui/game-over-modal";

const PLAYER_COUNT = 2;

export const Game = () => {
  const {
    cells,
    currentMove,
    handleCellClick,
    nextMove,
    winnerSequence,
    winnerSymbol,
  } = UseGameState(PLAYER_COUNT);

  const winnerPlayer = players.find((player) => player.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo isRatingGame playersCount={4} timeMode={"1 мин. на ход"} />
        }
        ndex
        playerslist={players.slice(0, PLAYER_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            name={player.name}
            isRight={index % 2}
            avatar={player.avatar}
            rating={player.rating}
            symbol={player.symbol}
            seconds={60}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            onClick={() => handleCellClick(index)}
            key={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={players.slice(0, PLAYER_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            name={player.name}
            isRight={index % 2}
            avatar={player.avatar}
            rating={player.rating}
            symbol={player.symbol}
            seconds={60}
          />
        ))}
      />
    </>
  );
};
