import { placeShip, handleAttack } from "./gameLogic";
import SHIPS from "../Constants/Ships";
import Game_Mode from "../Constants/Game_mode";
/*
handleCellClick Function

This function handles the logic for the players interaction with the grid during
"setup" mode and the "combat" mode.
*/
export const handleCellClick = ({
  x,
  y,
  mode,
  currentPlayer,
  setGridPlayer1,
  setGridPlayer2,
  gridPlayer1,
  gridPlayer2,
  shipsToPlace,
  setShipsToPlace,
  placementDirection,
  setMessage,
  setMode,
  setCurrentPlayer,
  setScoreP1,
  setScoreP2,
  scoreP1,
  scoreP2,
}) => {
  if (mode === Game_Mode[1]) {
    if (shipsToPlace.length > 0) {
      const shipToPlace = shipsToPlace[0];
      const updatedGrid = placeShip(
        currentPlayer === 1 ? gridPlayer1 : gridPlayer2,
        x,
        y,
        shipToPlace,
        placementDirection,
        setMessage
      );

      if (currentPlayer === 1) {
        setGridPlayer1(updatedGrid);
      } else {
        setGridPlayer2(updatedGrid);
      }

      if (updatedGrid !== (currentPlayer === 1 ? gridPlayer1 : gridPlayer2)) {
        const newShipsToPlace = shipsToPlace.slice(1);
        setShipsToPlace(newShipsToPlace);

        if (newShipsToPlace.length === 0) {
          if (currentPlayer === 1) {
            setMessage("Player 2 turn: Place Carrier");
            setCurrentPlayer(2);
            setShipsToPlace(SHIPS);
          } else {
            setMessage("All ships placed! Start attacking! Player 1 turn");
            setMode(Game_Mode[2]);
            setCurrentPlayer(1);
          }
        } else {
          setMessage(
            `Player ${currentPlayer} turn: Place ${newShipsToPlace[0].name}`
          );
        }
      }
    }
  } else {
    const targetGrid = currentPlayer === 1 ? gridPlayer2 : gridPlayer1;
    const setTargetGrid = currentPlayer === 1 ? setGridPlayer2 : setGridPlayer1;

    handleAttack(
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
    );
  }
};
