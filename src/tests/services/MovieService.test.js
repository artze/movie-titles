import axios from 'axios';
import MovieService from '../../services/MovieService';
import { movieLists } from '../fixtures/movieLists';

jest.mock('axios');

test('should set instance variables correctly after retrieving first page of movie lists', async () => {
  jest.clearAllMocks();
  axios.get.mockResolvedValue(movieLists.page1);
  const movieService = new MovieService();
  await movieService.getMovieLists();

  expect(movieService.lastPageFetched).toEqual(1);
  expect(movieService.totalPages).toEqual(2);
  expect(movieService.allPagesFetched).toEqual(false);
});

test('should set instance variables correctly after retrieving last page of movie lists', async () => {
  jest.clearAllMocks();
  axios.get.mockResolvedValue(movieLists.page2);
  const movieService = new MovieService();
  await movieService.getMovieLists();

  expect(movieService.lastPageFetched).toEqual(2);
  expect(movieService.totalPages).toEqual(2);
  expect(movieService.allPagesFetched).toEqual(true);
});

test('should not trigger axios after last page of movie lists', async () => {
  jest.clearAllMocks();
  axios.get.mockResolvedValue(movieLists.page2);
  const movieService = new MovieService();
  await movieService.getMovieLists();
  await movieService.getMovieLists();

  expect(axios.get).toHaveBeenCalledTimes(1);
});

test('should not trigger axios when there is a pending request', async () => {
  jest.clearAllMocks();
  axios.get.mockResolvedValue(movieLists.page1);

  const movieService = new MovieService();

  await movieService.getMovieLists();
  await movieService.getMovieLists();
  movieService.getMovieLists();
  movieService.getMovieLists();

  expect(axios.get).toHaveBeenCalledTimes(3);
});
