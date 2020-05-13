import React, { useState } from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios';

const AddPlayer = () => {
    const [formState, setFormState] = useState({
        name: '',
        position: ''
    })

    const [errorState, setErrorState] = useState([])

    const onChangeHandler = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
        console.log(formState);
    }
    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/v1/create', formState)
        .then(res => {
            if (res.data.errors) {
                setErrorState({
                    name: res.data.errors.name ? res.data.errors.name.message : '',
                    position: res.data.errors.position ? res.data.errors.position.message : ''
                })

            } else {
                console.log("created object");
                navigate('/')
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
        <Link to="/">Home</Link>
        <h1>Add Player</h1>
            <form onSubmit = {onSubmitHandler}>
            <p>Player Name:</p>
            <input type="text" name="name" value={formState.name} onChange={onChangeHandler}/>
            {errorState.name !== '' ? <p className='val_err'>{errorState.name}</p> : null}
            <p>Prefered Position:</p>
            <input type="text" name="position" value={formState.position} onChange={onChangeHandler}/>
            {errorState.position !== '' ? <p className='val_err'>{errorState.position}</p> : null}
            <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddPlayer;
