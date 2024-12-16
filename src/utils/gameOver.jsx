import Game_Mode from "../Constants/Game_mode";
/*
GameOver Function

This function handles the logic for the end of the game. Updating the game mode and displaying
the messages declaring the winner. 
It also adds the win to the browsers local storage.
*/
export const gameOver = ({ winningPlayer, setMode, setMessage }) => {
  setMode(Game_Mode[3]);
  const key = winningPlayer === 1 ? "player1Wins" : "player2Wins";
  const wins = parseInt(localStorage.getItem(key) || "0", 10) + 1;
  localStorage.setItem(key, wins);
  setMessage(`Player ${winningPlayer} wins!`);
};
