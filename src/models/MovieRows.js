class MovieRows {
  constructor(apiResponseData) {
    this.movieRows = apiResponseData.data;
  }

  getRowsWithMultiTitleManualCuration() {
    return this.movieRows.filter(
      (row) => row.type === 'Multi-Title-Manual-Curation'
    );
  }
}

export default MovieRows;
