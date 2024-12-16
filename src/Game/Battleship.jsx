import React, { useState, useEffect } from "react";
import "./Battleship.css";
import SHIPS from "../Constants/Ships";
import GAME_MODE from "../Constants/Game_mode";
import Grid from "../Components/Grid";
import { Rules } from "../Components/Rules";
import Statistics from "../Components/statistics";
import createEmptyBoard from "../utils/board";
import { handleCellClick } from "../utils/handleCellClick";
import { startGame } from "../utils/startGame";
import { gameOver } from "../utils/gameOver";
/**
Battleship Game Component

This component represents the main logic and UI for the Battleship game. 
It manages game state, handles player interactions, and renders the 
 game grid, statistics, and rules.
 */
function Battleship() {
  const [gridPlayer1, setGridPlayer1] = useState(createEmptyBoard);
  const [gridPlayer2, setGridPlayer2] = useState(createEmptyBoard);
  const [scoreP1, setScoreP1] = useState(0);
  const [scoreP2, setScoreP2] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [message, setMessage] = useState("Start the game");
  const [shipsToPlace, setShipsToPlace] = useState(SHIPS);
  const [placementDirection, setPlacementDirection] = useState("Horizontal");
  const [mode, setMode] = useState(GAME_MODE[0]);

  useEffect(() => {
    if (scoreP1 === 17) {
      gameOver({ winningPlayer: 1, setMode, setMessage });
    }
    if (scoreP2 === 17) {
      gameOver({ winningPlayer: 2, setMode, setMessage });
    }
  }, [scoreP1, scoreP2]);

  const onStartGame = () => {
    startGame({
      setMode,
      setMessage,
      setGridPlayer1,
      setGridPlayer2,
      setShipsToPlace,
      setScoreP1,
      setScoreP2,
      setCurrentPlayer,
    });
  };

  const onCellClick = (x, y) => {
    handleCellClick({
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
    });
  };

  const toggleDirection = () => {
    setPlacementDirection((prev) =>
      prev === "Horizontal" ? "Vertical" : "Horizontal"
    );
  };

  return (
    <div className="Battleship">
      <h1>Battleship</h1>
      <p>{message}</p>
      {mode === GAME_MODE[0] && <button onClick={onStartGame}>Start</button>}
      {mode === GAME_MODE[3] && <button onClick={onStartGame}>Restart</button>}

      <Statistics />
      <div className="main-container">
        {mode !== GAME_MODE[0] && (
          <div className="grid-container">
            <div>
              <h2>Player 1</h2>
              <h3>Score: {scoreP1}</h3>
              <Grid
                grid={gridPlayer1}
                onCellClick={
                  mode === GAME_MODE[1]
                    ? currentPlayer === 1
                      ? onCellClick
                      : null
                    : currentPlayer === 2
                    ? onCellClick
                    : null
                }
              />
            </div>
            <div>
              <h2>Player 2</h2>
              <h3>Score: {scoreP2}</h3>
              <Grid
                grid={gridPlayer2}
                onCellClick={
                  mode === GAME_MODE[1]
                    ? currentPlayer === 2
                      ? onCellClick
                      : null
                    : currentPlayer === 1
                    ? onCellClick
                    : null
                }
              />
            </div>
            {mode === GAME_MODE[1] && (
              <button className="direction_toggle" onClick={toggleDirection}>
                Toggle Direction: {placementDirection}
              </button>
            )}
          </div>
        )}
        <Rules />
      </div>
    </div>
  );
}

export default Battleship;
