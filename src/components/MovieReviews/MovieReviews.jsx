import React, { useEffect, useState } from 'react'
import { fetchMovieReviews } from '../../services/API';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const {id} = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!id) return;

    const getMovieReviews = async () => {
      try {
        const response = await fetchMovieReviews(id);
        setReviews(response);
      } catch (e){
        console.log(e);
      }
    }
    getMovieReviews();
  }, [id]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3> Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieReviews