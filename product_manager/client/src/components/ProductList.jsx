import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import Button from './Button'


function ProductList() {
    const [products, setProducts] = useState([])
    const [deleteState, setDeleteState] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/readAll')
            .then(res => setProducts([...res.data]))
            .catch(err => console.log("Error ", err))
    }, [products])

    function onDeleteHandler(e, item) {
        console.log("this is item ",item)
        axios.delete(`http://localhost:8000/api/v1/deleteOne/${item._id}`)
            .then(res => setDeleteState(!deleteState))
            .catch(err => console.log("error ", err))
    }

    return (
        <div>
            <h1>All Products</h1>
            {products.map((item, index) => (
                <div key={index}>
                <h2>{item.title}</h2>
                    <h2> <button><Link to={`/details/${item._id}`}>Edit/view</Link></button>
                    <button onClick={(e) => onDeleteHandler(e, item)}
                    type="submit">Delete Product</button>
                    </h2>

                </div>
            ))}
        </div>
    )
}

export default ProductList;