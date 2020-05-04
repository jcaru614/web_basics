import React, { useState } from 'react';
import { Link } from '@reach/router';

const Tabs = (props) => {
    const [state, setState] = useState({
        'output': props.items[0].content
        // array of dictionaries. start at index 0 of the 'content'
    })
    const onClickHandler = event => {
        console.log(state);
        // on click we change state so the outout from the props.items[with the event where we target the id of its content]
        setState(
            { ...state, 'output': props.items[event.target.id].content }
        )
    }

    return (
        <div className="tab-container">
        <Link to="/">Click here to see To-Do-List</Link>
        <br/>
            {props.items.map((item, i) =>
                // map iterates through each item in items and produces a button that corresponds to the label with the id 
                (<button style={{width:'150px', height:'50px', margin:'5px', backgroundColor:'gray'}}  className='tab' onClick={onClickHandler} name={item.label} id={i} key={i}>{item.label}</button>)
            )}
            <br />
            <h1 className='output'>{state.output}</h1>
            {/* this shows teh state depending on its state from which button you */}
        </div>
    )
}

export default Tabs;