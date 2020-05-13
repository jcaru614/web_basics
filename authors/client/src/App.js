import React from 'react';
import { Router } from '@reach/router'
import Home from './components/Home';
import AddAuthor from './components/AddAuthor';
import Edit from './components/Edit'

function App() {
  return (
    <div >
      <Router>
        <Home path="/" />
        <AddAuthor path="/addAuthor" />
        <Edit path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
                                                 