import axios from 'axios';

export const getMovieListByPage = (pageNumber) =>
  axios
    .get(
      `https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=${pageNumber}&perPage=20`
    )
    .then((res) => res.data.data);
