import React from 'react'

const MovieReviews = ({ reviews }) => {
  return (
    <ol className="review-list">
      {reviews.map(review => (
        <li key={review.display_title} className="review">{review.headline}</li>
      ))}
    </ol>
  )
}

export default MovieReviews