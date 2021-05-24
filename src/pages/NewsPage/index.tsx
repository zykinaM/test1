import React, { FC, memo } from 'react';
import NewsList from '../../components/NewsList';
import { Container } from 'react-bootstrap';

const NewsPage: FC = () => (
  <Container>
    <NewsList />
  </Container>
);

export default memo(NewsPage);
