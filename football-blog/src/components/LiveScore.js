import React from 'react';

const LiveScore = ({ score }) => {
  return (
    <div>
      <h3>{score.team1} vs {score.team2}</h3>
      <p>Score: {score.score1} - {score.score2}</p>
      <p>Status: {score.status}</p>
    </div>
  );
};

export default LiveScore;
