import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchMoviesByQuery } from '../../services/API';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';

const MoviesPage = () => {
  const [movies, setMovies] = useState([])
  const [searchParam, setSearchParam] = useSearchParams();
  const query = searchParam.get('query');
  
  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try{
        const response = await fetchMoviesByQuery(query);
        setMovies(response)
      } catch (error) {
        console.log(error); 
      }
    }
    getMovies();
  }, [query]);

  const handleSubmit = (value) => {
    setSearchParam({query: value});
  }

  const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <MovieList movies={filteredMovies} />
    </div>
  )
}

export default MoviesPage