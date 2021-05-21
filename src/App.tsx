import React, { FC, memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import NewsPage from './pages/NewsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateComponent from './pages/PrivateComponent';
import { Container } from 'react-bootstrap';

const App: FC = () => (
  <Provider store={store}>
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/news" component={NewsPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="/" component={PrivateComponent} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  </Provider>
);

export default memo(App);
