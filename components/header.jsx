import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/newuser">New User</Link>
      <Link to="/login">Login</Link>
      <Link to="/aboutus">About Us</Link>
    </div>
  );
};

export default Header;
