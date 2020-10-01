import React from "react";

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((movie, index) => {
        return (
          <div key={index} className="review">
            <p>Author: {movie.byline}</p>
            <p>Date: {movie.date_updated}</p>
            <a href={movie.link.url}>{movie.headline}</a>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default MovieReviews;
