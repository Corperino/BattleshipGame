/*
 Creates an empty game board for the grid-based game.
 
This function generates a 10x10 grid initialized with "null" values, 
representing an empty board where no ships have been placed and no attacks 
have been made. The grid size is determined by the constant "GRID_SIZE".
*/
const GRID_SIZE = 10;
const createEmptyBoard = () =>
  Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
export default createEmptyBoard;
