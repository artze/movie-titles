import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../assets/icons/back-icon.svg';

const NavSection = () => (
  <Link to={'/'}>
    <button className="nav-btn">
      <img src={backIcon} alt="Back icon" />
      &nbsp;Back
    </button>
  </Link>
);

export default NavSection;
