import React from 'react';
import ProductForm from './components/ProductForm';
import Details from './components/Details'
import { Router } from '@reach/router'

function App() {
  return (
    <div>
    <Router>
    <ProductForm path="/"/>
    <Details path="/details/:id" />
    </Router>
    </div>
  );
}

export default App;
