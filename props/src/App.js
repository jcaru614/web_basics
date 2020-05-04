import React from 'react';
import Card from './components/Card' 
import contacts from './components/Contacts'

function createCard(contacts) {
    return (
    <Card 
    // key is expected by react and must be unique
    key={contacts.id}
    id = {contacts.id}
    name={contacts.name} 
    img={contacts.imgURL} 
    phone={contacts.phone} 
    email={contacts.email}
    />
    );
}

function App() {
    return (
        <div>
        <h1 className='heading'>My Contacts</h1>
        {contacts.map(createCard)}
        </div>
    )
}

export default App;