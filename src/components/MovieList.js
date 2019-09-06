import React from 'react';
import Movie from '../models/Movie';
import MovieListItem from './MovieListItem';

class MovieList extends React.Component {
  state = {
    movieObjectArr: null
  };

  populateMovieObjectArr() {
    const movieObjectArr = this.props.data.map((movie) => new Movie(movie));
    this.setState(() => ({ movieObjectArr }));
  }

  componentDidMount() {
    this.populateMovieObjectArr();
  }

  render() {
    return (
      <div>
        <p>{this.props.row_name}</p>
        <div className="movie-list__list-container">
          {this.state.movieObjectArr &&
            this.state.movieObjectArr.map((movie) => (
              <MovieListItem key={movie.getId()} movie={movie} />
            ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
