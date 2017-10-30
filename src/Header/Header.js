import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeUser } from './headerActions';
import PropTypes from 'prop-types';
import firebase, { auth, provider } from '../firebase.js';

export class Header extends Component {
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const cleanedUser = this.cleanUserData(user);
        this.props.activeUser(cleanedUser);
      }
    });
  }

  cleanUserData(user) {
    return {
      userId: user.uid,
      displayName: user.displayName.split(' ')[0],
      email: user.email
    };
  }

  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => result = result.user)
      .then((userData) => {
        const cleanedUser = this.cleanUserData(userData);
        this.props.activeUser(cleanedUser);
      });
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.props.activeUser({});
      });
  }

  render () {
    return (
      <div className="Header">
        <h1>CompeteMe</h1>
        {this.props.liveUser ?
          <div className="headerPrompt">
            <h2>Ready to get your game on, {this.props.user.displayName}?</h2>
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

Header.propTypes = {
  activeUser: PropTypes.func,
  user: PropTypes.object,
  liveUser: PropTypes.bool
};

const mapStateToProps = (store) => ({
  liveUser: store.activeUser.userId ? true : false,
  user: store.activeUser
});

const mapDispatchToProps = (dispatch) => ({
  activeUser: ( user ) => { dispatch(activeUser(user)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
