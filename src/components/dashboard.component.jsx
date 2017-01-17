import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: props.currentUser.email
    }
  }

  render() {
    return (
      <div className="dashboard small-12 medium-9 columns">
        <h1>Your dashboard</h1>
        <h5>Your Email Address is: {this.state.userEmail}</h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Dashboard);
