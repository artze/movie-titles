import React from 'react';

const MovieList = (props) => (
  <div>
    <p>{props.row_name}</p>
    <div className="movie-list__list-container">
      {props.data.map((title) => (
        <img src={title.images[0].url} />
      ))}
    </div>
  </div>
);

export default MovieList;
