import React from 'react';
import Movie from '../models/Movie';
import NavSection from './NavSection';
import MovieService from '../services/MovieService';

class MoviePage extends React.Component {
  state = {
    movie: null
  };

  movieId = this.props.location.pathname.substring(
    this.props.location.pathname.lastIndexOf('/') + 1
  );

  movieService = new MovieService();

  async populateMovieData() {
    const apiResponseData = await this.movieService.getMovieDataById(
      this.movieId
    );
    const movie = new Movie(apiResponseData);

    this.setState(() => ({ movie }));
  }

  componentDidMount() {
    this.populateMovieData();
  }

  render() {
    const title = this.state.movie && this.state.movie.getTitle();
    const imageUrl = this.state.movie && this.state.movie.getPosterImageUrl();
    const description = this.state.movie && this.state.movie.getDescription();
    const languages = this.state.movie && this.state.movie.getLanguages();

    return (
      <div className="movie-page__container">
        <NavSection />
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
