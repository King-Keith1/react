import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';

function SizesExample() {
  return ( 
    <div>
      <Button variant="dark" size="lg">Large button 🅱️ℹ️‼️</Button>
      <Button variant="light" size="sm">Small button 🤏🏽</Button>
    </div>
  );
}

class App extends Component {
  render() {
    const isValid = true;
    return (
      <div>
        <Products />
        <Button variant="danger" disabled={!isValid}>Default</Button>

        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />

        {/* Optional: include your sizes example here */}
        <SizesExample />
      </div>
    );
  }
}

export default App;
