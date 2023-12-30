import React from 'react';

const LiveScore = ({ match }) => {
  return (
    <div>
      <h3>{match.homeTeam.name} vs {match.awayTeam.name}</h3>
      <p>Score: {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</p>
      <p>Status: {match.status}</p>
    </div>
  );
};

export default LiveScore;
