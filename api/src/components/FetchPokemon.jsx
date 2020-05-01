import React, { useState } from 'react';
import { Link } from '@reach/router';

function Pokemon() {
    const [pokemon, setPokemon] = useState([])
    
    function getPokemon() {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then(response => {
            return response.json();
        }).then(response => {
            // console.log(response);
            setPokemon([ ...response.results])
        }).catch(err => {
            console.log(err);
        });
    }
    console.log("this is the pokemon ", pokemon);

    return (
        <div>
            
            <h1>Gotta catch em all (Fetch API)</h1>
            <button onClick={getPokemon} >Fetch Pokemon</button>
            <br/>
            <Link to="/">Go to axios pokemon api</Link>
            <ul>
                {pokemon.map((el, i) =>
                    <li key={i}>{el.name}</li>
                )}

            </ul>
            
        </div>
    )
}

export default Pokemon;