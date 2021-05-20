import React, { FC, memo } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './core/history';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import NewsPage from './pages/NewsPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import Footer from './components/Footer';

const App: FC = () => (
  <div className="App">
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  </div>
);

export default memo(App);
