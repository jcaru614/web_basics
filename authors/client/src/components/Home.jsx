import React from 'react';
import { Link } from "@reach/router";
import Nav from './Navbar'
import DisplayAuthors from './DisplayAuthors';

function Home() {
    return(
        <div>
        <Nav />
        <p className="link"><Link to="/addAuthor">Add an author</Link></p>
        <h2>We have qoutes by:</h2>
        <DisplayAuthors />
        </div>
    )
}

export default Home;