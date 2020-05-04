import React, { useState } from 'react';
import { Link } from '@reach/router';
// import StyledBox from './StyledBox';

const BoxGen = () => {
    const [state, setState] = useState({
        'boxes': [],
        'color': "",
        'width':""
    })

    const onChangeHandler = event => {
        event.preventDefault()
        console.log(state.color);
        setState({...state, [event.target.name]: event.target.value})
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(state.color);console.log(state.boxes);console.log(state.width);
        setState(
            {...state, 'boxes': [...state.boxes,{'color': state.color, 'width': state.width}]}
        )
    }

    return (
        <div>
        <Link to="/">Click here to see To-Do-List</Link>
            <form onSubmit={onSubmitHandler}>
                <h1>Create a box</h1>
                <p>Color</p>
                <input type='text' name='color' onChange={onChangeHandler} />
                <br/>
                <p>Size</p>
                <input type='text' name='width' onChange={onChangeHandler}/>
                <br/>
                <button type='submit'><h1>ADD</h1></button>
            </form>
            {state.boxes.map((val, i) => (
                    <div className='square' key={i} style={{background:val.color, width:val.width+'px', height:val.width+'px'}}></div>
                    
            ))}
        </div>
    );
}

export default BoxGen;