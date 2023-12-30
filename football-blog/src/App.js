import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/team" element={<Team />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
