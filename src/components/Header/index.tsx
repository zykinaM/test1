import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => (
  <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 className="my-0 mr-md-auto font-weight-normal">Brand</h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <Link to="/" className="p-2 text-dark">Home</Link>
      <Link to="/news" className="p-2 text-dark">News</Link>
      <Link to="/profile" className="p-2 text-dark">Profile</Link>
    </nav>
  </header>
);

export default memo(Header);
