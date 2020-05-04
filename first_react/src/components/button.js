import React from 'react';

const Button = (props) => {
    return (
// Remember -- props becomes an object containing all of the keys and values passed in from the parent component
        <button onClick={props.click}>{props.text}</button>
    );
}

export default Button;
// we use export so we can import the function in another file. 
// aka recycle code