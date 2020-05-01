import React, { useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DisplaySW from './DisplaySW';


function Starwars() {
    const [starwars, setStarwars] = useState([])
    const [formState, setFormState] = useState({
        category: "people",
        id: null
    })
    function getStarwars(e) {
        if (formState.category === 'starships' || formState.category === 'vehicles') {
            axios.get('https://swapi.co/api/' + formState.category)
                .then(response => {
                    console.log('this is the response as array ',response)
                    setStarwars([...response.data.results])
                })
                .catch(err => console.log("these are not the droids youre looking for ",err))
            e.preventDefault()

        } else {
            axios.get('https://swapi.co/api/' + formState.category + '/' + formState.id)
                .then(response => {
                    console.log("this is response as object" ,response)
                    setStarwars({ ...response.data})
                })
                .catch(err => console.log("these are not the droids youre looking for ",err))
            e.preventDefault()
        }


    }
    function ChangeStarwars(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    console.log("starwars results are: ", starwars);

    return (
        <div>
            <Link to="/">Go to axios pokemon api</Link>
            <h1>Search for Starwars characters and more!</h1>
            <form onSubmit={getStarwars}>
                <select name="category" onChange={ChangeStarwars}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="films">Films</option>
                    <option value="species">Species</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="starships">Starships</option>
                </select>
                <input onChange={ChangeStarwars} name='id' type="text" placeholder="ID" />
                <button type='submit'>Search</button>
                {/* <p >{starwars.name}</p> */}
                <DisplaySW category={formState.category} starwars={starwars} />
            </form>
        </div>
    )
}

export default Starwars