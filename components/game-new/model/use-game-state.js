import { useState } from "react";
import { GAME_SYMBOLS } from "../constants";
import { computeWinner } from "./compute-winner";
import { getNextMove } from "./get-next-move";

export const UseGameState = (playersCount) => {
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(
    () => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: GAME_SYMBOLS.CROSS,
      playersTimeOver: [],
    })
  );

  const winnerSequence = computeWinner(cells);
  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);
  const winnerSymbol =
    nextMove === currentMove ? currentMove : cells[winnerSequence?.[0]];

  const handleCellClick = (index) => {
    if (cells[index]) return;
    setGameState((prev) => ({
      ...prev,
      currentMove: getNextMove(
        prev.currentMove,
        playersCount,
        prev.playersTimeOver
      ),
      cells: prev.cells.map((cell, i) =>
        i === index ? prev.currentMove : cell
      ),
    }));
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((prev) => ({
      ...prev,
      playersTimeOver: [...prev.playersTimeOver, symbol],
      currentMove: getNextMove(
        prev.currentMove,
        playersCount,
        prev.playersTimeOver
      ),
    }));
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  };
};
