import React from 'react';
import { Router } from '@reach/router'
import AddPlayer from './components/AddPlayer';
import Home from './components/Home'

function App() {
  return (
    <div>
      <Router>
        <Home path="/"/>
        <AddPlayer path="/add" />
      </Router>

    </div>
  );
}

export default App;
