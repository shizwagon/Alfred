import React, { Component } from 'react';

import Main from './Components/Layout/Main';
import Header from './Components/Layout/Header';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Main />
      </div>
    );
  }
}
