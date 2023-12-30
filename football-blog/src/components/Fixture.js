import React from 'react';

const Fixture = ({ fixture }) => {
  const formattedDate = new Date(fixture.date).toLocaleString();

  return (
    <div>
      <h3>{fixture.team1} vs {fixture.team2}</h3>
      <p>Date: {formattedDate}</p>
    </div>
  );
};

export default Fixture;
