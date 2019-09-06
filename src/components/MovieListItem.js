import React from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = (props) => (
  <Link to={`/movies/${props.movieRowItem.getId()}`}>
    <div className="movie-list-item__container">
      <img
        src={props.movieRowItem.getPosterImageUrl()}
        alt={props.movieRowItem.getTitle()}
      />
      <span className="movie-list-item__link-text">
        {props.movieRowItem.getTitle()}
      </span>
    </div>
  </Link>
);

export default MovieListItem;
