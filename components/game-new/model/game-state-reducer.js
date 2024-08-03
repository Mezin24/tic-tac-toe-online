import { GAME_SYMBOLS, MOVE_ORDER } from "../constants";
import { getNextMove } from "./get-next-move";

export const GAME_ACTION_TYPES = {
  CELL_CLICK: "cell-click",
  TICK: "tick",
};

export const initGameState = ({
  playersCount,
  defaultTimer,
  currentMoveStart,
}) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
  currentMoveStart,
  playersCount,
  timers: MOVE_ORDER.reduce((timers, symbol, index) => {
    if (index < playersCount) {
      timers[symbol] = defaultTimer;
    }
    return timers;
  }, {}),
});

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case GAME_ACTION_TYPES.CELL_CLICK: {
      const { index, now } = action;
      if (state.cells[index]) return state;

      return {
        ...state,
        currentMove: getNextMove(state),
        currentMoveStart: now,
        cells: updateCells(state, index),
        timers: updateTimers(state, now),
      };
    }
    case GAME_ACTION_TYPES.TICK: {
      const { now } = action;
      if (!isTimerOver(state, now)) {
        return state;
      }

      return {
        ...state,
        currentMove: getNextMove(state),
        currentMoveStart: now,
        timers: updateTimers(state, now),
      };
    }

    default:
      return state;
  }
};

function updateCells(gameState, index) {
  return gameState.cells.map((cell, i) =>
    i === index ? gameState.currentMove : cell
  );
}

function updateTimers(gameState, now) {
  const diff = now - gameState.currentMoveStart;
  const timer = gameState.timers[gameState.currentMove];
  return {
    ...gameState.timers,
    [gameState.currentMove]: timer - diff,
  };
}

function isTimerOver(gameState, now) {
  const timer = updateTimers(gameState, now)[gameState.currentMove];
  return timer <= 0;
}
