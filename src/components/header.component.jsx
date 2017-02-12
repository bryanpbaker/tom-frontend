import React from 'react';
import { Link } from 'react-router';

import UserWidget from './user-widget.component';

const Header = (props) => {
    return (
        <div className="header">
            <div className="top-bar">
                <div className="top-bar-left">
                  <div className="menu-text logo">
                      <Link to="">
                          <i className="fa fa-lightbulb-o" />
                          <span className="tom">Tom</span>
                          <span className="app">App</span>
                      </Link>
                  </div>
                </div>
                <div className="top-bar-right hide-for-small-only">
                  <UserWidget logout={props.logout} />
                </div>
            </div>
        </div>
    );
};

export default Header;
