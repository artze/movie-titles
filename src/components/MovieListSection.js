import React from 'react';
import { getMovieListByPage } from '../services/movieService';
import MovieRows from '../models/MovieRows';
import MovieList from './MovieList';

class MovieListSection extends React.Component {
  state = {
    movieLists: []
  };

  async populateMovieLists() {
    const apiResponseObject = await getMovieListByPage(1);
    const movieRows = new MovieRows(apiResponseObject.data);
    const movieLists = movieRows.getRowsWithMultiTitleManualCuration();

    this.setState(() => ({ movieLists }));
  }

  componentDidMount() {
    this.populateMovieLists();
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
