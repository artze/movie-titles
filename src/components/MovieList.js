import React from 'react';
import MovieRowItem from '../models/MovieRowItem';
import MovieListItem from './MovieListItem';

class MovieList extends React.Component {
  state = {
    movieObjectArr: null
  };

  populateMovieObjectArr() {
    const movieObjectArr = this.props.data.map(
      (movie) => new MovieRowItem(movie)
    );
    this.setState(() => ({ movieObjectArr }));
  }

  componentDidMount() {
    this.populateMovieObjectArr();
  }

  render() {
    return (
      <div className="movie-list__container">
        <p className="movie-list__title">{this.props.row_name}</p>
        <div className="movie-list__list-container">
          {this.state.movieObjectArr &&
            this.state.movieObjectArr.map((movieRowItem) => (
              <MovieListItem
                key={movieRowItem.getId()}
                movieRowItem={movieRowItem}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
