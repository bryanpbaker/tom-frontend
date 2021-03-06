import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';

import fb from '../config/firebase.config';
import { authenticateUser } from '../actions/index';

class UserAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
      error: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.authenticateUser = this.authenticateUser.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser.uid !== undefined) {
      browserHistory.push('/');
    }
  }

  handleEmailChange(event) {
    this.setState({ userEmail: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ userPassword: event.target.value });
  }

  authenticateUser(email, password) {
    this.props.authenticateUser(email, password);
  }

  handleFocus(event) {
    event.target.select();
  }

  render() {
    return (
      <div className="login-page small-12 columns">
        <h1>Tom App</h1>

        <div className="login-form row">
          <form
            className="medium-6 medium-offset-3 columns"
            onSubmit={(event) => {
              event.preventDefault();
              this.authenticateUser(this.state.userEmail, this.state.userPassword);
            }
          }
          >
            <div className="row">
              <span className="error">{this.state.error}</span>
              <label htmlFor="email">Email:
                <input
                  type="email"
                  value={this.state.userEmail}
                  placeholder="Enter your email address"
                  onChange={this.handleEmailChange}
                  onFocus={this.handleFocus}
                />
              </label>
            </div>
            <div className="row">
              <label htmlFor="password">Password:
                <input
                  type="password"
                  value={this.state.userPassword}
                  placeholder="Enter your password"
                  onChange={this.handlePasswordChange}
                  onFocus={this.handleFocus}
                />
              </label>
            </div>
            <div className="row">
              <button className="button">Sign In</button>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="medium-6 medium-offset-3 columns sign-up-link">
            <Link to={'/sign-up'}>Don't have an account? Sign up for free!</Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ authenticateUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
