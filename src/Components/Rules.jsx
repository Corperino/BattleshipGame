import React from 'react';
import "./Rules.css";

/*
Rule Component

This component is used to display the rules of the game, Battleships. 
*/
export const Rules = () => {
  return (
    <div className="rules">
      <h2>Game Rules</h2>
      <ol>
        <li>
          Each player has their own grid to place ships and track hits/misses.
        </li>
        <li>
          Players secretly place their ships on their grid, either horizontally
          or vertically.
        </li>
        <li>
          Ships cannot overlap, and they must fit entirely within the grid.
        </li>
        <li>
          Ship types include Carrier (5 spaces), Battleship (4 spaces), Cruiser
          (3 spaces), Submarine (3 spaces), and Destroyer (2 spaces).
        </li>
        <li>
          Players cannot change the placement of their ships after they have
          been placed
        </li>
        <li>Players take turns attacking the opponent's grid.</li>
        <li>If all spaces occupied by a ship are hit, the ship is 'sunk.'</li>
        <li>
          The game continues until one player sinks all the opponent’s ships.
        </li>
        <li>
          The first player to sink all of their opponent’s ships (17 points)
          wins the game.
        </li>
      </ol>
    </div>
  );
};
