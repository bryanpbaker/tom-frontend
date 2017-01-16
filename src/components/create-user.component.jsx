import React, { Component } from 'react';
import firebase from 'firebase';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Enter your name',
      email: 'Enter your email',
      password: 'Enter a password'
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    console.log(firebase);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="sign-up-page small-12 columns">
        <h1>Create Your Account</h1>

        <div className="create-account-form row">
          <form className="medium-6 medium-offset-3 columns" onSubmit={this.handleFormSubmit}>
            <div className="row">
              <label htmlFor="name">Name:
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </label>
            </div>
            <div className="row">
              <label htmlFor="email">Email:
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </label>
            </div>
            <div className="row">
              <label htmlFor="password">Password:
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              </label>
            </div>
            <div className="row">
              <button
                type="submit"
                className="button">
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>

    );
  }
}
