// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => {
        return (
            <div className="review-list">
                {reviews.map(Review)}
            </div>
        )
}

const Review = ({ headline, display_title, publication_date, summary_short }) => {
    return (
        <div key={headline} className = "review">
            {display_title} <br />
            Published: {publication_date}
            <blockquote>Summary: {summary_short}</blockquote>
        </div>
    )
}

// MovieReviews.defaultProps = {
//     reviews: []
// }

export default MovieReviews
