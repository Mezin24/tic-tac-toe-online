import Image from "next/image";
import clsx from "clsx";
import { GameSymbol } from "./game-symbol";

export const PlayerInfo = ({
  name,
  isRight,
  isTimerRunning,
  avatar,
  rating,
  symbol,
  seconds,
}) => {
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, 0);
  const secondsString = String(seconds % 60).padStart(2, 0);
  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }

    return "text-slate-200";
  };

  return (
    <div className="flex items-center gap-3">
      <div className={clsx("relative", isRight && "order-last")}>
        <div className="ml-auto text-teal-600  flex items-center gap-2 w-44">
          <Image
            priority={true}
            src={avatar}
            alt="avatar"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="overflow-hidden">
            <div className="  text-lg leading-tight text-ellipsis overflow-hidden">
              {name}
            </div>
            <div className="text-slate-400 text-xs leading-tight">
              Рейтинг: {rating}
            </div>
          </div>
        </div>
        <div className="bg-white w-5 h-5 rounded-full shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={symbol} />
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
};
