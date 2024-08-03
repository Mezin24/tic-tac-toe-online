export function computePlayerTimer(gameState, playerSymbol) {
  return {
    timerStartAt:
      gameState.currentMove === playerSymbol
        ? gameState.currentMoveStart
        : undefined,
    timer: gameState.timers[playerSymbol],
  };
}
