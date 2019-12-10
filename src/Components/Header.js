import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <Link to='/dash'>Dashboard</Link>
            <Link to='/profile'>Profile</Link>
        </div>
    )
}

export default Header;