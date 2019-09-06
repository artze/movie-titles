import axios from 'axios';

class MovieService {
  constructor() {
    this.allPagesFetched = false;
    this.pendingRequest = false;
    this.totalPages = 0;
    this.lastPageFetched = 0;
  }

  async getMovieLists() {
    if (this.pendingRequest || this.allPagesFetched) {
      return [];
    }

    this.pendingRequest = true;
    return axios
      .get(
        `https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=${this
          .lastPageFetched + 1}&perPage=20`
      )
      .then((res) => {
        this.pendingRequest = false;
        this.totalPages = res.data.pagination.totalPages;
        this.lastPageFetched = res.data.pagination.page;
        this.allPagesFetched =
          this.lastPageFetched === this.totalPages ? true : false;

        return res.data.data;
      });
  }
}

export default MovieService;
