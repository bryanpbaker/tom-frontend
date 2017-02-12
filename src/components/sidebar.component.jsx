import React from 'react';

const Sidebar = (props) =>  {

    return (
        <div className={"sidebar columns end " + (props.menuOpen ? 'open' : '')}>

        </div>
    )
}

export default Sidebar;
