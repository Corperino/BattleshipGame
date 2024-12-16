import React from "react";
import "./Grid.css";
/*
Grid Component

This component renders a game grid and provides interactivity for cell clicks.
There are two props:
  grid: A 2D array representing the game state for each cell (for example "hit" and "miss").
  onCellClick: A callback function triggered when a cell is clicked, passing its row and column
*/
const Grid = ({ grid, onCellClick }) => {
  return (
    <div className="board">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, colIndex) => {
            let cellClass = "";
            if (cell === "hit") {
              cellClass = "Hit";
            } else if (cell === "miss") {
              cellClass = "Miss";
            }

            return (
              <div
                key={colIndex}
                className={`cell ${cellClass}`}
                onClick={() =>
                  onCellClick && typeof onCellClick === "function"
                    ? onCellClick(rowIndex, colIndex)
                    : null
                }
              >
                {cell === "hit" && "X"}
                {cell === "miss" && "O"}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
