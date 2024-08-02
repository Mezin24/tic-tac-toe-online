import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { Profile } from "components/profile";
import { GameSymbol } from "./game-symbol";
import avatar1 from "./images/avatar1.webp";
import avatar2 from "./images/avatar2.webp";
import avatar3 from "./images/avatar3.webp";
import avatar4 from "./images/avatar4.webp";
import { GAME_SYMBOLS } from "./constants";

const players = [
  {
    id: 1,
    name: "Max",
    rating: 432,
    avatar: avatar1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "Ivan",
    rating: 1293,
    avatar: avatar2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Elenakfmsdlfmsdlkfmlkdsfsdfsd",
    rating: 993,
    avatar: avatar3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "Sveta",
    rating: 1192,
    avatar: avatar4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

export const GameInfo = ({
  className,
  playersCount,
  currentMove,
  isWinner,
  onTimeOver,
}) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl px-8 py-4 shadow-md  grid grid-cols-2 gap-3"
      )}
    >
      {players.slice(0, playersCount).map((player, i) => (
        <PlayerInfo
          playerInfo={player}
          key={player.id}
          isRight={i % 2}
          isTimerRunning={currentMove === player.symbol && !isWinner}
          isWinner={isWinner}
          onTimeOver={() => onTimeOver(player.symbol)}
        />
      ))}
    </div>
  );
};

function PlayerInfo({ playerInfo, isRight, isTimerRunning, onTimeOver }) {
  const [seconds, setSeconds] = useState(60);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, 0);
  const secondsString = String(seconds % 60).padStart(2, 0);
  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);
      return () => {
        clearInterval(interval);
        setSeconds(60);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }

    return "text-slate-200";
  };

  return (
    <div className="flex items-center gap-3">
      <div className={clsx("relative", isRight && "order-last")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="bg-white w-5 h-5 rounded-full shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div className="h-6 w-px bg-slate-400"></div>
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-first",
          getTimerColor()
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
