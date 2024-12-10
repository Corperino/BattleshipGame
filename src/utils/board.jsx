const GRID_SIZE = 10;
const createEmptyBoard = () =>
  Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
export default createEmptyBoard;
