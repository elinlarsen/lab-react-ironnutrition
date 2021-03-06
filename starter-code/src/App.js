import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import PizzaContainer from './components/PizzaContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Nutrition Lab</h1>
        </header>
            <PizzaContainer />
      </div>
    );
  }
}

export default App;
