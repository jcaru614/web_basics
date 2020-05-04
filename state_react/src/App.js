import React from 'react';
import BoxGen from './components/BoxGen'
import Tabs from './components/Tabs'
// import MyContext from './context/MyContext'
// import Wrapper from './components/Wrapper'
// import FormWrapper from './components/FormWrapper'
// import Navbar from './components/Navbar'
import RegisterForm from './components/Registration'
import TodoList from './components/TodoList'
import { Router } from '@reach/router';

function App() {

  return (
    <div className="App">
      
     <Router>
      <TodoList path="/" />
      <RegisterForm path="/register"/>
      <BoxGen path="/box"/>
      <Tabs path="/tabs"  items={[
        {'label' : 'tab 1', 'content': 'This is tab 1'},
        {'label' : 'tab 2', 'content': 'This is tab 2'},
        {'label' : 'tab 3', 'content': 'This is tab 3'},
      ]}></Tabs>
      </Router>

     


      {/* <Wrapper>
      <Navbar/>
      <FormWrapper/>
      </Wrapper> */}

    </div>
  )
}

export default App;
