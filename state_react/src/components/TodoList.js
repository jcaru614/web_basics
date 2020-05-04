import React, { useState } from 'react';
import TodoItem from './ToDoItem'
import { Link } from '@reach/router';
function TodoList() {
        const [inputText, setInputText] = useState("");
        const [newTasks, setNewTasks] = useState([]);

        const handleInput =(event) => {
                setInputText(event.target.value)
        }
        
        const addItem = () => {
        setNewTasks([...newTasks, inputText]);
        // set input text to empty string after it handles the click
        setInputText('')
    }

    function deleteItem(id) {
        setNewTasks(prevTasks => {
        return prevTasks.filter((listItem, index) => {
            return index !== id;
        })
        })
    }

    return (

      
        <div className="container">

        <Link to="/register">Click here to see Registration</Link>
        <br/>
        <Link to="/box">Click here to see BoxGen</Link>
        <br/>
        <Link to="/tabs">Click here to see Tabs</Link>

      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} name="task" value={inputText} type="text" />
        <button onClick={addItem} ><span>Add</span></button>
      </div>
      <div>
        <ul>
            {newTasks.map((listItem, index) => <TodoItem key={index} id={index} text={listItem} onChecked={deleteItem}/> )}

            {/* or with out component tree */}
            {/* {newTasks.map((listItem, index) => <li key={index}>{listItem} </li> )} */}
        </ul>
      </div>
    </div>
    )
}

export default TodoList;

