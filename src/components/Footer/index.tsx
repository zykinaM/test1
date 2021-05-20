import React, { FC, memo } from 'react';

const Footer: FC = () => (
  <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <small className="d-block mb-3 text-muted">&copy; 2021</small>
    <ul className="list-unstyled text-small">
      <li><a className="text-muted" href="#">Home</a></li>
      <li><a className="text-muted" href="#">News</a></li>
      <li><a className="text-muted" href="#">Page</a></li>
    </ul>
  </footer>
);

export default memo(Footer);
