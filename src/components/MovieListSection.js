import React from 'react';
import debounce from 'lodash.debounce';
import MovieService from '../services/MovieService';
import MovieRows from '../models/MovieRows';
import MovieList from './MovieList';

class MovieListSection extends React.Component {
  constructor(props) {
    super(props);
    this.handleScrollEvent = debounce(() => this.appendMovieLists(), 200);
  }

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
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight - 500
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
    window.addEventListener('scroll', this.handleScrollEvent);
  }

  removeScrollEventListener() {
    window.removeEventListener('scroll', this.handleScrollEvent);
  }

  componentDidMount() {
    this.populateMovieLists();
    this.addScrollEventListener();
  }

  componentWillUnmount() {
    this.removeScrollEventListener();
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
