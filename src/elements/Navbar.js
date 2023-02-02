import React from 'react';
import {Outlet, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='navbar'>
                <div>
                    <NavLink to='/'>
                        Fetch news
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/react-news'>
                        React news
                    </NavLink>
                </div>
            </ul>
        </nav>
        <Outlet/>
    </div>

  )
}

export default Navbar