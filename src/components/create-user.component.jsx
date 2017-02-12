import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createUser } from '../actions/index';

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: ''
    };

    this.handleDisplayNameChange = this.handleDisplayNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser.uid !== undefined) {
      browserHistory.push('/');
    }
  }

  handleDisplayNameChange(event) {
    this.setState({ displayName: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleFormSubmit(email, password, displayName) {
    this.props.createUser(email, password, displayName);
  }

  handleFocus(event) {
    event.target.select();
  }

  render() {
    return (
      <div className="sign-up-page small-12 columns">
        <h1>Create Your Account</h1>

        <div className="create-account-form row">
          <form
            className="medium-6 medium-offset-3 columns"
            onSubmit={(event) => {
                event.preventDefault();
                this.handleFormSubmit(this.state.email, this.state.password, this.state.displayName);
              }
            }
          >
            <div className="row">
              <label htmlFor="displayName">Display Name:
                <input
                  type="text"
                  value={this.state.displayName}
                  placeholder="Enter a display name"
                  onChange={this.handleDisplayNameChange}
                  onFocus={this.handleFocus}
                />
              </label>
            </div>
            <div className="row">
              <label htmlFor="email">Email:
                <input
                  type="email"
                  value={this.state.email}
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
                  value={this.state.password}
                  placeholder="Enter your password"
                  onChange={this.handlePasswordChange}
                  onFocus={this.handleFocus}
                />
              </label>
            </div>
            <div className="row">
              <button
                type="submit"
                className="button"
              >
                Create User
              </button>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="medium-6 medium-offset-3 columns sign-up-link">
            <Link to={'/login'}>Already have an account? Log in.</Link>
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
  return bindActionCreators({ createUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
