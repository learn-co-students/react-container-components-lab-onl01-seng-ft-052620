// Code MovieReviews Here
/******************************************************
 * Properties to integrate i
 * results: is the array of movies returned
 * headline: Displays thee movie title
 * byline: author
 * publication_date: gives the publication date of the movie
 * summary: hist a summary of the movie
 * link.url: gives a link to the full review 
*******************************************************/

import React from 'react'
import MovieReview from './MovieReview'
const MovieReviews = ({reviews})=>(
    <div className="review-list">
        {reviews.map(
            (review)=> 
                <div className="review">
                    <MovieReview
                        title={review.headline} 
                        author={review.byline} 
                        publication_date={review.publication_date} 
                        summary={review.summary_short} 
                        full_article_link={review.link.url}  
                    />
                </div>
            )
        }
    </div>
)
export default MovieReviews;