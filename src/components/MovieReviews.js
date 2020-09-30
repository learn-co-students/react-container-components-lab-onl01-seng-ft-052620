// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review => (
        <li key={review.display_title} className="review">{review.headline}</li>
      ))}
    </div>
  )
}

export default MovieReviews 
