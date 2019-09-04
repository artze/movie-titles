import React from 'react';
import axios from 'axios';
import TitleList from './TitleList';

class App extends React.Component {
  fetchMovieTitles() {
    axios
      .get(
        'https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=1&perPage=20'
      )
      .then((res) => {
        console.log(res);
      });
  }

  componentDidMount() {
    this.fetchMovieTitles();
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
