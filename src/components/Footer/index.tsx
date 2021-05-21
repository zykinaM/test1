import React, { FC, memo } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer: FC = () => (
  <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <Nav>
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/news">News</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/profile">Profile</Link>
      </Nav.Item>
    </Nav>
  </footer>
);

export default memo(Footer);
