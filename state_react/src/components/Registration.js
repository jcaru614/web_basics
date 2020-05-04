import React, { useState } from 'react';
import { Link } from '@reach/router';
// note: state is like session. something you dont always have

const RegisterForm = () => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
  
const onChangeHandler = event => {
    console.log(formState);
    setFormState({
        ...formState,
        // bassically saying for every item in formState 
        [event.target.name]: event.target.value
        // target.name comes from the name of the input, value is what is being inputed
    })

}

return(
    <div >
    <Link to="/">Click here to see To-Do-List</Link>
        <h1>registration form</h1>
        <form>
            <label>First Name</label>
            <input type="text" name="firstName" onChange={onChangeHandler}/>
            {formState.firstName.length ==1 ? <p>field must be at least 2 characters</p>: <p></p>}
            <br/>        
            <label>Last Name</label>
            <input type="text" name="lastName" onChange={onChangeHandler}/>
            {formState.lastName.length ==1 ? <p>field must be at least 2 characters</p>:<p></p>}
            <br/>        
            <label>Email</label>
            <input type="email" name="email" onChange={onChangeHandler}/>
            {formState.email.length > 1 && formState.email.length < 5 ? <p>field must be at least 5 characters</p>:<p></p>}
            <br/>        
            <label>Password</label>
            <input type="password" name="password" onChange={onChangeHandler}/>
            {formState.password.length == 1 ? <p>field must be at least 2 characters</p>:<p></p>}
            <br/>        
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
            {formState.confirmPassword.length != formState.password.length ? <p>Passwords dont match</p>:<p></p>}
            <br/>   
        </form>
    <div className='ptag'>
        <p onChangeHandler={onChangeHandler}>First:{formState.firstName}</p>
        <p onChangeHandler={onChangeHandler}>Last:{formState.lastName}</p>
        <p onChangeHandler={onChangeHandler}>email:{formState.email}</p>
        <p onChangeHandler={onChangeHandler}>password:{formState.password}</p>
        <p onChangeHandler={onChangeHandler}>Confirm:{formState.confirmPassword}</p>
    </div>
    </div>
);
}

export default RegisterForm;