const Score = ({ score }) => {
  return (
    <div className="score-container">
      SCORE: <span className="score-container--score">{score}</span>
    </div>
  );
};

export default Score;
