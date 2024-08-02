import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { HistoryIcon } from "./icons/history-icon";

export const GameInfo = ({ playersCount, isRatingGame, timeMode }) => {
  return (
    <div className="flex items-center gap-3 text-slate-600 text-xs">
      {isRatingGame && <StarIcon />}
      <div className="flex items-center gap-1">
        <UserIcon /> {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <HistoryIcon />
        {timeMode}
      </div>
    </div>
  );
};
