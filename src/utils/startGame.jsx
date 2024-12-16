import createEmptyBoard from "./board";
import SHIPS from "../Constants/Ships";
import Game_Mode from "../Constants/Game_mode";
/*
StartGame Function

This function initializes the game state and prepares it for the "Setup"-mode.
It resets the necessary parameters, the message and creates new empty boards for each players.
*/
export const startGame = ({
  setMode,
  setMessage,
  setGridPlayer1,
  setGridPlayer2,
  setShipsToPlace,
  setScoreP1,
  setScoreP2,
  setCurrentPlayer,
}) => {
  setMode(Game_Mode[1]);
  setMessage("Player 1 turn: Place Carrier");
  setGridPlayer1(createEmptyBoard());
  setGridPlayer2(createEmptyBoard());
  setShipsToPlace(SHIPS);
  setScoreP1(0);
  setScoreP2(0);
  setCurrentPlayer(1);
};
