import React, { useContext } from "react";
import MyContext from '../context/MyContext'

const Navbar = () => {
    const context = useContext(MyContext)
    return(
        <div className='navbar'>
            <h1>Hi {context.state}</h1>
        </div>
    )
}

export default Navbar;