import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';
import Movie from '../components/Movie';

const AppRouter = () => (
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/movies/:id" component={Movie} />
  </Router>
);

export default AppRouter;
