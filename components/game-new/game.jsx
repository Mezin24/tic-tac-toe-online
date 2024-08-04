import { useCallback, useMemo, useReducer } from "react";
import { players } from "./constants";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { gameStateReducer, initGameState } from "./model/game-state-reducer";
import { getNextMove } from "./model/get-next-move";
import { GAME_ACTION_TYPES } from "./model/game-state-reducer";
import { BackLink } from "./ui/back-link";
import { GameCell } from "./ui/game-cell";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameOverModal } from "./ui/game-over-modal";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";
import { computeWinner } from "./model/compute-winner";
import { computePlayerTimer } from "./model/compute-player-timer";
import { useTimer } from "../lib/timers";

const PLAYER_COUNT = 2;

export const Game = () => {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    {
      playersCount: PLAYER_COUNT,
      defaultTimer: 60000,
      currentMoveStart: Date.now(),
    },
    initGameState
  );
  const winnerSequence = useMemo(() => computeWinner(gameState), [gameState]);
  const nextMove = getNextMove(gameState);

  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });
  useTimer(
    1000,
    gameState.currentMoveStart,
    useCallback(() => {
      dispatch({
        type: GAME_ACTION_TYPES.TICK,
        now: Date.now(),
      });
    }, [])
  );

  const winnerPlayer = players.find((player) => player.symbol === winnerSymbol);

  const handleCellClick = useCallback((index) => {
    dispatch({
      type: GAME_ACTION_TYPES.CELL_CLICK,
      index,
      now: Date.now(),
    });
  }, []);

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo isRatingGame playersCount={4} timeMode={"1 мин. на ход"} />
        }
        ndex
        playerslist={players.slice(0, PLAYER_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol
          );
          return (
            <PlayerInfo
              key={player.id}
              name={player.name}
              isRight={index % 2}
              avatar={player.avatar}
              rating={player.rating}
              symbol={player.symbol}
              timerStartAt={timerStartAt}
              timer={timer}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo
            currentMove={gameState.currentMove}
            nextMove={nextMove}
          />
        }
        gameCells={gameState.cells.map((cell, index) => (
          <GameCell
            onClick={handleCellClick}
            index={index}
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
            timer={gameState.timers[player.symbol]}
          />
        ))}
      />
    </>
  );
};
