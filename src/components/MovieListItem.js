import React from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = (props) => (
  <Link to={`/movies/${props.movie.getId()}`}>
    <img src={props.movie.getPosterImageUrl()} alt={props.movie.getTitle()} />
    <span>{props.movie.getTitle()}</span>
  </Link>
);

export default MovieListItem;
