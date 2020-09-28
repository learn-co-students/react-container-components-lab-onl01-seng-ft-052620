import React from 'react'

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      { reviews.map( (review,i) => {
        return (
          <div key={i} className="review">
            <h1>{ review.display_title }</h1>
            <a href={review.link.url}>Link to review</a>
          </div>
        )
      } ) }
    </div>
  )
}

export default MovieReviews