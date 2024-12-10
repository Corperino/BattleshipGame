import "./statistics.css";

const Statistics = () => {
  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <p>Total player 1 wins: {localStorage.getItem("player1Wins")}</p>
      <p>Total player 2 wins: {localStorage.getItem("player2Wins")}</p>
    </div>
  );
};
export default Statistics;
