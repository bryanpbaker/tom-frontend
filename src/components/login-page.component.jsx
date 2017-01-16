import React, { Component } from 'react';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: 'user@email.com',
      userPassword: 'password'
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.authenticateUser = this.authenticateUser.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ userEmail: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ userPassword: event.target.value });
  }

  authenticateUser(email, password) {
    console.log(email, password);
  }

  render() {
    return (
      <div className="login-page small-12 columns">
        <h1>Tom App</h1>

        <div className="login-form row">
          <form className="medium-6 medium-offset-3 columns">
            <div className="row">
              <label htmlFor="email">Email:
                <input
                  type="email"
                  value={this.state.userEmail}
                  onChange={this.handleEmailChange}
                />
              </label>
            </div>
            <div className="row">
              <label htmlFor="password">Password:
                <input
                  type="password"
                  value={this.state.userPassword}
                  onChange={this.handlePasswordChange}
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
