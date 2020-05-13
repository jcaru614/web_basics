import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios'
import Button from './Button'

function Details(props) {
    console.log("this is the details ", props)
    const [formState, setFormState] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/readOne/${formState.id}`)
            .then(res => setFormState({ ...res.data }))
            .catch(err => console.log("error ", err))
    }, [])

    const [errorState, setErrorState] = useState({
        title: '',
        price: '',
        description: ''
    })

    function onChangeHandler(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/v1/updatedOne/${formState._id}`, formState)
            .then(response => {
                if (response.data.errors) {
                    setErrorState({
                        title: response.data.errors.title ? response.data.errors.title.message : '',
                        price: response.data.errors.price ? response.data.errors.price.message : '',
                        description: response.data.errors.description ? response.data.errors.description.message : ''
                    })
                } else {
                    console.log('success');
                    navigate('/')
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

return (
    <div>
        <h1>Product Info</h1>
        <form onSubmit={onSubmitHandler}>
            <h2>Title: {formState.title}</h2>
            {errorState.title !== '' ? <p className='val_err'>{errorState.title}</p> : null}
            <input type="text" name="title" value={formState.title} onChange={onChangeHandler} />
            <p>Price: {formState.price}</p>
            {errorState.price !== '' ? <p className='val_err'>{errorState.price}</p> : null}
            <input type="text" name="price" value={formState.price} onChange={onChangeHandler} />
            <p>description: {formState.description}</p>
            {errorState.description !== '' ? <p className='val_err'>{errorState.description}</p> : null}
            <input type="text" name="description" value={formState.description} onChange={onChangeHandler} />
            <Button type="submit">Update Product</Button>
        </form>

        <p><Link to="/">Go Back!</Link></p>
    </div>
)
}

export default Details;
