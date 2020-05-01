import React from 'react';
import { Router } from '@reach/router';
import Pokemon from './components/FetchPokemon'
import PokemonAx from './components/AxiosPokemon'
import Starwars from './components/Starwars'



function App() {
  return (
    <div>
    <Router>
    <PokemonAx path="/" />
    <Starwars path="/star" />
    <Pokemon path="/fetch"/>
    </Router>
    </div>
  );
}

export default App;
