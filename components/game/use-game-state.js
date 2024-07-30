import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";

const getNextMove = (currentMove, playersCount) => {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);
  const nextMove = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMove] ?? slicedMoveOrder[0];
};

export const UseGameState = (playersCount) => {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const nextMove = getNextMove(currentMove, playersCount);

  const handleCellClick = (index) => {
    if (cells[index]) return;
    setGameState((prev) => ({
      ...prev,
      currentMove: getNextMove(prev.currentMove, playersCount),
      cells: prev.cells.map((cell, i) =>
        i === index ? prev.currentMove : cell
      ),
    }));
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
  };
};
