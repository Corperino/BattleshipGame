import Game_Mode from "../Constants/Game_mode";

export const gameOver = ({
  winningPlayer,
  setMode,
  setMessage,
}) => {
  setMode(Game_Mode[3]);
  const key = winningPlayer === 1 ? "player1Wins" : "player2Wins";
  const wins = parseInt(localStorage.getItem(key) || "0", 10) + 1;
  localStorage.setItem(key, wins);
  setMessage(`Player ${winningPlayer} wins!`);
};