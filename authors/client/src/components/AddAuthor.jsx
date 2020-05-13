import React, { useState } from 'react';
import { Link, navigate} from "@reach/router";
import axios from 'axios';
import Nav from './Navbar'

function AddAuthor() {
    const [formState, setFormState] = useState({
        name: "",
        quote: ""
    })

    const [errorState, setErrorState] = useState([])

    const onChangeHandler = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/v1/create', formState)
        .then(res => {
            if (res.data.errors) {
                setErrorState({
                    name: res.data.errors.name ? res.data.errors.name.message : '',
                    quote: res.data.errors.quote ? res.data.errors.quote.message : ''
                })

            } else {
                console.log("its been updated");
                navigate('/')
            }
        })
        .catch(err => {
            console.log(err);
        })
    }


    return (
        <div>
            <Nav />
            <p className="link"><Link to="/">Home</Link></p>
            <h1>Add a new Author:</h1>
            <form onSubmit={onSubmitHandler}>
                <input className="formLabel" type="text" name="name" value={formState.name} onChange={onChangeHandler} placeholder="Name:" />
                {errorState.name !== '' ? <p className='val_err'>{errorState.name}</p> : null}
                <input className="formLabel" type="text" name="quote" value={formState.quote} onChange={onChangeHandler} placeholder="Quote" />
                {errorState.quote !== '' ? <p className='val_err'>{errorState.quote}</p> : null}
                <button className="formButton" type="submit">Add!</button>
            </form>
        </div>
    )
}

export default AddAuthor;