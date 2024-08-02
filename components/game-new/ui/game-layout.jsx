export const GameLayout = ({ backLink, title, gameInfo, playerslist }) => {
  return (
    <div className="pl-2">
      {backLink}
      {title}
      {gameInfo}
      <div className="mt-4 bg-white rounded-2xl px-8 py-4 shadow-md  grid grid-cols-2 gap-3">
        {playerslist}
      </div>
    </div>
  );
};
