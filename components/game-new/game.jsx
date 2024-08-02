import { GameInfo } from "./ui/game-info";
import { GameTitle } from "./ui/game-title";
import { BackLink } from "./ui/back-link";
import { GameLayout } from "./ui/game-layout";
import { players } from "./constants";
import { PlayerInfo } from "./ui/player-info";

export const Game = () => {
  return (
    <GameLayout
      backLink={<BackLink />}
      title={<GameTitle />}
      gameInfo={
        <GameInfo isRatingGame playersCount={4} timeMode={"1 мин. на ход"} />
      }
      playerslist={players.map((player, index) => (
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
  );
};
