import React from 'react';
import { getMovieListByPage } from '../services/movies/movieService';
import MovieRowsServiceObject from '../services/movies/MovieRowsServiceObject';
import TitleList from './TitleList';

class MovieListSection extends React.Component {
  async fetchMovieList() {
    const apiResponseObject = await getMovieListByPage(1);
    const movieRowsServiceObject = new MovieRowsServiceObject(
      apiResponseObject.data
    );

    console.log(movieRowsServiceObject.getRowsWithMultiTitleManualCuration());
  }

  componentDidMount() {
    this.fetchMovieList();
  }

  render() {
    return <TitleList />;
  }
}

export default MovieListSection;
