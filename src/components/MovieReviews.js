import React from 'react'

const MovieReview = ({reviewsLists}) => (

    <div className='review-list'>

    {reviewsLists.map(review => 

    <div className='review'>
    <h2>{review.byline}</h2>
    <p>{review.headline}</p>
    </div>

    )}

    </div>

    )

export default MovieReview