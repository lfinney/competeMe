import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeUser } from './headerActions';
import firebase, { auth, provider } from '../firebase.js';

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      user: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          displayName: user.displayName.split(' ')[0],
          user: user
        });
        this.props.activeUser(user);
      }
    });
  }

  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        this.setState({
          displayName: result.user.displayName.split(' ')[0],
          user: result.user
        });
        this.props.activeUser(result.user);
      });
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.setState({
          displayName: '',
          user: null
        });
      });
  }

  render () {
    return (
      <div className="Header">
        <h1>CompeteMe</h1>
        {this.state.user ?
          <div className="headerPrompt">
            <h2>Ready to get your game on, {this.state.displayName}?</h2>
            <p>Join or create a game below.</p>
            <button onClick={this.logout}>Log Out</button>
          </div>
          :
          <div className="headerPrompt">
            <h2>Sign-in using Google to join the competitions!</h2>
            <button onClick={this.login}>Log In</button>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  user: store.activeUser
});

const mapDispatchToProps = (dispatch) => ({
  activeUser: ( user ) => { dispatch(activeUser(user)); }
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);
