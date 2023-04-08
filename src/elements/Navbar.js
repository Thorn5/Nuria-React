import React, {useContext} from 'react';
import {Outlet, NavLink} from 'react-router-dom';
import { CounterContext } from '../context/CounterProvider';

const Navbar = () => {
    const {counter} = useContext(CounterContext);
  return (
    <div>
        <nav>
            <ul className='navbar'>
                <div className='navbar-links'>
                    <NavLink to='/login'>
                        Login
                    </NavLink>
                    <NavLink to='/signup'>
                        Signup
                    </NavLink>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <NavLink to='/new_film'>
                        Add new film
                    </NavLink>
                </div>
                <div>Counter: {counter}</div>
            </ul>
        </nav>
        <Outlet/>
    </div>

  )
}

export default Navbar