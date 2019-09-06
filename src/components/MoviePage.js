import React from 'react';
import axios from 'axios';
import Movie from '../models/Movie';

class MoviePage extends React.Component {
  movieId = this.props.location.pathname.substring(
    this.props.location.pathname.lastIndexOf('/') + 1
  );

  state = {
    movie: null
  };

  getMovieData() {
    axios
      .get(`https://cdn-discover.hooq.tv/v1.2/discover/titles/${this.movieId}`)
      .then((res) => {
        console.log(res.data.data);
        this.setState(() => ({ movie: new Movie(res.data.data) }));
      });
  }

  componentDidMount() {
    this.getMovieData();
  }

  render() {
    const title = this.state.movie && this.state.movie.getTitle();
    const imageUrl = this.state.movie && this.state.movie.getPosterImageUrl();
    const description = this.state.movie && this.state.movie.getDescription();
    const languages = this.state.movie && this.state.movie.getLanguages();

    return (
      <div>
        <h1>{title}</h1>
        <img src={imageUrl} alt={title} />
        <p>{description}</p>
        {languages && languages.length > 0 && <p>Available in: {languages}</p>}
      </div>
    );
  }
}

export default MoviePage;
