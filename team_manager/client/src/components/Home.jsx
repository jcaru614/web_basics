import React, { useState, useEffect } from 'react';
import { Link } from "@reach/router";
import axios from 'axios';

const Home = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/readAll')
        .then(res => setPlayers([...res.data]))
        .catch(err => console.log(err))
    })

    const [deleteState, setDeleteState] = useState(false)

    const onDeleteHandler = (el) => {
        axios.delete(`http://localhost:8000/api/v1/deleteOne/${el._id}`)
        .then(() => setDeleteState(!deleteState))
        .catch(err => console.log("The error ", err))
    }

    return (
        <div>
        <Link to="/add">Add Player</Link>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((el, i) => (
                        <tr key={i}>
                            <td>{el.name}</td>
                            <td>{el.position}</td>
                            <td><button onClick={() => onDeleteHandler(el)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home;
