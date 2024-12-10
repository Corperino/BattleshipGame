import createEmptyBoard from "./board";
import SHIPS from "../Constants/Ships";
import Game_Mode from "../Constants/Game_mode";

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