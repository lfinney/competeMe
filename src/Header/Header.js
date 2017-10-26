import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      user: null
    };
  }

  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        this.setState({
          displayName: result.user.displayName.split(' ')[0],
          user: result.user
        });
      });
  }

  logout = () => {

  }

  render () {
    return (
      <div className="Header">
        <h1>CompeteMe</h1>
        {/* <input type="text" placeholder="Search" /> */}
        {/* <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" /> */}
        {this.state.user ?
          <button onClick={this.logout}>Log Out</button>
          :
          <button onClick={this.login}>Log In</button>
        }
      </div>
    );
  }
}
