import React from 'react';
import TitleList from './TitleList';
import { getMovieListByPage } from '../services/movies/movieService';

class App extends React.Component {
  async fetchMovieList() {
    const result = await getMovieListByPage(1);
    console.log(result);
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
