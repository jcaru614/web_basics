import React, { useState, useEffect } from 'react'
import Nav from './Navbar'
import { Link } from "@reach/router";
import Axios from 'axios'
import { navigate } from '@reach/router'

const Edit = (props) => {
    const [formState, setFormState] = useState({
        name: '',
        quote: ''
    })

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/v1/readOne/${props.id}`)
            .then(res => setFormState({ ...res.data }))
            .catch(err => console.log("error ", err))
    }, [])
    console.log("formstate", formState);
    
    const [errorState, setErrorState] = useState({
        name: '',
        quote: ''
    })

    const onChangeHandler = (e) => {
        setFormState({
            ...formState, [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/v1/updateOne/${formState._id}`, formState)
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
            <Link className='link' to='/'>Dashboard</Link>
            <h2>Author Info</h2>
            <form onSubmit={onSubmitHandler}>
                <label>Name:</label>
                {errorState.name !== '' ? <p className='val_err'>{errorState.name}</p> : null}
                <input className="formLabel" type="text" name="name" value={formState.name} onChange={onChangeHandler} />
                <label>Qoute:</label>
                {errorState.quote !== '' ? <p className='val_err'>{errorState.quote}</p> : null}
                <input className="formLabel" type="text" name="quote" value={formState.quote} onChange={onChangeHandler} />
                <button className="formButton" type="submit" >Update</button>
            </form>
        </div>
    )
}

export default Edit;