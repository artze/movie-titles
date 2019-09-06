import React from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = (props) => (
  <Link to={`/movies/${props.movieRowItem.getId()}`}>
    <img
      src={props.movieRowItem.getPosterImageUrl()}
      alt={props.movieRowItem.getTitle()}
    />
    <span>{props.movieRowItem.getTitle()}</span>
  </Link>
);

export default MovieListItem;
