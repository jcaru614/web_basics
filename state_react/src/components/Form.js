import React, { useState, useContext } from "react";
import MyContext from "../context/MyContext";

const Form = () => {
    const context = useContext(MyContext)
    const [formState, setFormState] = useState('');

    const onChangeHandler = event => {
        setFormState(event.target.value)
    }

    const onSubmitHanlder = event => {
        event.preventDefault();
        context.setState(formState);
    }


    return(
        <div className='form' >
            <form onSubmit={onSubmitHanlder}>
                <label>Your Name: </label>
                <input onChange={onChangeHandler} name='input' type='text'/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Form;