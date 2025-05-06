import axios from "axios"

const API_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGU4MDhlNTY2MmI1NDcxMTM3NzdjZGJkNGIxOWY4OSIsIm5iZiI6MTc0NjQ2OTM0Ni4xMTksInN1YiI6IjY4MTkwMWUyMTVjOTEwMmQyMDA4YTc0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7lo0g_Gqdi7RNsu1M1CXztFReplYLWjvhw5Q4snQg-Y";

const options = {
  headers: {
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
  }
}

export const fetchMovies = async () => {
  const response = await axios.get ('https://api.themoviedb.org/3/trending/movie/week', options)
  return response.data.results;
}

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, options);
  return response.data.results;
}

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, options);
  return response.data;
}

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options);
  return response.data.cast;
}

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options);
  return response.data.results;
}