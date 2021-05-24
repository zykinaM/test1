import React, { FC, memo } from 'react';
import { Row, Col } from 'react-bootstrap';
import NewsCard from '../NewsCard';

const news = [
  {
    title: "Celebrations after Israel-Gaza truce",
    description: "Agreement comes after 11 days of conflict that killed more than 200 Palestinians and 12 people in Israel",
    imgUrl: "https://cdn.cnn.com/cnnnext/dam/assets/210520113611-01-israeli-palestian-tensions-0520-gaza-large-tease.jpg",
  },
  {
    title: "Trump administration secretly obtained CNN reporter's phone and email records",
    description: "This is what CNN reporter was working on during period records were obtained secretly",
    imgUrl: "https://cdn.cnn.com/cnnnext/dam/assets/210520173734-doj-building-file-medium-tease.jpg",
  },
  {
    title: "A secret $55M gift to Sierra Leone symbolizes why Beijing is so mistrusted",
    description: "Nigerian army investigating reports that Boko Haram leader died blowing himself up",
    imgUrl: "https://cdn.cnn.com/cnnnext/dam/assets/210520234921-01-sierra-leone-china-medium-tease.jpg",
  }
]

const NewsList: FC = () => (
  <Row>
    {news.map((item, index) => (
      <Col key={index} xs={12} md={4} className="my-3">
        <NewsCard
          title={item.title}
          description={item.description}
          imgUrl={item.imgUrl}
        />
      </Col>
    ))}
  </Row>
);

export default memo(NewsList);
