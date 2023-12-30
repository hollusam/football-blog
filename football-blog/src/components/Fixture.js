import React from 'react';

const Fixture = ({ match }) => {
  const formattedDate = new Date(match.utcDate).toLocaleString();

  return (
    <div>
      <h3>{match.homeTeam.name} vs {match.awayTeam.name}</h3>
      <p>Date: {formattedDate}</p>
    </div>
  );
};

export default Fixture;
