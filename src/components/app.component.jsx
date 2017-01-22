import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './header.component';
import Sidebar from './sidebar.component';
import Dashboard from './dashboard.component';

class App extends Component {
  constructor(props) {
    super(props);

    // pass menuOpen state to Sidebar component
    this.state = {
        menuOpen: false,
        currentUser: this.props.currentUser
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  // receive toggleMenu call from Header component
  toggleMenu = (event) => {
      event.preventDefault();
      this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
      return (
          <div className="page-wrapper row">
            <Header toggleMenu={this.toggleMenu} />
            <Sidebar menuOpen={this.state.menuOpen} />
            <Dashboard currentUser={this.state.currentUser} />
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
//   return bindActionCreators({ authenticateUser }, dispatch);
// }

export default connect(mapStateToProps)(App);
