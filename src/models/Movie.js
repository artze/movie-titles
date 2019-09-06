class Movie {
  constructor(data) {
    this.movie = data;
  }

  getId() {
    return this.movie.id;
  }

  getTitle() {
    return this.movie.title;
  }

  getDescription() {
    return this.movie.description;
  }

  getLanguages() {
    return this.movie.languages;
  }

  getPosterImageUrl() {
    return this.movie.images.find((image) => image.type === 'POSTER').url;
  }
}

export default Movie;
