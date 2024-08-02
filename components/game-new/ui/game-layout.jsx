export const GameLayout = ({
  backLink,
  title,
  gameInfo,
  playerslist,
  gameMoveInfo,
  actions,
  gameCells,
}) => {
  return (
    <div className="pb-10">
      {backLink}
      {title}
      {gameInfo}
      <div className="mt-4 bg-white rounded-2xl px-8 py-4 shadow-md  grid grid-cols-2 gap-3">
        {playerslist}
      </div>
      <div className="mt-6 bg-white rounded-2xl px-8 pt-5 pb-7 shadow-md">
        <div className="flex gap-3 items-center">
          <div className="mr-auto">{gameMoveInfo}</div>
          {actions}
        </div>
        <div className="mt-3 grid grid-rows-[repeat(19,_30px)] grid-cols-[repeat(19,_30px)] pl-px pt-px">
          {gameCells}
        </div>
      </div>
    </div>
  );
};
