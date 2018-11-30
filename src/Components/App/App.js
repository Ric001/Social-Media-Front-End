import React, { Component } from 'react';
import Header from '../Header/header'
import Main from '../Main/main'
import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
   
    );
  }
}

export default App;
