import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { fetchMovieDetails } from '../../services/API';

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
      
  return (
    <div>
      <Link to={goBackLink.current}>Go Back</Link>
      <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg} alt="poster" width="250" />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>

      <h2>Additional Information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage

