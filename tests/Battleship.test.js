import React from "react";
import { render, screen } from "@testing-library/react";
import Battleship from "../src/Game/Battleship";

test("renders start button", () => {
  render(<Battleship />);
  const startButton = screen.getByText(/start/i, { selector: "button" });
  expect(startButton).toBeInTheDocument();
});

test("starts the game when start button is clicked", () => {
  render(<Battleship />);
  const startButton = screen.getByText(/start/i, { selector: "button" });
  startButton.onclick();
  expect(screen.getByText(/player 1/i, { selector: "p" })).toBeInTheDocument();
});
