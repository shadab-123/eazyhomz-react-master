import React, { useState } from 'react';
import './Dropdown.css';
import { NavLink } from 'react-router-dom';

function Dropdown({ menuItemsData }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {menuItemsData.map((val, index) => {
          return (
            <li >
              <NavLink
                key={val.to}
                exact
                to={val.to}
              >
                <div className='dropdown-link'>{val.text}</div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
