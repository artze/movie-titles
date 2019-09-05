import React from 'react';
import { getMovieListByPage } from '../services/movies/movieService';
import MovieRowsServiceObject from '../services/movies/MovieRowsServiceObject';
import TitleList from './TitleList';

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
    return <TitleList />;
  }
}

export default MovieListSection;
