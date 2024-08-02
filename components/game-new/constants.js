import avatar1 from "./ui/images/avatar1.webp";
import avatar2 from "./ui/images/avatar2.webp";
import avatar3 from "./ui/images/avatar3.webp";
import avatar4 from "./ui/images/avatar4.webp";

export const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const players = [
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
