export const GameField = ({ children }) => {
  return (
    <div className="grid grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
      {children}
    </div>
  );
};
