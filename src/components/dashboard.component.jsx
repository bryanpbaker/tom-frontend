import React from 'react';
import { connect } from 'react-redux';

const Dashboard = (props) => {
  if (props.currentUser === null) {
    return (
      <div className="dashboard small-12 medium-9 columns">loading...</div>
    );
  }

  return (
    <div className="dashboard small-12 medium-9 columns">
      <h1>Welcome {props.currentUser.displayName}</h1>
      <h5>Your Email Address is: {props.currentUser.email}</h5>
    </div>
  );
};

export default Dashboard;
