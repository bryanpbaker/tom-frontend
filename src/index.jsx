import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

import Header from './components/header.component';
import Sidebar from './components/sidebar.component';
import Test from './components/test.component';

import '../style/main.scss';

class App extends Component {
    constructor(props) {
        super(props);

        // pass menuOpen state to Sidebar component
        this.state = {
            menuOpen: false
        };

        // receive toggleMenu call from Header component
        this.toggleMenu = () => {
            this.setState({ menuOpen: !this.state.menuOpen })
        }
    }

    render() {
        return(
            <div className="page-wrapper row">
                <Header toggleMenu={this.toggleMenu} />
                <Sidebar menuOpen={this.state.menuOpen} />
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}></Route>
    </Router>
, document.getElementById('app'));
