import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import EventCreator from '../EventCreator/EventCreator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Route path="/" component={Main} />
        <Route path="/my-competitions" component={Main} />
        <Route path="/" component={EventCreator} />
      </div>
    );
  }
}

export default App;
