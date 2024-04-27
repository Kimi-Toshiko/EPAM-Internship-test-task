import React from 'react';
import '../navbar.css';

type Props  = {};

const Navbar = (props: Props) => {
    return (
        <div className="navbar nav">
          <div id="navbar-content">
            <h1>Async <i>Race</i> </h1>
            <div className="nav-links">
              <ul>
                  <li>Garage</li>
                  <li>Winners</li>
              </ul>
            </div>
          </div>
        </div>
    );
}

export default Navbar;