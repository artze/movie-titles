import React from 'react';
import TitleList from './TitleList';
import { getMovieListByPage } from '../services/movies/movieService';
import MovieRowsServiceObject from '../services/movies/MovieRowsServiceObject';

class App extends React.Component {
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
    return (
      <div>
        <div>Movie Titles</div>
        <TitleList />
      </div>
    );
  }
}

export default App;
