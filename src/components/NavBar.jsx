import React from 'react';
import {NavLink}from 'react-router-dom';
function NavBar() {
  return (
    <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/apartments">Apartments</NavLink>
            </li>
            <li>
                <NavLink to= "/create">Create a Apartment</NavLink>
            </li>

        
          </ul>
        </nav>
  );
}

export default NavBar;
