class MovieRowItem {
  constructor(data) {
    this.movie = data;
  }

  getId() {
    return this.movie.id;
  }

  getTitle() {
    return this.movie.title;
  }

  getPosterImageUrl() {
    return this.movie.images.find((image) => image.type === 'POSTER').url;
  }
}

export default MovieRowItem;
