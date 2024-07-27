export const GameLayout = ({ children }) => {
  return (
    <div className='flex flex-col items-center w-40 mx-auto my-24 p-5 border border-black'>
      {children}
    </div>
  );
};
