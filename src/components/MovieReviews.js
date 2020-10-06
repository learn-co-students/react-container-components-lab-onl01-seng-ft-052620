// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    const checkUndefined = (props) => {
        if (props === undefined){
            return true
        }else{
            return false
        }
    }
    return(
        <ol className='review-list'>
            {checkUndefined(props.reviews) ? console.log('wait') : props.reviews.map(r => {
                return (
                    <li className='review'>
                        <strong>{r.display_title}</strong>
                        <p>{r.summary_short}</p>
                        {r.multimedia === null? <img src="https://developer.nytimes.com/files/thumb_movies_july-2020.jpg?v=1595646693286" alt="" srcset="" /> : <img src={r.multimedia.src} alt="" srcset="" />}
                    </li>
                )
            })}
        </ol>
    )
}

export default MovieReviews;