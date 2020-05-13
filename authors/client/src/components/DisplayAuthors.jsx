import React, { useState, useEffect } from 'react';
import { Link } from "@reach/router";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';


function DisplayAuthors() {
    const [authors, setAuthors] = useState([])
    const [deleteState, setDeleteState] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/readAll')
            .then(res => setAuthors([...res.data]))
            .catch(err => console.log("Error ", err))
    }, [deleteState])

    const onDeleteHandler = (e, item) => {
        console.log("this is the ", item._id)
        axios.delete(`http://localhost:8000/api/v1/deleteOne/${item._id}`)
        .then(res => setDeleteState(!deleteState))
        .catch(err => console.log("The error ", err))
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Quotes</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody >
                {authors.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.quote}</td>
                            <td>
                                <button className="matBtn"> <Link className="test" to={`/edit/${item._id}`}> <EditIcon/> </Link> </button>
                                <button className="matBtn" onClick={(e) => onDeleteHandler(e, item)} ><DeleteForeverIcon/></button>
                            </td>
                        </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayAuthors;