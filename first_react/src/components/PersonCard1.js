import React, { useState } from 'react';
const PersonCard1 = (props) => {
    const [count, setCount] = useState(props.age);
    // useState is keyword
    const handleClick = e => {
        e.preventDefault();
        setCount(count-1)
          if (count <= 1) {
            setCount("you turned into a baby")
        }
    }
  
return(
    <div>
        <h1>{props.lastName}, {props.firstName}</h1>
        <p>Age: {count}</p>
        <p>Hair Color: {props.hair}</p>
        <button onClick={handleClick}>Decrease Age</button>
    </div>
);
}
export default PersonCard1;
