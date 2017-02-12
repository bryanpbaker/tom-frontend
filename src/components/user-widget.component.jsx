import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class UserWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: this.props.currentUser || {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currentUser: nextProps.currentUser });
  }

  handleClick(event) {
    const dropdownClasses = document.getElementById('userDropdown').classList;

    if (dropdownClasses.contains('open')) {
      dropdownClasses.remove('open');
    } else {
      dropdownClasses.add('open');
    }
  }

  render() {
    return (
      <div className="user-widget" onClick={this.handleClick}>
        <i className="fa fa-circle" />
        <span className="display-name">{this.state.currentUser.displayName}</span>
        <i className="fa fa-caret-down" />
        <div className="user-widget-dropdown" id="userDropdown">
          <a onClick={this.props.logout} className="logout">logout</a>
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ getCurrentUser, signoutUser }, dispatch);
// }

export default connect(mapStateToProps)(UserWidget);
