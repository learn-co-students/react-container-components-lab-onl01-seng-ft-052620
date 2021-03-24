// Code MovieReviews Here
import React from 'react'
import { nanoid } from 'nanoid';

const Review = ({byline, headline, summary_short, link}) => {

  return (
    <div key={nanoid()} className="review">
      <a href={link.url}> {headline}</a>
      <br/>
      <span className="author">{byline}</span>
      <blockquote>{summary_short}</blockquote>
    </div>
  )
};


const MovieReviews = ({reviews}) => {
    return (
      <div className ="review-list">
          {reviews.map(Review)}
      </div>
    )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews


