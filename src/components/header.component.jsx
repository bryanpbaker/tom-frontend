import React from 'react';
import { Link } from 'react-router';

const Header = () => {

    return(
        <div className="header">
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text logo"><Link to=""><i className="fa fa-lightbulb-o"></i><span className="tom">Tom</span><span className="app">App</span></Link></li>
                        <li>
                            <a href="#">One</a>
                            <ul className="menu vertical">
                              <li><a href="#">One</a></li>
                              <li><a href="#">Two</a></li>
                              <li><a href="#">Three</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Two</a></li>
                        <li><a href="#">Three</a></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <a href="#" className="logout">logout</a>
                </div>
            </div>
        </div>
    )
}

export default Header;
