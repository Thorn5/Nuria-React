import React from 'react';
import {Outlet, Link, NavLink} from 'react-router-dom';

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
                    <NavLink to='/about'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/posts'>
                        Posts
                    </NavLink>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
    
  )
}

export default Navbar