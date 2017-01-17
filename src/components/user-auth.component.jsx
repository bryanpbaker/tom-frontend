import React, { Component } from 'react';
import fb from '../config/firebase.config';

export default class UserAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: 'user@email.com',
      userPassword: 'password'
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.authenticateUser = this.authenticateUser.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ userEmail: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ userPassword: event.target.value });
  }

  authenticateUser(email, password) {
    const auth = fb.auth();

    auth.signInWithEmailAndPassword(email, password).then(res => console.log(res));
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
            <div className="row">
              <button className="button">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
