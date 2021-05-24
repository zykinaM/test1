import React, { FC, memo } from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer: FC = () => (
  <footer >
    <Row className="justify-content-center">
      <Col xs="auto">
        <small className="d-block mb-3 text-muted">&copy; WS 2021</small>
      </Col>
    </Row>
  </footer>
);

export default memo(Footer);
