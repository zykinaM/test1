import React, { FC, memo } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

interface Props {
  user: string;
  onLogout: () => void;
}

const UserData: FC<Props> = ({ user, onLogout }) => {
  return (
    <Row className="py-3">
      <Col>
        UserName: {user}
        <Button onClick={onLogout} variant="outline-primary" size="sm" className="mx-3">Logout</Button>
      </Col>
    </Row>
  );
};

export default memo(UserData);
