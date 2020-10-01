// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => { return <div className={'review-list'}> 

{
    props.reviews.map(review => 
        <div className='review'>
            <h2> {review.display_title} </h2>
            <p>Released: {review.opening_date} </p>
            <img src={review.multimedia.src}></img>
            <p> Rated: {review.mpaa_rating} </p>
            <p> Critics Pick: {review.critics_pick} </p>
            <p> Byline: {review.byline }</p>
            <p> Headline: {review.headline} </p> 
            <p> Published: {review.publication_date} </p>
            <a href={review.link.url}>{review.link.suggested_link_text}</a>
            <p> {review.summary_short} </p>
        </div>
)}

</div>

}
 
export default MovieReviews