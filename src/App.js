import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Week from "./Components/WeekComponents/Week";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Week />
      </div>
    );
  }
}



export default App;
