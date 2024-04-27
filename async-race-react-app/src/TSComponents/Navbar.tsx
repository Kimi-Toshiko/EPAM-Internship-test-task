import React from 'react';
import '../navbar.css';
import { NavLink } from 'react-router-dom';

type Props  = {};

const Navbar = (props: Props) => {
    return (
        <div className="navbar nav">
          <div id="navbar-content">
            <h1>Async <i>Race</i> </h1>
            <div className="nav-links">
              <ul>
                  <li><NavLink to={'/'}>Garage</NavLink></li>
                  <li><NavLink to={'/winners'}>Winners</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
    );
}

export default Navbar;