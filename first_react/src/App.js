import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import NewComponent from './components/NewComponent';
import PersonCard1 from './components/PersonCard1';
// or use PersonCard for the one with the button
import Banana from './components/eventListeners';

function App() {
  return(
    <div className="App">
      {/* these are react elements */}
      <HelloWorld/>
      <NewComponent someText = {'this is my prop'}/>
      <PersonCard1 firstName = 'Jane' lastName='Doe' age={24} hair='Black'/> 
      <PersonCard1 firstName = 'John' lastName='Smith' age={35} hair='Gray'/> 
      <PersonCard1 firstName = 'Tinky' lastName='Cat' age={16} hair='Brown'/> 
      <PersonCard1 firstName = 'Maria' lastName='Caruana' age={44} hair='Brown'/> 
      <Banana/>
    </div>
  )
}

export default App;

