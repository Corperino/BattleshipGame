import { placeShip } from "../src/utils/gameLogic";

test("places a ship correctly within the grid", () => {
  const grid = Array(10)
    .fill()
    .map(() => Array(10).fill(null));
  const ship = { name: "Destroyer", size: 2 };
  const result = placeShip(grid, 0, 0, ship, "Horizontal", jest.fn());
  expect(result[0][0]).toBe("Destroyer");
  expect(result[0][1]).toBe("Destroyer");
});

test("prevents overlapping ships", () => {
  const grid = Array(10)
    .fill()
    .map(() => Array(10).fill(null));
  grid[0][0] = "Battleship";
  const ship = { name: "Destroyer", size: 2 };
  const mockSetMessage = jest.fn();
  const result = placeShip(grid, 0, 0, ship, "Horizontal", mockSetMessage);
  expect(result).toEqual(grid);
  expect(mockSetMessage).toHaveBeenCalledWith("Invalid placement! Try again.");
});
