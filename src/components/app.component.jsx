import React, { Component } from 'react';

import Header from './header.component';
import Sidebar from './sidebar.component';

export default class App extends Component {
    constructor(props) {
        super(props);

        // pass menuOpen state to Sidebar component
        this.state = {
            menuOpen: false
        };

        // receive toggleMenu call from Header component
        this.toggleMenu = () => {
            this.setState({ menuOpen: !this.state.menuOpen });
        };
    }

    render() {
        return (
            <div className="page-wrapper row">
              <Header />
              <Sidebar />
            </div>
        );
    }
}
