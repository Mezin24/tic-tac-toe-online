export const ResetBtn = ({ onClick, ...otherProps }) => {
  return (
    <button
      className='contain-paint mt-2 bg-transparent border border-gray-700 px-3 py-1 rounded'
      onClick={onClick}
      {...otherProps}
    >
      Сбросить
    </button>
  );
};
