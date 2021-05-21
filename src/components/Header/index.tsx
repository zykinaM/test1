import React, { FC, memo } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header: FC = () => (
  <Navbar bg="light">
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav activeKey="home">
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
  </Navbar>
);

export default memo(Header);
