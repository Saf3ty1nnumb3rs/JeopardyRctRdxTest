import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="links">
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/categories'><h3>Categories</h3></Link>
    </div>
  );
};

export default Header;