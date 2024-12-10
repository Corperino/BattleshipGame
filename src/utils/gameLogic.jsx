export const placeShip = (grid, x, y, ship, direction, setMessage) => {
  const GRID_SIZE = 10;
  const newGrid = [...grid];
  let isValid = true;

  for (let i = 0; i < ship.size; i++) {
    const newX = direction === "Horizontal" ? x : x + i;
    const newY = direction === "Horizontal" ? y + i : y;

    if (
      newX < 0 ||
      newY < 0 ||
      newX >= GRID_SIZE ||
      newY >= GRID_SIZE ||
      newGrid[newX][newY] !== null
    ) {
      isValid = false;
      break;
    }
  }

  if (!isValid) {
    setMessage("Invalid placement! Try again.");
    return grid;
  }

  // Place the ship.
  for (let i = 0; i < ship.size; i++) {
    const newX = direction === "Horizontal" ? x : x + i;
    const newY = direction === "Horizontal" ? y + i : y;
    newGrid[newX][newY] = ship.name;
  }

  return newGrid;
};

// Utility function to handle an attack on the grid.
export const handleAttack = (
  x,
  y,
  targetGrid,
  setTargetGrid,
  currentPlayer,
  setMessage,
  setScoreP1,
  setScoreP2,
  scoreP1,
  scoreP2,
  setCurrentPlayer
) => {
  const newGrid = [...targetGrid];
  const cell = newGrid[x][y];
  const nextPlayer = currentPlayer === 1 ? 2 : 1;

  if (cell === null) {
    newGrid[x][y] = "miss";
    setMessage(`Player ${currentPlayer}: Miss! Player ${nextPlayer} turn`);
  } else if (cell !== "hit" && cell !== "miss") {
    newGrid[x][y] = "hit";
    setMessage(`Player ${currentPlayer}: Hit! Player ${nextPlayer} turn`);
    if (currentPlayer === 1) {
      setScoreP1(scoreP1 + 1);
    } else {
      setScoreP2(scoreP2 + 1);
    }
  } else {
    setMessage("Invalid move! Cell already attacked.");
    return;
  }

  setTargetGrid(newGrid);
  setCurrentPlayer(nextPlayer);
};
