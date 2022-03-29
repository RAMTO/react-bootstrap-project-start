import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-pale py-5">
      <div className="container">
        <div>
          <Link className="link-primary p-3" to="/">
            Home
          </Link>
          <Link className="link-primary p-3" to="/styleguide">
            Styleguide
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
