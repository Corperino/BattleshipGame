/*
PlaceShip function
Places a ship on the grid if the placement is valid.
 
This function checks whether a ship can be placed at the specified coordinates
on the grid without exceeding boundaries or overlapping with other ships. If
the placement is valid, the ship is placed on the grid. Otherwise, an error
 message is displayed.
*/

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

  for (let i = 0; i < ship.size; i++) {
    const newX = direction === "Horizontal" ? x : x + i;
    const newY = direction === "Horizontal" ? y + i : y;
    newGrid[newX][newY] = ship.name;
  }

  return newGrid;
};
/*
handleAttack function
Handles an attack on the target grid during the game.

This function processes the player's attack at the specified grid coordinates.
It updates the grid, determines whether the attack is a hit or miss, and adjusts
the game state accordingly. If the attack is valid, the function updates the grid
to reflect the result and switches the turn to the next player. It also increments
the score for the attacking player in case of a hit.
*/
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
