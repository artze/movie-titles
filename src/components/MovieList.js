import React from 'react';
import Movie from '../models/Movie';

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
              <div key={movie.getId()}>
                <img src={movie.getPosterImageUrl()} alt={movie.getTitle()} />
                <span>{movie.getTitle()}</span>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
