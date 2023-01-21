import React from 'react';
import {Outlet, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/issues'>
                       Issues list
                    </NavLink>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
    
  )
}

export default Navbar