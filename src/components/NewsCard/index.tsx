import React, { FC, memo } from 'react';
import { Card, Button } from 'react-bootstrap';

interface Props {
  title: string,
  description: string,
  imgUrl: string,
}

const NewsCard: FC<Props> = ({ title, description, imgUrl }) => (
  <Card>
    <Card.Img variant="top" src={imgUrl} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Button variant="primary">Read more</Button>
    </Card.Body>
  </Card>
);

export default memo(NewsCard);
