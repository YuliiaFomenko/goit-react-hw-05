import React, { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList/MovieList'
import { fetchMovies } from '../../services/API'
import s from './HomePage.module.css'

const HomePage = () => {

  const [movies, setMovies] = useState([])
  

useEffect(() => {
  const getMovies = async () => {
    try {
      const response = await fetchMovies()
      setMovies(response);
    } catch (error) {
      console.log(error);
    } 
  }
  getMovies();
}, [])

  return (
    <div className='container'>
      <h1 className={s.title}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  )
}

export default HomePage