import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
    return (
        <div className="header">
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text logo">
                            <Link to="">
                                <i className="fa fa-lightbulb-o" />
                                <span className="tom">Tom</span>
                                <span className="app">App</span>
                            </Link>
                        </li>
                        <a href="" className="show-for-small-only ">
                            <i className="fa fa-bars menu-toggle" onClick={props.toggleMenu} />
                        </a>
                        <li className="hide-for-small-only">
                            <a href="">One</a>
                        </li>
                        <li className="hide-for-small-only">
                            <a href="">Two</a>
                        </li>
                        <li className="hide-for-small-only">
                            <a href="">Three</a>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right hide-for-small-only">
                    <a onClick={props.logout} className="logout">logout</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
