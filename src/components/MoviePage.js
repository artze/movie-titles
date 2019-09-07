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
      <div className="movie-page__container">
        <div className="movie-page__content">
          <div className="movie-page__content-column">
            <h1 className="movie-page__title">{title}</h1>
            <img src={imageUrl} alt={title} />
          </div>
          <div className="movie-page__content-column">
            <div className="movie-page__description-container">
              <p className="movie-page__text">{description}</p>
              {languages && languages.length > 0 && (
                <div className="movie-page__text">
                  Available in:{' '}
                  {languages.map((language, index) => (
                    <div
                      key={language}
                      className="movie-page__language-container"
                    >
                      {language}
                      {index < languages.length - 1 && <span>,&nbsp;</span>}
                    </div>
                  ))}
                </div>
              )}
              <div className="movie-page__action-container">
                <button>Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePage;
