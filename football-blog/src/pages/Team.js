import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <div>
      <div className="header">
        <h1>Football Team Page</h1>
        <Link to="/">Back to Home</Link>
      </div>

      <div className="container">
        {/* Add team-specific content here */}
      </div>
    </div>
  );
};

export default Team;
