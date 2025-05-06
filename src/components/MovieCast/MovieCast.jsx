import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieCast } from '../../services/API';
import s from './MovieCast.module.css';

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";


const MovieCast = () => {
  const {id} = useParams();
  const [cast, setCast] = useState([]);

  useEffect (() => {
    if (!id) return;

    const getMovieCast = async () => {
      try {
        const response = await fetchMovieCast(id);
        setCast(response);
      } catch (e){
        console.log(e);
      }
    };
    getMovieCast();
  }, [id]);

  return (
    <div>
      <ul className={s.castList}>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : defaultImg} alt={actor.name} width='150' />
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast