import React, { FC, memo } from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer: FC = () => (
  <footer >
    <small className="d-block mb-3 text-muted">&copy; WS 2021</small>
  </footer>
);

export default memo(Footer);
