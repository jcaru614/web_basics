import React, { useState } from 'react';
import ProductList from './ProductList'
import axios from 'axios';
import Button from './Button'
import { navigate } from '@reach/router';

function ProductForm(props) {

    const [formState, setFormState] = useState({
        title: "",
        price: "",
        description: ""
    })

    const [errorState, setErrorState] = useState({
        title: "",
        price: "",
        description: ""
    })


    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/v1/create', formState)
            .then(response => {
                if (response.data.errors) {
                    setErrorState({
                        title: response.data.errors.title.message,
                        price: response.data.errors.price.message,
                        description: response.data.errors.description.message
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
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <label>Title</label>
                {errorState.title !== '' ? <p className='val_err'>{errorState.title}</p> : null}
                <input type="text" name="title" value={formState.title} onChange={onChangeHandler} />
                <label>Price</label>
                {errorState.price !== '' ? <p className='val_err'>{errorState.price}</p> : null}
                <input type="text" name="price" value={formState.price} onChange={onChangeHandler} />
                <label>Description</label>
                {errorState.description !== '' ? <p className='val_err'>{errorState.description}</p> : null}
                <input type="text" name="description" value={formState.description} onChange={onChangeHandler} />
                <Button input='submit'>Submit a product</Button>
            </form>
            <hr></hr>
            <ProductList />
        </div>
    )
}

export default ProductForm;