import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import App from '../components/App';
import MoviePage from '../components/MoviePage';

const AppRouter = () => (
  <Router>
    <Header />
    <Route exact path="/" component={App} />
    <Route exact path="/movies/:id" component={MoviePage} />
  </Router>
);

export default AppRouter;
