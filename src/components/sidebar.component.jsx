import React from 'react';

const Sidebar = (props) =>  {

    return (
        <div className={"sidebar columns end " + (props.menuOpen ? 'open' : '')}>
            <ul className="vertical menu" data-accordion-menu>
              <li>
                <a href="#">Item 1</a>
                <ul className="menu vertical nested">
                  <li><a href="#">Item 1A</a></li>
                  <li><a href="#">Item 1B</a></li>
                </ul>
              </li>
              <li><a href="#">Item 2</a></li>
            </ul>
        </div>
    )
}

export default Sidebar;
