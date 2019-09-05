import React from 'react';
import debounce from 'lodash.debounce';
import MovieService from '../services/MovieService';
import MovieRows from '../models/MovieRows';
import MovieList from './MovieList';

class MovieListSection extends React.Component {
  state = {
    movieLists: []
  };

  movieService = new MovieService();

  async populateMovieLists() {
    const apiResponseData = await this.movieService.getMovieLists();
    const movieRows = new MovieRows(apiResponseData);
    const movieLists = movieRows.getRowsWithMultiTitleManualCuration();

    this.setState(() => ({
      movieLists
    }));
  }

  async appendMovieLists() {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      const apiResponseData = await this.movieService.getMovieLists();
      const movieRows = new MovieRows(apiResponseData);
      const movieLists = movieRows.getRowsWithMultiTitleManualCuration();

      this.setState((state) => ({
        movieLists: state.movieLists.concat(movieLists)
      }));
    }
  }

  addScrollEventListener() {
    window.addEventListener(
      'scroll',
      debounce(() => this.appendMovieLists(), 200)
    );
  }

  componentDidMount() {
    this.populateMovieLists();
    this.addScrollEventListener();
  }

  render() {
    return (
      <div>
        {this.state.movieLists.map((row) => (
          <MovieList key={row.row_id} {...row} />
        ))}
      </div>
    );
  }
}

export default MovieListSection;
