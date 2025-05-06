import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { fetchMovieDetails } from '../../services/API';
import s from './MovieDetailsPage.module.css';

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";


const MovieDetailsPage = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState({});

  const location = useLocation();
  const goBackLink = useRef(location.state ?? '/')
  
  
  useEffect (() => {
    if (!id) return;

    const getMovieDetails = async () => {
      try {
        const response = await fetchMovieDetails(id);
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, [id]);

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
      
  return (
    <div className="container">
      <Link to={goBackLink.current} className={s.goBackLink}>
        &larr; Go Back
      </Link>
      <div className={s.movieDetails}>
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg}
          alt="poster"
          width="300"
        />
        <div className={s.movieInfo}>
          <h1>{movie.title}</h1>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <p>User Score: {movie.vote_average * 10}%</p>
          <p>Release Date: {formatDate(movie.release_date)}</p>
          
        </div>
      </div>

      <div className={s.additionalInfo}>
        <h3>Additional Information</h3>
        <ul className={s.additionalInfoList}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <div className={s.outLet}>
        <Outlet />
      </div>
    </div>
  );
}

export default MovieDetailsPage

