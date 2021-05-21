import React, { FC, memo } from 'react';
import NewsList from '../../components/NewsList';

const NewsPage: FC = () => (
  <NewsList />
);

export default memo(NewsPage);
