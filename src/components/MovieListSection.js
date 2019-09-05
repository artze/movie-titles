import React from 'react';
import { getMovieListByPage } from '../services/movies/movieService';
import MovieRowsServiceObject from '../services/movies/MovieRowsServiceObject';
import MovieList from './MovieList';

class MovieListSection extends React.Component {
  state = {
    movieRows: []
  };

  async populateMovieRows() {
    const apiResponseObject = await getMovieListByPage(1);
    const movieRowsServiceObject = new MovieRowsServiceObject(
      apiResponseObject.data
    );
    const movieRows = movieRowsServiceObject.getRowsWithMultiTitleManualCuration();

    this.setState(() => ({ movieRows }));

    console.log(this.state.movieRows);
  }

  componentDidMount() {
    this.populateMovieRows();
  }

  render() {
    return (
      <div>
        {this.state.movieRows.map((row) => (
          <MovieList key={row.row_id} {...row} />
        ))}
      </div>
    );
  }
}

export default MovieListSection;
