import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";

const getNextMove = (currentMove) => {
  const nextMove = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMove] ?? MOVE_ORDER[0];
};

export const UseGameState = () => {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const nextMove = getNextMove(currentMove);

  const handleCellClick = (index) => {
    if (cells[index]) return;
    setGameState((prev) => ({
      ...prev,
      currentMove: getNextMove(prev.currentMove),
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
