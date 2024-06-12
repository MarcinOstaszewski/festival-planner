import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FestivalsList from './components/FestivalsList/FestivalsList';
import Festival from './components/Festival/Festival';
import TopMenu from './components/TopMenu/TopMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Routes>
          <Route path="/" Component={FestivalsList} />
          <Route path="/festival/:id" Component={Festival} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
