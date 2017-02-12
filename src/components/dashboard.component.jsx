import React from 'react';
import { connect } from 'react-redux';

const Dashboard = (props) => {
  if (props.currentUser.email === null) {
    return (
      <div className="dashboard small-12 medium-9 columns">loading...</div>
    );
  }

  return (
    <div className="dashboard small-12 medium-9 columns">
      <h1>Your dashboard</h1>
      <h5>Your Email Address is: {props.currentUser.email}</h5>
    </div>
  );
};

export default Dashboard;
