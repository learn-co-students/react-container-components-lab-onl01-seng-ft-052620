import React, { Component } from 'react'

const MovieReviews = ({ reviews }) => {
    return (
        <ul className="review-list">
            { reviews.map((review) => <li className="review" key={review.display_title}>{review.headline}</li>)}
        </ul>
    )
}

export default MovieReviews
