class MovieRowItem {
  constructor(data) {
    this.movieRowItem = data;
  }

  getId() {
    return this.movieRowItem.id;
  }

  getTitle() {
    return this.movieRowItem.title;
  }

  getPosterImageUrl() {
    return this.movieRowItem.images.find((image) => image.type === 'POSTER')
      .url;
  }
}

export default MovieRowItem;
