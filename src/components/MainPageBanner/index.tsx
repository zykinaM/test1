import React, { FC, memo } from 'react';
import { Button, Jumbotron, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainPageBanner: FC = () => (
  <Jumbotron>
    <Container>
      <h1>Hello!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare elit in erat tempor varius.
        In finibus lacus sit amet nulla eleifend, at sagittis augue vestibulum. Proin lobortis leo et
        hendrerit aliquet. Integer elit velit, porta id orci eget, bibendum scelerisque tortor.
        Nunc semper efficitur malesuada. Sed facilisis odio rutrum faucibus pulvinar.
        Donec semper est sed lectus porttitor, sit amet lacinia leo convallis.
        Mauris at nunc diam. Phasellus posuere augue molestie, aliquet ipsum eget, tempor justo.
      </p>
      <Link to="/news">
        <Button>
          More news
        </Button>
      </Link>
    </Container>
  </Jumbotron>
);

export default memo(MainPageBanner);
