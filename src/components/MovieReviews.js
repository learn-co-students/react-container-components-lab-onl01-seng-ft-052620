import React from 'react'

const MovieReviews = (props) => (
    <div className='review-list'>   
    {props.reviewsLists.map(review => 

    <div className='review'>
    <h2>{review.byline}</h2>
    <p>{review.headline}</p>
    </div>

    )}

    </div>

    )

export default MovieReviews