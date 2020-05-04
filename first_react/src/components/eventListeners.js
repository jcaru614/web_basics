import React from 'react';
import Button from './button';
// button is not in a different folder so you dont write/components just
// ./buttons

// here we are importing from Button where we already exported

const Banana = () => {
    // We can define the click event handler function here so that the event is fired in this component 
    // instead of the child component.
    const clickHandler = () => console.log("Clicked");
    // The text for the button will also come from this component
    const buttonOneText = "I am the first button being clicked";
    const buttonTwoText = "And I am the second button being clicked";
 
    return (
        <div>
            {/* // This is where we are sending all the "props" down. */}
            <Button text={buttonOneText} click={clickHandler} />
            <Button text={buttonTwoText} click={clickHandler} />
        </div>
    );
}

export default Banana;
